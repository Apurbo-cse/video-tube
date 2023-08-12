import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getVideos } from "../../api/videosApi";

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
export const fetchVideos = createAsyncThunk<Video[], { tags: string[], search: string }, { rejectValue: { errorMessage: string } }>(
  'videos/fetchVideos',
  async ({ tags, search }) => {
      const videos = await getVideos(tags, search);
      return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideos.fulfilled, (state, action: PayloadAction<Video[]>) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos =[];
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default videoSlice.reducer;
