import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmployeeCertificateForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const EmployeeCertificateForm = ({ method, employeeCertificate }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + employeeCertificate.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={employeeCertificate ? employeeCertificate.name : ''}
        />

        <label htmlFor="name">Level :</label>
        <input
          id="level"
          type="text"
          name="level"
          required
          defaultValue={employeeCertificate ? employeeCertificate.level : ''}
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

export default EmployeeCertificateForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const employeeCertificateData = {
    employee_id: 1,
    name: data.get('name'),
    level: data.get('level'),
  };
  console.log(employeeCertificateData);
  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/hr/employeeCertificates/' +
      params.employeeCertificateId;
  } else {
    url = 'http://localhost:8000/hr/employeeCertificates';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(employeeCertificateData),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not save EmployeeCertificates.' },
      { status: 500 }
    );
  }

  return redirect('/hr/employeeCertificates');
}
