import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, getUserDetails } from "../../auth/AuthServices";
import { AppBar, Toolbar, Button } from "@material-ui/core";

function Home() {
const test = "test"
  return (
  <div>
    <section>
    <div className="text-center">
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
                                Sign Up
                            </button>
                        </Link>
                    </React.Fragment>
            </Toolbar>
            
        </AppBar>
        </div>
        <div className="imgBox mt-5" >
        <img src={`${process.env.PUBLIC_URL}/assets/img/content.jpg`} width="240px" />
       
        </div>
        <div >
        <div >
          <img src={`${process.env.PUBLIC_URL}/assets/img/star1.jpg`}  style={{width: '100%'}} />
        </div>
    
        </div>
        </section>
        
  </div>
  )
}

export default Home;
