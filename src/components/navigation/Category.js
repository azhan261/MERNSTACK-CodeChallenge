import React, { useState, useEffect, }  from 'react'
import { useRouteMatch, useNavigate, useLocation,  useParams } from "react-router-dom";
import { getFilms, getStarShips, getPlanets, getCharacters  } from '../../apis/apiForFetching';
import { getCurrentUser, getUserDetails } from "../../auth/AuthServices";
import { usePromiseTracker } from "react-promise-tracker";
import {BallTriangle } from 'react-loader-spinner'
import { trackPromise} from 'react-promise-tracker';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Category() {
    let { category } = useParams();
    const [items, setItems] = useState([])
    const [user, setUser] = useState("");


    const { promiseInProgress } = usePromiseTracker(category)
    useEffect(() => {
        setUser(getCurrentUser());
        const fetchItems = async function() {
        if(category === "Films"){
        const contents = await getFilms()
          setItems(contents)
        }
        else if(category === "Starships"){
            const contents = await getStarShips()
            setItems(contents)
            }
        else if(category === "Planets"){
            const contents = await getPlanets()
            setItems(contents)
            }
        else if(category === "Characters"){
            const contents = await getCharacters()
            setItems(contents)
            }      
        }
        
        fetchItems()
      }, []);
    console.log(items.results)
    const location = useLocation();
    console.log(category)
    console.log(location.state)
    const history = useNavigate()
    var serialNumber = 0
    const style = { flex: 1,
        marginTop:240, textAlign: 'center', justifyContent: 'center',
    alignItems:'center'};
    const handlingSerialNumber = () => {
        serialNumber = serialNumber + 1
        return(
            <td>{serialNumber}</td>
        )
    }

    const renderData = () => {
        if(category === "Films"){
           return(
                      
            <div>
            <img src="http://localhost:7000/images/films.jpg" style={{maxWidth:'150px', textAlign:'center'}}></img>
            {
            (promiseInProgress === true) ?
            <div style = {style}>
                
              <BallTriangle color="#FDEA00" height={100} width={100} style = {{  flex: 1,
             alignSelf:'center'}}
                /> 
            </div>
            :
            items.results != null ? items.results.map(contents => (
                <div key={contents._id}>
                    <p style = {{ color:'#FDEA00', fontWeight:'bold'}}><b>Title:</b> {contents.title}, &nbsp;<b>Director:</b> {contents.director}, &nbsp;<b>Release Date:</b>  {contents.release_date}, </p>
                </div>
            )) 
            : 
            <div>
                
            </div>
            }
            </div>
           )
        }
            else if(category === "Starships"){
                return(
                      
                    <div>
           <img src="http://localhost:7000/images/starships.jpg" style={{maxWidth:'150px', textAlign:'center'}}></img>
                    {
                    (promiseInProgress === true) ?
                    <div style = {style}>
                        
                      <BallTriangle color="#FDEA00" height={100} width={100} style = {{  flex: 1,
                     alignSelf:'center'}}
                        /> 
                    </div>
                    :
                    items.results != null ? items.results.map(contents => (
                        <div key={contents._id}>
                            <p style = {{ color:'#FDEA00', fontWeight:'bold'}}><b>Name:</b> {contents.name}, &nbsp;<b>Manufacturer:</b> {contents.manufacturer}, &nbsp;<b>Model:</b>  {contents.model}, </p>
                        </div>
                    )) : 
                    <div>
                        
                    </div>
                    }
                    </div>
                   )
                }
            else if(category === "Characters"){
                return(
                      
                    <div>
           <img src="http://localhost:7000/images/characters.jpg" style={{maxWidth:'150px', textAlign:'center'}}></img>
                    {
                    (promiseInProgress === true) ?
                    <div style = {style}>
                        
                      <BallTriangle color="#FDEA00" height={100} width={100} style = {{  flex: 1,
                     alignSelf:'center'}}
                        /> 
                    </div>
                    :
                    items.results != null ? items.results.map(contents => (
                        <div key={contents._id}>
                            <p style = {{ color:'#FDEA00', fontWeight:'bold'}}><b>Name:</b> {contents.name}, &nbsp;<b>Gender:</b> {contents.gender}, &nbsp;<b>Birth Year:</b>  {contents.birth_year}, </p>
                        </div>
                    )) : 
                    <div>
                        
                    </div>
                    }
                    </div>
                   )
                }
            else if(category === "Planets"){
                return(
                      
                    <div>
        <img src="http://localhost:7000/images/planets.jpg" style={{maxWidth:'150px', textAlign:'center'}}></img>
                    {
                    (promiseInProgress === true) ?
                    <div style = {style}>
                        
                      <BallTriangle color="#FDEA00" height={100} width={100} style = {{  flex: 1,
                     alignSelf:'center'}}
                        /> 
                    </div>
                    :
                    items.results != null ? items.results.map(contents => (
                        <div key={contents._id}>
                            <p style = {{ color:'#FDEA00', fontWeight:'bold'}}><b>Name:</b> {contents.title}, &nbsp;<b>Population:</b> {contents.population}, &nbsp;<b>Terrain:</b>  {contents.terrain}, </p>
                        </div>
                    )) : 
                    <div>
                        
                    </div>
                    }
                    </div>
                   )
                }      
    }
    return(
      <>
       <AppBar style={{color:"#f5ba1a", backgroundColor:'black'}}>
            <Toolbar>
                <h3 style={{ flexGrow: "1" }}>May the force be with you {user.name}!</h3>
                {!user && (
                    <React.Fragment>
                        <Link to="/login">
                            <Button
                                style={{ marginRight: "10px" }}
                                variant="outlined"
                                color="secondary"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="outlined" color="secondary">
                                Signup
                            </Button>
                        </Link>
                    </React.Fragment>
                )}
                {user && (
                    <React.Fragment>
                        
                        <Link to="/">
                            <button className="btn btn" style={{backgroundColor:"#f5ba1a", color:"black", fontWeight:'bold', textDecoration:'none'}}>
                                Logout
                            </button>
                        </Link>
                    </React.Fragment>
                )}
            </Toolbar>
        </AppBar>
        <section >
        <div className="container-fluid" >
        <div >
        <div className = "mt-5 pt-4">

        <div className="d-flex flex-column" >
        {/* Main Content */}
        <div >
        {/* Begin Page Content */}
        <div className="mt-5" style={{backgroundColor:'black', opacity: 0.7 ,outlineStyle:'solid', outlineColor:'#FDEA00'}}>
        
            <h1 className='text-center display-4 my-3 text-white'>Category {category}</h1>
            
            
            <div className=" align-middle justify-content-center m-auto   col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
            <div className="my-3" >
                <h5 className="mb-2  display-5 text-center"></h5>
            </div>
            <div className="card-body text-center">
           
                {renderData()}
            </div>
            </div>
             
        </div>
        
        </div>

        </div>

      </div>
      </div>
      </div>
      </section>
     </>
  )
}

export default Category;
