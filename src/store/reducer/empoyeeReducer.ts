import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

// Types
import { EmployeeProps } from '../../utils/types'
import { RootState } from '../store'


// Define a type for the slice state
interface EmployeeReducerProps {
  employees: EmployeeProps[],
}

// Define the initial state using that type
const initialState: EmployeeReducerProps = {
  employees: [],
}

export const employeeSlice = createSlice({
  name: 'employee',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateEmployees: (state, action) => {
      state.employees = action.payload.employees
    },
  },
})

export const { updateEmployees } = employeeSlice.actions

export default employeeSlice.reducer;

export const selectEmployees = (state: RootState) => state.employees.employees;

export const selectEmployeeById = (id:string | undefined) =>
  createSelector([selectEmployees], (employees) =>
    employees?.find((emp:EmployeeProps) => emp.id === id)
  );