import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CPU: {},
  MotherBoard: {},
  RAM: {},
  PowerSupply: {},
  StorageDevice: {},
  Monitor: {},
  Others: {},
};

const builderSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handlePcBuild: (state, action) => {
      const { category, ...productData } = action.payload;
      if (category === "CPU") {
        state.CPU = productData;
      } else if (category === "Motherboard") {
        state.MotherBoard = productData;
      } else if (category === "RAM") {
        state.RAM = productData;
      } else if (category === "Power Supply") {
        state.PowerSupply = productData;
      } else if (category === "Storage Device") {
        state.StorageDevice = productData;
      } else if (category === "Monitor") {
        state.Monitor = productData;
      } else if (category === "Others") {
        state.Others = productData;
      }
    },
  },
});

export const { handlePcBuild } = builderSlice.actions;

export default builderSlice.reducer;
