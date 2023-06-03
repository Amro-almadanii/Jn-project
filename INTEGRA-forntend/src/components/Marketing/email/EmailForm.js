import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './LeadForm.module.scss';

const LeadForm = ({ method, lead }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + lead.id);
  };

  return (
    <Form method={method} className={classes.leadForm}>
      <div>
        <label htmlFor="type">Name :</label>
        <input
          id="type"
          type="text"
          name="type"
          required
          defaultValue={lead ? lead.type : ''}
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

export default LeadForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    type: data.get('type'),
  };

  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/marketing/leads/' + params.leadId;
  } else {
    url = 'http://localhost:8000/marketing/leads';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save lead.' }, { status: 500 });
  }

  return redirect('/marketing/leads');
}