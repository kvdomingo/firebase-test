import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash-es";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../constants";
import { ICheckIn } from "../data/checkIn";
import { RootState } from "./store";

interface GlobalNotification {
  type: "info" | "warning" | "error" | "success";
  visible: boolean;
  message: string;
}

export interface TimeState {
  checkIns: ICheckIn[];
  startDate: string;
  endDate: string;
  globalNotification: GlobalNotification;
}

export const initialState: TimeState = {
  checkIns: [],
  startDate: moment().format(DEFAULT_DATE_FORMAT),
  endDate: moment().format(DEFAULT_DATE_FORMAT),
  globalNotification: {
    type: "info",
    visible: false,
    message: "",
  },
};

export const checkInSlice = createSlice({
  name: "checkIn",
  initialState: cloneDeep(initialState),
  reducers: {
    updateCheckIns(state, action: PayloadAction<ICheckIn[]>) {
      state.checkIns = action.payload;
    },
    updateStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
    updateEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;
    },
    updateGlobalNotification(state, action: PayloadAction<GlobalNotification>) {
      state.globalNotification = action.payload;
    },
    resetTimeMachine(state) {
      Object.assign(state, cloneDeep(initialState));
    },
  },
});

export const { updateCheckIns, updateGlobalNotification, updateStartDate, updateEndDate } = checkInSlice.actions;

export const selectCheckIns = (state: RootState) => state.checkIn.checkIns;

export const selectStartDate = (state: RootState) => state.checkIn.startDate;

export const selectEndDate = (state: RootState) => state.checkIn.endDate;

export const selectGlobalNotification = (state: RootState) => state.checkIn.globalNotification;

export default checkInSlice.reducer;
