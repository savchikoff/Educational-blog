import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./features";

const rootReducer = combineReducers({ authReducer });

export default rootReducer;