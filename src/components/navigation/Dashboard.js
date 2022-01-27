import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, getUserDetails } from "../../auth/AuthServices";
import { AppBar, Toolbar, Button } from "@material-ui/core";

function Dashboard() {
    const [user, setUser] = useState("");
    const [items, setItems] = useState([])

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);
    console.log(items)
  return <div>
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
        <div>
       <div >
        <section className = "mt-5">
        <div >
          <div className="imgBox">
            <img src="assets/img/content.jpg" width="240px" />
            <h4>Select a category to view details</h4>
            <br />
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Films',
                
              }}>Star Wars Films </Link>
            </div>
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Characters',
                 
              }}>Star Wars Characters</Link>
            </div>
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Planets',
                  
              }}>Star Wars Planets  </Link>
            </div>
            <br />
            <br />
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Starships',
                 
              }}>Star Wars Starships </Link>
            </div>
          </div>
              </div>
        </section>
       
      </div>
  </div>
  </div>;
}

export default Dashboard;
