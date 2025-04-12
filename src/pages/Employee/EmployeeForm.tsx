import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../component/Button";
import Container from "../../component/Container";
import InputField from "../../component/InputField";
import Radiobutton from "../../component/Radiobutton";
import Notification from "../../component/Notification";

// Utils/Constants/Types
import { postEmployees } from "../../api/apiServices";
import { EmployeeProps } from "../../utils/types";
import { employeeForm } from "../../utils/constants";
import { generateUUID } from "../../utils/helper";
import { useNotification } from "../../hooks/useNotification";

// SCSS
import classes from "./index.module.scss";
import { useNavigate } from "react-router";

const EmployeeForm = () => {
    const { notification, showNotification, clearNotification } = useNotification();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EmployeeProps>({
        defaultValues: { ...employeeForm }
    });
    const dobField = watch("dob");


    const onSubmit: SubmitHandler<EmployeeProps> = (data) => {
        const params = Object.assign({}, data);
        params.id = generateUUID();
        postEmployees(params);
        showNotification(`New Employee has been created`, "error");
        reset({ ...employeeForm });
        navigate("/");
    }


    return (
        <div className={`${classes.employee_container} ${classes.formContainer}`}>
            <Container>
                <div className={classes.table_tile}>
                    <h2>Add New Employee</h2>
                </div>

                <div className={classes.employee_form_container}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.formRow}>
                            <InputField
                                {...register("firstName", {
                                    required: `First name is required`,
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum character length is 6'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Maximum character length is 10'
                                    }
                                })}
                                placeholder="Enter your first name"
                                error={errors.firstName?.message}
                            />

                            <InputField
                                {...register("lastName", {
                                    required: `Last name is required`,
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum character length is 6'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Maximum character length is 10'
                                    }
                                })}
                                placeholder="Enter your last name"
                                error={errors.lastName?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <InputField
                                {...register("emailAddress", {
                                    required: `Email address is required`,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Invalid email address"
                                    }
                                })}
                                placeholder="Enter your email address"
                                error={errors.emailAddress?.message}
                            />

                            <InputField
                                {...register("phoneNumber", {
                                    required: `Phone number is required`,
                                    pattern: {
                                        value: /^\+65(6|8|9)\d{7}$/,
                                        message: "Please enter a valid singapore number"
                                    }
                                })}
                                placeholder="Enter your phone number"
                                error={errors.phoneNumber?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <InputField
                                {...register("dob", {
                                    valueAsDate: true,
                                    required: `Date of birth is required`,
                                })}
                                type="date"
                                placeholder="Enter your date of birth"
                                error={errors.dob?.message}
                            />

                            <InputField
                                {...register("joinedDate", {
                                    valueAsDate: true,
                                    required: `Joining date is required`,
                                    validate: (date) =>
                                        !dobField || date >= dobField || "Joining date must be after date of birth",

                                })}
                                type="date"
                                placeholder="Enter your joining date"
                                error={errors.joinedDate?.message}
                            />
                        </div>

                        <div className={classes.formRow}>
                            <Radiobutton
                                {...register("gender", {
                                    required: `Gender is required`
                                })}
                                radioValues={['male', 'female']}
                                type="radio"
                                error={errors.gender?.message}
                            />
                        </div>
                        <Button style={{ padding: '12px 18px' }}>Submit</Button>
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
