import { configureStore } from "@reduxjs/toolkit";
import { tariffConfigSlice } from "./tariffConfigSlice";

export const store = configureStore({
  reducer: {
    tariffConfig: tariffConfigSlice.reducer,
  },
});
