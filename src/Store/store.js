import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counter/counter";

export default configureStore({
  reducer: {
    counter: counterReducers,
  },
});
