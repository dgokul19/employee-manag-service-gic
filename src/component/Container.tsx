import { containerElementProps } from "../utils/types";

const Container = ({ children, classnames }: containerElementProps) => {
    return (
        <div className={classnames} style={{width : '95%', margin : '0 auto'}}>
            {children}
        </div>
    );
}
 
export default Container;