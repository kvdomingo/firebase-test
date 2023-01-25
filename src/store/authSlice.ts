import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash-es";
import { RootState } from "./store";

export interface AuthState {
  loggedIn: boolean;
  userData: Record<string, any>;
}

export const initialState: AuthState = {
  loggedIn: false,
  userData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: cloneDeep(initialState),
  reducers: {
    updateLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
    updateUserData(state, action: PayloadAction<Record<string, any>>) {
      state.userData = action.payload;
    },
  },
});

export const { updateLoggedIn, updateUserData } = authSlice.actions;

export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;

export const selectUserData = (state: RootState) => state.auth.userData;

export default authSlice.reducer;
