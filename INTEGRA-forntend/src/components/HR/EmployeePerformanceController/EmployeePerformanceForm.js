import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmployeePerformanceForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const EmployeePerformanceForm = ({ method, employeePerformance }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + employeePerformance.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="employee_id">Employee id :</label>
        <input
          id="employee_id"
          type="text"
          name="employee_id"
          required
          defaultValue={
            employeePerformance ? employeePerformance.employee_id : ''
          }
        />

        <label htmlFor="performanceRating">PerformanceRating :</label>
        <input
          id="performanceRating"
          type="number"
          name="performanceRating"
          required
          defaultValue={
            employeePerformance ? employeePerformance.performanceRating : ''
          }
        />

        <label htmlFor="comments">Comments :</label>
        <textarea
          id="comments"
          name="comments"
          required
          defaultValue={employeePerformance ? employeePerformance.comments : ''}
        />

        <label htmlFor="reviewDate">Review Date :</label>
        <input
          id="reviewDate"
          type="date"
          name="reviewDate"
          required
          defaultValue={
            employeePerformance ? employeePerformance.reviewDate : ''
          }
        />

        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default EmployeePerformanceForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const employeePerformanceData = {
    employee_id: data.get('employee_id'),
    performanceRating: data.get('performanceRating'),
    comments: data.get('comments'),
    reviewDate: data.get('reviewDate'),
  };
  console.log(employeePerformanceData);
  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/hr/employeePerformances/' +
      params.employeePerformanceId;
  } else {
    url = 'http://localhost:8000/hr/employeePerformances';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(employeePerformanceData),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not save Employee Performances.' },
      { status: 500 }
    );
  }

  return redirect('/hr/employeePerformances');
}
