
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

import Button from "../../component/Button";
import Container from "../../component/Container";
import InputField from "../../component/InputField";
import Radiobutton from "../../component/Radiobutton";
import Notification from "../../component/Notification";

// Utils/Constants/Types
import { postEmployees, updateEmployeeData } from "../../api/apiServices";
import { EmployeeProps } from "../../utils/types";
import { employeeForm, FORM_FIELDS } from "../../utils/constants";
import { formatDate, formHandlerProps, generateUUID } from "../../utils/helper";
import { useNotification } from "../../hooks/useNotification";
import { useAppSelector } from "../../hooks";

// SCSS
import classes from "./index.module.scss";
import { selectEmployeeById } from "../../store/reducer/empoyeeReducer";

const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id: recordId } = useParams();
    const { notification, showNotification, clearNotification } = useNotification();
    const [formValues, setFormValues] = useState({ ...employeeForm });

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EmployeeProps>({
        defaultValues: { ...employeeForm },
        values: formValues
    });
    const dobField = watch("dob");

    let editRecord = Object.assign({}, useAppSelector(selectEmployeeById(recordId)));

    useEffect(() => {
        if (recordId && editRecord) {
            editRecord.dob = formatDate(editRecord.dob);
            editRecord.joinedDate = formatDate(editRecord.joinedDate);
            setFormValues(editRecord);
        }
    }, [recordId]);


    const onSubmit: SubmitHandler<EmployeeProps> = (data) => {
        const params = Object.assign({}, data);
        if (!params.id) {
            params.id = generateUUID();
            postEmployees(params);
            showNotification(`New Employee has been created`, "success");
        } else {
            updateEmployeeData(params);
            showNotification(`Employee details has been updated`, "success");
        }
        setTimeout(() => {
            reset({ ...employeeForm });
            navigate("/");
        },1000);
    }


    return (
        <div className={`${classes.employee_container} ${classes.formContainer}`}>
            <Container>
                <div className={classes.table_tile}>
                    <h2> {recordId ? `Edit` : `Add`} Employee</h2>
                </div>

                <div className={classes.employee_form_container}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.formRow}>
                            <InputField
                                {...register("firstName", formHandlerProps(FORM_FIELDS.FIRSTNAME))}
                                placeholder="Enter your first name"
                                error={errors.firstName?.message}
                            />

                            <InputField
                                {...register("lastName", formHandlerProps(FORM_FIELDS.LASTNAME))}
                                placeholder="Enter your last name"
                                error={errors.lastName?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <InputField
                                {...register("emailAddress", formHandlerProps(FORM_FIELDS.EMAIL))}
                                placeholder="Enter your email address"
                                error={errors.emailAddress?.message}
                            />

                            <InputField
                                {...register("phoneNumber", formHandlerProps(FORM_FIELDS.PHONE))}
                                placeholder="Enter your phone number"
                                error={errors.phoneNumber?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <InputField
                                {...register("dob", formHandlerProps(FORM_FIELDS.DOB))}
                                type="date"
                                placeholder="Enter your date of birth"
                                error={errors.dob?.message}
                            />

                            <InputField
                                {...register("joinedDate", {
                                    valueAsDate: true,
                                    required: `Joining date is required`,
                                    validate: (date: any) => !dobField || date >= dobField || "Joining date must be after date of birth",
                                })}
                                type="date"
                                placeholder="Enter your joining date"
                                error={errors.joinedDate?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <Radiobutton
                                {...register("gender", formHandlerProps(FORM_FIELDS.GENDER))}
                                radioValues={['male', 'female']}
                                type="radio"
                                error={errors.gender?.message}
                            />
                        </div>
                        <div className={classes.footRow}>
                            <div className={classes.backBtn} onClick={() => navigate('/')}>Back</div>
                            <Button data-testid="submitBtn" style={{ padding: '12px 18px' }}>Submit</Button>
                        </div>
                    </form>
                </div>
            </Container>
            {/* Notification Implementation */}
            <Notification
                message={notification.message}
                type={notification.type}
                onClose={clearNotification}
            />
        </div>
    );
}

export default EmployeeForm;
