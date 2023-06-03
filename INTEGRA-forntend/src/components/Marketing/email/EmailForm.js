import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './EmailForm.module.scss';

const EmailForm = ({ method, email }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + email.id);
  };

  return (
    <Form method={method} className={classes.emailForm}>
      <div>
        <label htmlFor="type">Name :</label>
        <input
          id="type"
          type="text"
          name="type"
          required
          defaultValue={email ? email.type : ''}
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

export default EmailForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    type: data.get('type'),
  };

  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/marketing/emails/' + params.emailId;
  } else {
    url = 'http://localhost:8000/marketing/emails';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save email.' }, { status: 500 });
  }

  return redirect('/marketing/emails');
}
