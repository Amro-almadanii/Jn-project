import { Link, useNavigate } from 'react-router-dom';
import classes from './EmployeeEducationControllersList.module.scss';
const EmployeeEducationControllersList = ({ EmployeeEducationControllers }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.EmployeeEducationControllersList}>
      <h1> HR > Employee Education </h1>

      <table>
        <thead>
          <tr>
            <th>Employee_id</th>
            <th>Specialization</th>
            <th>Degree</th>
            <th>GrantingBy</th>
            <th>GraduationDate</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeEducationControllers.map((EmployeeEducationController) => (
            <tr>
              <td>{EmployeeEducationController.employee_id}</td>
              <td>{EmployeeEducationController.specialization}</td>
              <td>{EmployeeEducationController.degree}</td>
              <td>{EmployeeEducationController.grantingBy}</td>
              <td>{EmployeeEducationController.graduationDate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Employee_id</th>
            <th>Specialization</th>
            <th>Degree</th>
            <th>GrantingBy</th>
            <th>GraduationDate</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployeeEducationControllersList;
