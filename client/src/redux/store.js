import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducer/reducers";

const store = configureStore({
  reducer: rootReducer, // <-- authReducer => state
  middleware: [thunk],
});

export default store;
