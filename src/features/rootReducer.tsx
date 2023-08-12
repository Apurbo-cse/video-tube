import { combineReducers } from '@reduxjs/toolkit';
import videosReducer  from './videos/videoSlice';
import tagReducer from './tags/tagSlice';
import videoReducer from './videos/videoDetailSlice';

const rootReducer = combineReducers({
  videos: videosReducer,
  tags: tagReducer,
  videoDetails: videoReducer
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

