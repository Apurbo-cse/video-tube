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
    const tagQueries = (tags || []).map(tag => `tags_like=${tag}`);
    const baseQuery = `id_ne=${id}&_limit=${limit}`;
    const queryString = tagQueries.length > 0 ? `${tagQueries.join('&')}&${baseQuery}` : baseQuery;
    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};

