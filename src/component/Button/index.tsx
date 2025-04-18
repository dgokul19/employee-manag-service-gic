import React from "react";
// CSS
import classes from "./index.module.scss";

interface ButtonProps {
    style? : object,
    onClick? : () => void,
    children : string | React.JSX.Element
}

const Button = ({onClick, children, style, ...customProps}: ButtonProps) => {
    return (
        <button style={style} {...customProps} className={classes.Button_Container} onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;