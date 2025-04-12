import React from "react";
// CSS
import classes from "./index.module.css";

interface ButtonProps {
    style? : object,
    onClick? : () => void,
    children : string | React.JSX.Element
}

const Button = ({onClick, children, style}: ButtonProps) => {
    return (
        <button style={style} className={classes.Button_Container} onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;