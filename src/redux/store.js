import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import wallet from "./slices/wallet";

const rootReducer = combineReducers({
    wallet,
});

export default configureStore({ reducer: rootReducer });
