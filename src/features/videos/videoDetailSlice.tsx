import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getVideoDetails } from "../../api/videosApi";

type Video = /*unresolved*/ any;

type VideoState = {
  video: Video;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: VideoState = {
  video: {},
  isLoading: false,
  isError: false,
  error: ""
};

export const fetchVideoDetails = createAsyncThunk<Video, string, { rejectValue: { errorMessage: string } }>(
  'video/fetchVideoDetails', 
  async (id) => {
    const video = await getVideoDetails(id);  
    return video;
  }
);

const videolice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action: PayloadAction<Video>) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default videolice.reducer;
