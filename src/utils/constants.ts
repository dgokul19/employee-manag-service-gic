import { DefaultDeleteModalProps, EmployeeProps } from "./types";

export const employeeForm: EmployeeProps = {
    id: '',
    firstName: '',
    lastName: '',
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    joinedDate: ""
}
export const deleteModalValues:DefaultDeleteModalProps = { isOpen: false, rowId: '' };