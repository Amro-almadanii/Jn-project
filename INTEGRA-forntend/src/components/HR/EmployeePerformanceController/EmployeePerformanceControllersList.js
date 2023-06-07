import { Link, useNavigate } from 'react-router-dom';
import classes from './EmployeePerformanceControllersList.module.scss';
const EmployeePerformanceControllersList = ({
  employeePerformanceControllers,
}) => {
  const navigate = useNavigate();
  return (
    <div className={classes.EmployeePerformanceControllersList}>
      <h1> HR > Employee Performance </h1>

      <table>
        <thead>
          <tr>
            <th>Employee_id</th>
            <th>PerformanceRating</th>
            <th>Comments</th>
            <th>Review Date</th>
          </tr>
        </thead>
        <tbody>
          {employeePerformanceControllers.map(
            (employeePerformanceController) => (
              <tr>
                <td>{employeePerformanceController.employee_id}</td>
                <td>{employeePerformanceController.performanceRating}</td>
                <td>{employeePerformanceController.comments}</td>
                <td>{employeePerformanceController.reviewDate}</td>
              </tr>
            )
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>Employee_id</th>
            <th>PerformanceRating</th>
            <th>Comments</th>
            <th>Review Date</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployeePerformanceControllersList;
