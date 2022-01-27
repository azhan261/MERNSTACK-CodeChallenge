import React, { useState, useEffect }  from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useNavigate, Link, useLocation,  } from "react-router-dom";
import { createRegistrations } from '../apis/apiForRegistration';
import { login } from './AuthServices';
import bcrypt, { hash } from 'bcryptjs';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import "./formCss.scss"

import { AppBar, Toolbar, Button } from "@material-ui/core";
function LoginComponent() {
    const initialArray = [
       
    ]
  
  
  
  
    /*const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
    });*/
  
    /*const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });*/
   
    const [files, setFiles] = useState([])
    const [newNameForCv, setNewNameForCv] = useState([])
    const [newNameForImg, setNewNameForImg] = useState([])
    const MySwal = withReactContent(Swal)
  
    /*const { register, handleSubmit } = useForm({
      defaultValues: { text: todo ? todo.text : "" },
    });*/
  
    /*const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });*/
    const [currentReg, setCurrentReg] = useState(initialArray)
    const location = useLocation();
    const history = useNavigate()

  
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const onSubmitHandler = async (data) => {
      setCurrentReg(data)
      /*history.push({
        pathname:"/stripe-checkout",
        state: data
      })
      */
   }
    const onSubmit = async () => {
      console.log()
      //Password Hashing
      try {
        const { data } = await login(formik.values);
        console.log(data)
        window.localStorage.setItem("token", data);
        history("/welcome");
    } catch (error) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        errors.password = error.response.data;
        this.setState({ errors });
    }
      //createRegistrations(data)
      /*
      MySwal.fire(
        {
        title: 'Registered Successfully!',
        text : 'Click on login to go to login page',
        type: 'success',
        confirmButtonText: 'Login'
      }).then(() => {
       console.log('hit')
       //redirecting 
       history.push("/login")
    });
    */
  }
    
      //1 Start of by making initial values 
      const formik = useFormik({
          initialValues: {
            
              email: '',
              password:'',
         
          },
          
          //4 Make onSubmit propert to handle what happens to data on form submisison
  
          onSubmit: values => {
  
            
            //createTodo(formik.values)
            //redirecting 
            //history.push("/")
       
            onSubmit(formik.values)
 
          },
  
          //5 Make validation property
  
          validate: values => {
              
              let errors = {}
  
              const letters = /^[A-Za-z ]+$/;
  
              const cnic = /^[0-9--]+$/;
  
              const phone = /^[0-9]+$/;
  
              const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
              
        
    
              
    
                
         
              
    
              return errors
  
  
          }
  
  
      })
  
      console.log("Form errors", formik.errors)
  
  
  return <div>
        <>
        <AppBar style={{color:"#f5ba1a", backgroundColor:'black',}}>
            <Toolbar>
              <a href="https://html5op.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}  className="logo" /></a>
    
                    <React.Fragment style={{float:"left"}}>
                        <Link to="/login" className="pl-3 ml-3">
                            <button className="btn btn" style={{backgroundColor:"#f5ba1a", color:"black", fontWeight:'bold', textDecoration:'none', }}>
                                Login
                            </button>
                        </Link>
                        <Link to="/sign-up" className="pl-3 ml-3">
                          <button className="btn btn" style={{backgroundColor:"#f5ba1a", color:"black", fontWeight:'bold', textDecoration:'none',}}>
                                Sign In
                            </button>
                        </Link>
                    </React.Fragment>
            </Toolbar>
            
        </AppBar>
                    <div>
      {/* ======= Contact Section ======= */} 
      <section id="hero">
        <div className="container" data-aos="fade-up">
            <div className="form_wrapper">
              <div className="form_container">
                <div className="title_container">
                  <h3>Login</h3>
                </div>
            <div>
            <form className="php-email-form" data-aos="fade-up" onSubmit={formik.handleSubmit} >
            <div className="row">
           
                  <div className="col-md-12 mt-3" >
                    <div className="form-group">
                    <label htmlFor style = {{color : "white"}}>Email Address*</label>
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                      <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />
                      </div>
                      {formik.touched.email ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.email}</div>) : null}
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <label htmlFor style = {{color : "white"}}>Password*</label>
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-key" /></span>
                    <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} required />
                  </div>
                  </div>
          
               
                </div>
                <div>
                        <input class="button" type="submit" style  = {{fontWeight: 'bold'}} className = "w-100 mt-2" />
                </div>
            </form>
            </div>
            </div>
            </div>
        </div>
        
      </section>{/* End Contact Section */}
  </div>
                </>
  </div>;
}

export default LoginComponent;
