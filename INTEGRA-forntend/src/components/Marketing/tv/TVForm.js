import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import classes from './TVForm.module.css';
import { getAuthToken } from '../../../util/auth';


const TVForm = ({ method, tv }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + tv.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="channel">Channel Name</label>
        <input
          id="channel"
          type="text"
          name="channel"
          required
          defaultValue={tv ? tv.channel : ''}
        />
      </p>
      <p>
        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          required
          defaultValue={tv ? tv.time : ''}
        />
      </p>
      <p>
        <label htmlFor="cost">Cost</label>
        <input
          id="cost"
          type="number"
          name="cost"
          required
          defaultValue={tv ? tv.cost : ''}
        />
      </p>
      <p>
        <label htmlFor="advertising_period">Advertising Period</label>
        <input
          id="advertising_period"
          type="number"
          name="advertising_period"
          required
          defaultValue={tv ? tv.advertising_period : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
};

export default TVForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const tvData = {
    channel: data.get('channel'),
    time: data.get('time'),
    cost: data.get('cost'),
    advertising_period: data.get('advertising_period'),
    campaign_id: '1',
  };

  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/marketing/tv/update/' + params.tvId;
  } else {
    url = 'http://localhost:8000/marketing/tv/store';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer' + token,
    },
    body: JSON.stringify(tvData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save TV.' }, { status: 500 });
  }

  return redirect('/marketing/tvs');
}
