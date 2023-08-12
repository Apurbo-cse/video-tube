import { combineReducers } from '@reduxjs/toolkit';
import videosReducer  from './videos/videoSlice';
import tagReducer from './tags/tagSlice';
import videoReducer from './videos/videoDetailSlice';
import relatedReducer from './videos/relatedVideoSlice';
import filterReducer from './filter/filterSlice';

const rootReducer = combineReducers({
  videos: videosReducer,
  tags: tagReducer,
  videoDetails: videoReducer,
  relatedVideo: relatedReducer,
  filter: filterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
