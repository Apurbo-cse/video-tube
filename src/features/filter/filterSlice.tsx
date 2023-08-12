import { createSlice } from "@reduxjs/toolkit";


type Video = /*unresolved*/ any

// Define the state type
type VideosState = {
    tags: Video[];
    search: string;
};

const initialState: VideosState = {
    tags: [],
    search: "",
};


const filterSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagReamoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
    },

});

export default filterSlice.reducer;

export const {tagSelected, tagReamoved, searched} = filterSlice.actions;
