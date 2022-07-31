import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import logReducer from "../features/logs/logSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    logs: logReducer,
  },
});
