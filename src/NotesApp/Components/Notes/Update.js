import React, { useState } from "react";
import { updateNote } from "../../Redux/Slices/NoteSlice";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ existingNoteId, close }) => {
    // Assume you pass the `existingNoteId` as a prop to this component
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (title && content) {
            const updatedNoteData = {
                id: existingNoteId, // Use the existing note's ID here
                userid: user.id, // Assuming user ID is part of the note
                title,
                content
            };
            dispatch(updateNote(updatedNoteData));
            console.log("Note Updated");
            close();
        } else {
            console.log("Fill fields");
        }
    };

    return (
        <div className="form-inside">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write Content"
            />
            <button onClick={handleUpdate} className="form-btn">
                Update
            </button>
        </div>
    );
};

export default Update;

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