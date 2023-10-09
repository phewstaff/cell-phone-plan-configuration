import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TariffConfigState {
  minutes: number;
  sms: number;
  internetGB: number;
  additionalServices: string[];
  totalCost: number;
}

const initialState: TariffConfigState = {
  minutes: 600,
  sms: 0,
  internetGB: 5,
  additionalServices: [],
  totalCost: 0,
};

export const tariffConfigSlice = createSlice({
  name: "tariffConfig",
  initialState,
  reducers: {
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
    setSMS: (state, action: PayloadAction<number>) => {
      state.sms = action.payload;
    },
    setInternetGB: (state, action: PayloadAction<number>) => {
      state.internetGB = action.payload;
    },
    setAdditionalServices: (state, action: PayloadAction<string[]>) => {
      state.additionalServices = action.payload;
    },
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
  },
});

export const {
  setMinutes,
  setSMS,
  setInternetGB,
  setAdditionalServices,
  setTotalCost,
} = tariffConfigSlice.actions;

export const selectTariffConfig = (state: {
  tariffConfig: TariffConfigState;
}) => state.tariffConfig;
