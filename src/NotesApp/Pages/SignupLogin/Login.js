import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { setUser } from "../../Redux/Slices/UserSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
const Login=()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin=async()=>{
        if( email && password ){
            try{
                dispatch(setUser({
                    email:email,
                    password:password,
                    id:nanoid()
                }))
                navigate("/dashboard");
                console.log("User Created");
            }
            catch(e){
                console.log("Error",e);
            }
        }
        else{
            console.log("Fill all fields");
        }
    }
    return(
        <div>
            <Nav />
            <div className="login">
                <h2>
                    Login
                </h2>
                <div className="login-input">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <button onClick={handleLogin} className="login-btn">
                    Login 
                </button>
                    <NavLink to="/signup" className="link">                    
                    Create an Account
                    </NavLink>
              
            </div>

        </div>
    )
}

export default Login;