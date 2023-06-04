import { Link, useSubmit } from 'react-router-dom';
import { Card } from '@mui/material';
import classes from './EventItem.module.scss';
const EventItem = ({ event }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.eventItem}>
      <h1> Marketing > Event Item > {event.name}</h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Name of Event</label>
            <p> {event.name} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Description of Event</label>
            <p> {event.description} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Place of Event :</label>
            <p> {event.place} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Type of Event :</label>
            <p> {event.type} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Cost of Event :</label>
            <p> {event.cost} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Event for Campaign:</label>
            <p>
              {' '}
              <Link
                className={classes.link}
                to={`/marketing/campaigns/campaign-detail/${event.campaign_id}`}
              >
                {event.campaign_id}{' '}
              </Link>
            </p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.linkbtn}
              to={`/marketing/events/event-detail/edit/${event.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EventItem;
