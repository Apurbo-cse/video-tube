import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRelatedVideos } from "../../api/videosApi";


type Video = /*unresolved*/ any

// Define the state type
type VideosState = {
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: VideosState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: ""
};

// async thunk
export const fetchRelatedVideos = createAsyncThunk<Video[], void, { rejectValue: { errorMessage: string } }>('videos/fetchRelatedVideo', async () => {
  const videos = await getRelatedVideos();
  return videos;
});

const relatedVideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action: PayloadAction<Video[]>) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.videos =[];
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default relatedVideoSlice.reducer;
