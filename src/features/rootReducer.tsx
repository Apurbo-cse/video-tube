import { combineReducers } from '@reduxjs/toolkit';
import videosReducer  from './videos/videoSlice';
import tagReducer from './tags/tagSlice';
import videoReducer from './videos/videoDetailSlice';
import relatedReducer from './videos/relatedVideoSlice';

const rootReducer = combineReducers({
  videos: videosReducer,
  tags: tagReducer,
  videoDetails: videoReducer,
  relatedVideo: relatedReducer  // Notice that the key is `relatedVideo`
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
