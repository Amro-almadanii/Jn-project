import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmployeeEducationForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const EmployeeEducationForm = ({ method, employeeEducation }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + employeeEducation.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="specialization">Specialization :</label>
        <input
          id="specialization"
          type="text"
          name="specialization"
          required
          defaultValue={
            employeeEducation ? employeeEducation.specialization : ''
          }
        />

        <label htmlFor="degree">Degree :</label>
        <input
          id="degree"
          type="number"
          name="degree"
          required
          defaultValue={employeeEducation ? employeeEducation.degree : ''}
        />

        <label htmlFor="grantingBy">Granting By :</label>
        <input
          id="grantingBy"
          type="text"
          name="grantingBy"
          required
          defaultValue={employeeEducation ? employeeEducation.grantingBy : ''}
        />

        <label htmlFor="graduationDate">Graduation Date :</label>
        <input
          id="graduationDate"
          type="date"
          name="graduationDate"
          required
          defaultValue={
            employeeEducation ? employeeEducation.graduationDate : ''
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

export default EmployeeEducationForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const employeeEducationData = {
    employee_id: data.get('employee_id'),
    specialization: data.get('specialization'),
    degree: data.get('degree'),
    grantingBy: data.get('grantingBy'),
    graduationDate: data.get('graduationDate'),
  };
  console.log(employeeEducationData);
  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/hr/employeeEducations/' +
      params.employeeEducationId;
  } else {
    url = 'http://localhost:8000/hr/employeeEducations';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(employeeEducationData),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not save Employee Educations.' },
      { status: 500 }
    );
  }

  return redirect('/hr/employeeEducations');
}
