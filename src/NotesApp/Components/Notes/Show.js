import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../Redux/Slices/NoteSlice";
import Update, { Modal } from "./Update";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Show = () => {
    const notes = useSelector((state) => state.notes.notes);
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();

    const [isOpen, setOpen] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const open = () => { setOpen(true); };
    const close = () => { setOpen(false); setSelectedNoteId(null); };

    const handleUpdateClick = (id) => {
        setSelectedNoteId(id); // Set the selected note's id
        open(); // Open the modal
    };
    
    const [search,setSearch] = useState("");
    const [filtered,setFiltered] = useState(notes);

    // useEffect(()=>[
    //     setFiltered(notes.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())))
    // ],[search])
    return (
        <div className="notes-box">
            <div className="search">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
            </div>
            {notes.length === 0 ? (
                <p>No Notes Found</p>
            ) : (
                <div className="notes-container">
                    {notes.map((item) => (
                        <div key={item.id} className="notes-item">
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <p className="notes-title">{item.title}</p>
                                <div>
                                <button onClick={() => dispatch(deleteNote(item))} className="action-btn"><MdDelete /></button>
                                <button onClick={() => handleUpdateClick(item.id)} className="action-btn"><FaEdit /></button>
                                </div>
                            </div>
                            <p className="notes-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            )}
            <Modal isOpen={isOpen} close={close}>
                {/* Pass the selectedNoteId to the Update component */}
                <Update close={close} existingNoteId={selectedNoteId} />
            </Modal>
        </div>
    );
};

export default Show;
