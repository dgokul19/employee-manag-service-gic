import { useEffect } from "react";
import Container from "../../component/Container";
import Table from "../../component/Table";
import Button from "../../component/Button";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateEmployees } from "../../store/reducer/empoyeeReducer";

// SCSS
import classes from "./index.module.scss";
import { useNavigate } from "react-router";
import { fetchEmployees } from "../../api/apiServices";

const EmployeeList = () => {
    const { employees } = useAppSelector((state) => state.employees)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            const data = fetchEmployees();
            dispatch(updateEmployees({ employees: data }));
        }
        fetchData();
    }, []);

    return (
        <div className={classes.employee_container}>
            <Container>
                <div className={classes.table_tile}>
                    <h2>Employee List</h2>
                    <Button onClick={() => navigate('/employee/add')}> Add Employee</Button>
                </div>
                <Table data={employees} />
            </Container>
        </div>
    );
}

export default EmployeeList;