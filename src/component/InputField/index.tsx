import { FieldInputProps } from "../../utils/types";

import classes from "./index.module.scss";

const InputField = (props : FieldInputProps) => {
    const { label, classNames, error, onChange, type='text', ...otherProps } = props;

    return (
        <div className={classes.formGroup}>
            {label && (
                <label htmlFor={props.name}>
                    {label}
                </label>
            )}
            <input type={type} className={`${classNames} ${error ? classes.errorField : null}`} onChange={onChange} {...otherProps}/>
            {error && <p className={classes.errorField}>{error}</p>}
        </div>
    );
}

export default InputField;