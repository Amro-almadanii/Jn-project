import { Link, useNavigate } from 'react-router-dom';
import classes from './EmployeeVacationControllersList.module.scss';
const EmployeeVacationControllersList = ({ employeeVacationControllers }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.EmployeeVacationControllersList}>
      <h1> HR > Employee Vacation </h1>

      <table>
        <thead>
          <tr>
            <th>Employee_id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Type Of Vacation</th>
            <th>Reason Of Vacation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeVacationControllers.map((employeeVacationController) => (
            <tr>
              <td>{employeeVacationController.employee_id}</td>
              <td>{employeeVacationController.startDate}</td>
              <td>{employeeVacationController.endDate}</td>
              <td>{employeeVacationController.typeOfVacation}</td>
              <td>{employeeVacationController.reasonOfVacation}</td>
              <td>{employeeVacationController.status}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Employee_id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Type Of Vacation</th>
            <th>Reason Of Vacation</th>
            <th>Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployeeVacationControllersList;