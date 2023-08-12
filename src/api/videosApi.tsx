import axios from "../utils/axios";

export const getVideos = async () => {
    const response = await axios.get('/videos');
    return response.data;
}

export const getVideoDetails = async (id: string) => {
    const response = await axios.get(`/videos/${id}`);
    return response.data;
}