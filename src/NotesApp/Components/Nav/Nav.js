import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../Redux/Slices/UserSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Nav=()=>{

    const user = useSelector(state=>state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout=()=>{
        dispatch(clearUser());
        console.log("User Cleared");
        navigate("/signup");
    }

    return(
        <div>
            <div className="navbar">
                <p className="logo">
                    <NavLink to="/" style={{textDecoration:"none"}}> 
                    MakeNote
                    </NavLink>
                </p>
               

                <div>
                    {
                        user && (
                            <div className="nav-user">
                                <p>
                                {user.name}
                                </p>
                                <button onClick={logout} className="logout">
                                    Logout
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Nav;