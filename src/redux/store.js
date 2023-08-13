import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./api/featured/builderSlice";

export default configureStore({
  reducer: {
    builder: builderSlice, // Add your builder reducer
  },
});
