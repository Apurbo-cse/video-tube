import { configureStore } from '@reduxjs/toolkit';
import videoSliceReducr from '../features/videos/videoSlice';


export const store = configureStore({
  reducer: {
    counter: videoSliceReducr,
  },
});
