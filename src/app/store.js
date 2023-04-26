import { configureStore } from '@reduxjs/toolkit';

import canvasReducer from '../features/canvas/canvaSlicer';

export const store = configureStore({
  reducer: {
    canvas: canvasReducer
  },
});