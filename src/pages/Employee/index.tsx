import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Container from "../../component/Container";
import Table from "../../component/Table";
import Button from "../../component/Button";
import DeleteModal from "../../component/DeleteModal";
import Notification from "../../component/Notification";

import { DefaultDeleteModalProps } from "../../utils/types";
import { useNotification } from "../../hooks/useNotification";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteModalValues } from "../../utils/constants";
import { updateEmployees } from "../../store/reducer/empoyeeReducer";
import { deleteEmployeeRecord, fetchEmployees } from "../../api/apiServices";


// SCSS
import classes from "./index.module.scss";

const EmployeeList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { notification, showNotification, clearNotification } = useNotification();

    const { employees } = useAppSelector((state) => state.employees);

    const [modal, setModal] = useState<DefaultDeleteModalProps>({ ...deleteModalValues });

    const fetchData = async () => {
        fetchEmployees().then(response => {
            dispatch(updateEmployees({ employees: response }));
        }).catch(err => {
            showNotification(`Error in fetching data ${err.message}`, "error");
        });
    }

    const handlerEdit = (rowId: string | null) => {
        if (!rowId) return;
        navigate(`/employee/edit/${rowId}`)
    };

    const handleDelete = (rowId: string) => {
        deleteEmployeeRecord(rowId);
        setModal({ ...deleteModalValues })
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={classes.employee_container}>
            <Container>
                <div className={classes.table_tile}>
                    <h2>Employee List</h2>
                    <Button onClick={() => navigate('/employee/add')}> Add Employee</Button>
                </div>
                <Table
                    data={employees}
                    editHandler={handlerEdit}
                    deleteHandler={(id: string) => setModal({ isOpen: true, rowId: id })} />

                <DeleteModal
                    isOpen={modal.isOpen}
                    deleteId={modal.rowId}
                    onClose={() => setModal({ ...deleteModalValues })}
                    onConfirm={handleDelete}
                />

                {/* Notification Implementation */}
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={clearNotification}
                />
            </Container>
        </div>
    );
}

export default EmployeeList;

