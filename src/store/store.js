import { configureStore } from "@reduxjs/toolkit";
import slidebarReducer from "./slices/slidebarSlice"; // Import default export

export const store = configureStore({
  reducer: {
    slidebarSlice: slidebarReducer, 
  },
});