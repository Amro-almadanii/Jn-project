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
        <label htmlFor="employee_id">employee id :</label>
        <input
          id="employee_id"
          type="text"
          name="employee_id"
          required
          defaultValue={employeeEducation ? employeeEducation.name : ''}
        />

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
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    dateOfBrith: data.get('dateOfBrith'),
    gender: data.get('gender'),
    address: data.get('address'),
    email: data.get('email'),
    phone: data.get('phone'),
    dateOfHire: data.get('dateOfHire'),
    salary: data.get('salary'),
    supervisorId: data.get('supervisorId'),
    status: data.get('status'),
    departmentId: data.get('departmentId'),
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
