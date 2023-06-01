import { Link, useSubmit } from 'react-router-dom';

const EventItem = ({ event }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <article>
      <h1> Event Item</h1>
      <div>
        <label>Name of Event</label>
        <p style={{ marginLeft: '20px' }}> {event.name} </p>
        <label>Description of Event</label>
        <p style={{ marginLeft: '20px' }}> {event.description} </p>
        <label>Place of Event :</label>
        <p style={{ marginLeft: '20px' }}> {event.place} </p>
        <label>Type of Event :</label>
        <p style={{ marginLeft: '20px' }}> {event.type} </p>
        <label>Cost of Event :</label>
        <p style={{ marginLeft: '20px' }}> {event.cost} </p>
        <label>Event for Campaign:</label>
        <p style={{ marginLeft: '20px' }}>
          {' '}
          <Link
            to={`/marketing/campaigns/campaign-detail/${event.campaign_id}`}
          >
            {event.campaign_id}{' '}
          </Link>
        </p>
      </div>
      <menu>
        <Link to={`/marketing/events/event-detail/edit/${event.id}`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
