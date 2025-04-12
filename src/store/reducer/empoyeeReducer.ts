import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Types
import { EmployeeProps } from '../../utils/types'
import { RootState } from '../store'


// Define a type for the slice state
interface EmployeeReducerProps {
  employees: EmployeeProps[],
  selected : EmployeeProps | null
}

// Define the initial state using that type
const initialState: EmployeeReducerProps = {
    employees: [],
    selected : null
}

export const employeeSlice = createSlice({
  name: 'employee',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateEmployees: (state, action) => {
      state.employees = action.payload.employees
    },
    updateSelectedEmployee : (state, action) => {
        state.selected = action.payload
    }
  },
})

export const { updateEmployees, updateSelectedEmployee } = employeeSlice.actions

export default employeeSlice.reducer