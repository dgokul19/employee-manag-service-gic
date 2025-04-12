// import { EmployeeProps } from "../constants/types";
// import { callApiHelper } from "./index";

import { EmployeeProps } from "../utils/types";


// export const fetchEmployees = async () => {
//     callApiHelper(`employees`).then((response: EmployeeProps[]) => response).catch(error => error);
// };

export const fetchEmployees = () => {
    const response = sessionStorage.getItem("employees") || '[]';
    return JSON.parse(response);
};

export const postEmployees = (employee: EmployeeProps) => {
    let response = sessionStorage.getItem("employees") || '[]';
    let responseArray = JSON.parse(response);
    responseArray.unshift(employee);
    sessionStorage.setItem("employees", JSON.stringify(responseArray))
};