import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRelatedVideos } from "../../api/videosApi";


type Video = /*unresolved*/ any

// Define the state type
type VideosState = {
  relatedvideos: Video[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: VideosState = {
  relatedvideos: [],
  isLoading: false,
  isError: false,
  error: ""
};

// async thunk
export const fetchRelatedVideos = createAsyncThunk<Video[], {tags?: string[]; id: string}, { rejectValue: { errorMessage: string } }>('videos/fetchRelatedVideos',
  async ({tags, id}, thunkAPI) => {
    try {
      const videos = await getRelatedVideos({tags, id});
      return videos;
    } catch (error: any) {
      // Return a rejected value with a structured error to be handled by extraReducers.
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
});

const relatedVideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action: PayloadAction<Video[]>) => {
        state.isLoading = false;
        state.relatedvideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedvideos =[];
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default relatedVideoSlice.reducer;
