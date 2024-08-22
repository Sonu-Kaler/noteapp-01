import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    notes: []
};
const NoteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload); // Add new note to the array
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(item => item.id !== action.payload.id); // Filter out the note by ID
        },
        updateNote: (state, action) => {
            const index = state.notes.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = {
                    ...state.notes[index],
                    ...action.payload // Update the note's content
                };
            }
        }
    }
});

export const { addNote, deleteNote, updateNote } = NoteSlice.actions;
export default NoteSlice.reducer;
