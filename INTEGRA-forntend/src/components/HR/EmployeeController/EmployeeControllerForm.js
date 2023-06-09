import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmployeeControllerForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const EmployeeControllerForm = ({ method, employee }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + employee.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="firstName">First name :</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          defaultValue={employee ? employee.firstName : ''}
        />
        <label htmlFor="lastName">Last name :</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          defaultValue={employee ? employee.lastName : ''}
        />
        <label htmlFor="dateOfBrith">date Of Brith :</label>
        <input
          id="dateOfBrith"
          type="date"
          name="dateOfBrith"
          required
          defaultValue={employee ? employee.dateOfBrith : ''}
        />

        <label htmlFor="gender">gender :</label>
        <select
          id="gender"
          required
          defaultValue={employee ? employee.gender : ''}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="gender">Address :</label>
        <input
          id="address"
          type="text"
          name="address"
          required
          defaultValue={employee ? employee.address : ''}
        />
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          defaultValue={employee ? employee.email : ''}
        />
        <label htmlFor="phone">Phone :</label>
        <input
          id="phone"
          type="number"
          name="phone"
          required
          defaultValue={employee ? employee.phone : ''}
        />

        <label htmlFor="dateOfHire">Date Of Hire :</label>
        <input
          id="dateOfHire"
          type="date"
          name="dateOfHire"
          required
          defaultValue={employee ? employee.dateOfHire : ''}
        />

        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          type="number"
          name="salary"
          required
          defaultValue={employee ? employee.salary : ''}
        />

        <label htmlFor="supervisorId">Supervisor Id:</label>
        <input
          id="supervisorId"
          type="number"
          name="supervisorId"
          required
          defaultValue={employee ? employee.supervisorId : ''}
        />

        <label htmlFor="status">Status :</label>
        <input
          id="status"
          type="text"
          name="status"
          required
          defaultValue={employee ? employee.status : ''}
        />

        <label htmlFor="status">Department Id :</label>
        <input
          id="departmentId"
          type="number"
          name="departmentId"
          required
          defaultValue={employee ? employee.departmentId : ''}
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

export default EmployeeControllerForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const employeeData = {
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
  console.log(employeeData);
  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/hr/employees/' + params.employeeId;
  } else {
    url = 'http://localhost:8000/hr/emplyees';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(employeeData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save Employees.' }, { status: 500 });
  }

  return redirect('/hr/employees');
}
