import { formatDate } from "../../utils/helper";
import { EmployeeProps } from "../../utils/types";

// CSS
import classes from "./index.module.scss";

type TableProps = {
    data: EmployeeProps[];
};


function Table({ data }: TableProps) {
    return (
      <table className={classes.table_container}>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Joined Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(row => (
                    <tr key={row.id}>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        <td>{row.emailAddress}</td>
                        <td>{row.phoneNumber}</td>
                        <td>{row.gender}</td>
                        <td>{formatDate(row.dob)}</td>
                        <td>{formatDate(row.joinedDate)}</td>
                        <td>
                            <ul className={classes.icons}>
                                <li><i className="fa fa-pencil"></i></li>
                                <li className={classes.delete}><i className="fa fa-trash-o"></i></li>
                            </ul>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    );
  }
 
export default Table;