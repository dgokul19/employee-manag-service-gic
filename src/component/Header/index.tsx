
import Container from "../Container";

// CSS
import classes from "./index.module.scss";

// image
import Logo from "../../assets/gic-logo.png";
import { Link } from "react-router";

const Header = () => {
    return (
        <div className={classes.header_container}>
            <Container classnames={classes.containerFlex}>
                <div className={classes.logo}>
                    <img src={Logo} alt={`GIC logo`} />
                </div>

                <Link to='/'>
                    <h3>Employee Managment System</h3>
                </Link>
                <div className={classes.settings}>
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-cog"></i>
                </div>
            </Container>
        </div>
    );
}

export default Header;