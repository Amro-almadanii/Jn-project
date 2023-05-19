import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import classes from './EventForm.module.css';


const EventForm = ({ method, event }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + event.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={event ? event.name : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <p>
        <label htmlFor="place">Place</label>
        <input
          id="place"
          type="text"
          name="place"
          required
          defaultValue={event ? event.place : ''}
        />
      </p>
      <p>
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          name="type"
          required
          defaultValue={event ? event.type : ''}
        />
      </p>
      <p>
        <label htmlFor="cost">Cost</label>
        <input
          id="cost"
          type="number"
          name="cost"
          required
          defaultValue={event ? event.cost : ''}
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

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    name: data.get('name'),
    description: data.get('description'),
    cost: data.get('cost'),
    type: data.get('type'),
    place: data.get('place'),
    campaign_id: 1,
    };

  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/marketing/event/update/' + params.eventId;
  } else {
    url = 'http://localhost:8000/marketing/event/store';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/marketing//events');
}
