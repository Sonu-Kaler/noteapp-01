import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import notesReducer from "./Slices/NoteSlice";
const store = configureStore({
    reducer:{
        user:userReducer,
        notes:notesReducer
    }
})
export default store;