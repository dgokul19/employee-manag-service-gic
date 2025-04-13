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


export const FORM_FIELDS = {
    FIRSTNAME : 'firstName',
    LASTNAME : 'lastName',
    EMAIL : 'emailAddress',
    PHONE : 'phoneNumber',
    GENDER : 'gender',
    DOB : 'dob',
    JOINED_DATE : 'joinedDate'
};