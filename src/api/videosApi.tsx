import axios from "../utils/axios";

export const getVideos = async () => {
    const response = await axios.get('/videos');
    return response.data;
}

export const getVideoDetails = async (id: string) => {
    const response = await axios.get(`/videos/${id}`);
    return response.data;
}

type VideoParams = {
    tags?: string[];
    id: string;
};

export const getRelatedVideos = async ({ tags, id }: VideoParams): Promise<any[]> => {
    const limit = 5;
    let queryString = tags && tags.length > 0 
        ? tags.map((tag: string) => `tags_like=${tag}`).join('&') 
        + `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`;

    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
};