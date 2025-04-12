import { Fragment } from "react";
import { FieldInputProps } from "../../utils/types";

import classes from "./index.module.scss";

const RadioField = (props: FieldInputProps) => {
    const { label, classNames, error, radioValues, ...customProps } = props;

    return (
        <div className={classes.formGroup}>
            <label>{label}</label>
            <div className={`${classes.radionElements} ${classNames}`}>

                {radioValues?.map(keyString => (
                    <Fragment key={keyString}>
                        <input
                            {...customProps}
                            value={keyString}
                        />
                        <span>{keyString}</span>
                    </Fragment>
                ))}
            </div>
            {error && <p className={classes.errorField}>{error}</p>}
        </div>
    );
}

export default RadioField;