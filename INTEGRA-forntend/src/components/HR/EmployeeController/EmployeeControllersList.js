import { Link, useNavigate } from 'react-router-dom';
import classes from './EmployeeControllersList.module.scss';
const EmployeeControllersList = ({ employeeControllers }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.EmployeeControllersListList}>
      <h1> HR > Employee </h1>
      {/* <div className={classes.add_EmployeeCertificate}>
        <Link className={classes.add_EmployeeCertificate_link} to="/marketing/EmployeeControllersList/new">
          Add New Benefit
        </Link>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Date Of Brith</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Of Hire</th>
            <th>Salary</th>
            <th>Supervisor Id</th>
            <th>Status</th>
            <th>Department Id</th>
          </tr>
        </thead>
        <tbody>
          {employeeControllers.map((employeeController) => (
            <tr>
              <td>{employeeController.firstName}</td>
              <td>{employeeController.lastName}</td>
              <td>{employeeController.dateOfBrith}</td>
              <td>{employeeController.gender}</td>
              <td>{employeeController.address}</td>
              <td>{employeeController.email}</td>
              <td>{employeeController.phone}</td>
              <td>{employeeController.dateOfHire}</td>
              <td>{employeeController.salary}</td>
              <td>{employeeController.supervisorId}</td>
              <td>{employeeController.status}</td>
              <td>{employeeController.departmentId}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Date Of Brith</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Of Hire</th>
            <th>Salary</th>
            <th>Supervisor Id</th>
            <th>Status</th>
            <th>Department Id</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployeeControllersList;