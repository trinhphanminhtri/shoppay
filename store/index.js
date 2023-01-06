import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import cartSlice from "./cartSlice";

const reducers = combineReducers({cartSlice}); // to be able to have a lot of reducers at the same time

// config for reducers
const config = {
  key: "root",
  storage,
};

// define our reducer
const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
