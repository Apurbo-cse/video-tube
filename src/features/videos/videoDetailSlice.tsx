import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getVideoDetails } from "../../api/videosApi";

interface VideoState {
    video: Record<string, any>; // Modify with your video type
    isLoading: boolean;
    isError: boolean;
    error: string;
}

const initialState: VideoState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// Define the type of the API response
interface VideoDetailResponse {
    [key: string]: any; // Generic placeholder, update with actual types
}

// async thunk
export const fetchVideo = createAsyncThunk<VideoDetailResponse, string>(
    "video/fetchVideo", 
    async (id: string) => {
        const video = await getVideoDetails(id);
        return video;
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {}, // If you have any non-async reducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchVideo.fulfilled, (state, action: PayloadAction<VideoDetailResponse>) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message || "An unknown error occurred";
            });
    },
});

export default videoSlice.reducer;
