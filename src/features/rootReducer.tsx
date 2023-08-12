import { combineReducers } from '@reduxjs/toolkit';
import videoReducer  from './videos/videoSlice';
import tagReducer from './tags/tagSlice';

const rootReducer = combineReducers({
  videos: videoReducer,
  tags: tagReducer
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

