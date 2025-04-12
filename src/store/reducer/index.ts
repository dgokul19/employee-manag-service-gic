import { combineReducers } from '@reduxjs/toolkit';

// Reducer
import employeeReducer from "./empoyeeReducer";

export const rootReducer = combineReducers({
    employees : employeeReducer
})
export type RootState = ReturnType<typeof rootReducer>