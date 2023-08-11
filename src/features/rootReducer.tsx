import { combineReducers } from '@reduxjs/toolkit';
import videoReducer  from '../features/videos/videoSlice';

const rootReducer = combineReducers({
  videos: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

