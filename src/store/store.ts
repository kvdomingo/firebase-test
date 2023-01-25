import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import checkInReducer from "./checkInSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    checkIn: checkInReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
