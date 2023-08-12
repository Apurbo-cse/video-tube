import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getTags } from "../../api/tagsAPI";

type Tag = /*unresolved*/ any

// Define the state type
type TagsState = {
  tags: Tag[];
  isLoading: boolean; 
  isError: boolean;
  error: string;
};

const initialState: TagsState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: ""
};

// async thunk
export const fetchTags = createAsyncThunk<Tag[], void, { rejectValue: { errorMessage: string } }>('tags/fetchTags', async () => {
  const tags = await getTags();
  return tags;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTags.fulfilled, (state, action: PayloadAction<Tag[]>) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags =[];
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default tagSlice.reducer;
