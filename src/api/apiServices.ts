// import { EmployeeProps } from "../constants/types";
// import { callApiHelper } from "./index";

import { EmployeeProps } from "../utils/types";


// export const fetchEmployees = async () => {
//     callApiHelper(`employees`).then((response: EmployeeProps[]) => response).catch(error => error);
// };

export const fetchEmployees = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => {
                const response = sessionStorage.getItem("employees") || '[]';
                resolve(JSON.parse(response));
            }, 300);
        } else {
            reject(`Error fetching data`);
        }
    });
};

export const postEmployees = (employee: EmployeeProps) => {
    let response = sessionStorage.getItem("employees") || '[]';
    let responseArray = JSON.parse(response);
    responseArray.unshift(employee);
    sessionStorage.setItem("employees", JSON.stringify(responseArray))
};

export const updateEmployeeData = (employee: EmployeeProps) => {
    let response = sessionStorage.getItem("employees") || '[]';
    let responseArray = JSON.parse(response);
    responseArray = responseArray.map((emp: EmployeeProps) => {
        if (emp.id === employee.id) {
            return employee;
        }
        return emp;
    });
    sessionStorage.setItem("employees", JSON.stringify(responseArray))
};

export const deleteEmployeeRecord = (id: string) => {
    let response = sessionStorage.getItem("employees") || '[]';
    let responseArray = JSON.parse(response);
    responseArray = responseArray.filter((emp: EmployeeProps) => emp.id !== id);
    sessionStorage.setItem("employees", JSON.stringify(responseArray))
};