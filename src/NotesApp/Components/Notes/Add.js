import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../Redux/Slices/NoteSlice";

const Add=({close})=>{

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const user = useSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    const handleAdd=()=>{
        if(title && content){
            const noteData={
                id:nanoid(),
                userid:user.id,
                title,
                content
            }
            console.log(noteData);
            dispatch(addNote(noteData));
            console.log("Note Added");
            close();
        }
        else{
            console.log("Fill fields");
        }
    }
    return(
        <div className="form-inside">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Write Title"/>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write Content"/>
            <button onClick={handleAdd} className="form-btn">
                Add
            </button>
        </div>
    )
}
export default Add;


export const Modal=({isOpen,close,children})=>{
    if(!isOpen) return null;
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={close} className="modal-close">X</button>
                {children}
            </div>
        </div>
    )
}