import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRelatedVideos } from "../../api/videosApi";

type Video = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

type FetchRelatedVideosInput = {
  tags: string[];
  id: string;
};

type VideosState = {
  relatedVideos: Video[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: VideosState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: ""
};

export const fetchRelatedVideos = createAsyncThunk<Video[], FetchRelatedVideosInput>(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({id,  tags });
    return relatedVideos;
  }

);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
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
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message || "An unknown error occurred";
      });
  }
});

export default relatedVideoSlice.reducer;
