import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmployeeVacationForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const EmployeeVacationForm = ({ method, employeeVacation }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + employeeVacation.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="startDate">Start Date :</label>
        <input
          id="startDate"
          type="date"
          name="startDate"
          required
          defaultValue={employeeVacation ? employeeVacation.startDate : ''}
        />

        <label htmlFor="endDate">End Date :</label>
        <input
          id="endDate"
          type="date"
          name="endDate"
          required
          defaultValue={employeeVacation ? employeeVacation.endDate : ''}
        />

        <label htmlFor="reviewDate">Type Of Vacation :</label>
        <input
          id="typeOfVacation"
          type="text"
          name="typeOfVacation"
          required
          defaultValue={employeeVacation ? employeeVacation.typeOfVacation : ''}
        />

        <label htmlFor="reasonOfVacation">Reason Of Vacation :</label>
        <input
          id="reasonOfVacation"
          type="text"
          name="reasonOfVacation"
          required
          defaultValue={
            employeeVacation ? employeeVacation.reasonOfVacation : ''
          }
        />

        <label htmlFor="status">Status :</label>
        <input
          id="status"
          type="text"
          name="status"
          required
          defaultValue={employeeVacation ? employeeVacation.status : ''}
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

export default EmployeeVacationForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const employeeVacationData = {
    employee_id: data.get('employee_id'),
    startDate: data.get('startDate'),
    endDate: data.get('endDate'),
    typeOfVacation: data.get('typeOfVacation'),
    reasonOfVacation: data.get('reasonOfVacation'),
    status: data.get('status'),
  };
  console.log(employeeVacationData);
  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/hr/employeeVacations/' + params.employeeVacationId;
  } else {
    url = 'http://localhost:8000/hr/employeeVacations';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(employeeVacationData),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not save Employee Vacations.' },
      { status: 500 }
    );
  }

  return redirect('/hr/employeeVacations');
}