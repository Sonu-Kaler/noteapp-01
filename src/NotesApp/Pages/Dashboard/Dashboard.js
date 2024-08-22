import React,{useState} from "react";
import Nav from "../../Components/Nav/Nav";
import Add, { Modal } from "../../Components/Notes/Add";
import Show from "../../Components/Notes/Show";
import { FaPlus } from "react-icons/fa";
const Dashboard=()=>{

    const [isOpen,setOpen] = useState(false);
    const open=()=>{setOpen(true)};
    const close=()=>{setOpen(false)};

    return(
        <div>
            <Nav />          
            <div className="dashboard-called-container">
                <Show />
            </div>
            {/* On Click of add modal open hoga and wohi modal add and update karega */}
            <button onClick={open} className="add-btn">
            <FaPlus />
            </button>
            <Modal isOpen={isOpen} close={close}>
                    <Add close={close}/>
            </Modal>
        </div>
    )
}
export default Dashboard;