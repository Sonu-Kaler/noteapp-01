import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/Slices/UserSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


const Signup=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup=async()=>{
        if(name && email && password && confirmPassword && password.trim()===confirmPassword.trim()){
            try{
                
                dispatch(setUser({
                    name:name,
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
            <Nav/>
            <div className="signup">
                <p>
                    Signup
                </p>
                <div className="signup-input">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                </div>
                <button onClick={handleSignup} className="signup-btn">
                    Create Account
                </button>
                
                    <NavLink to="/login" className="link">
                    Already have an account? Login
                    </NavLink>
                
            </div>

        </div>
    )
}

export default Signup;