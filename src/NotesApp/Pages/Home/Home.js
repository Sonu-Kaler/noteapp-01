import React from "react";
import Nav from "../../Components/Nav/Nav";
import { NavLink } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <Nav />
            <div className="home-container"> 

            <p className="home-text">
                Welcome to MakeNote App
            </p>
            <NavLink to="/signup" style={{textDecoration:"none"}}>
                Click to Signup
            </NavLink>
            </div>
        </div>
    )
}

export default Home;