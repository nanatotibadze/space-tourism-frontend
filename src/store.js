import {createSlice, configureStore} from "@reduxjs/toolkit";
import data from "./data.json";
const initialState = data;

const dataSlice = createSlice({
  name: "spaceData",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {spaceData: dataSlice.reducer},
});

export default store;
