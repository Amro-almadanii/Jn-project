import { Link, useNavigate } from 'react-router-dom';
import classes from './EventsList.module.scss';
const EventsList = ({ events }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.eventList}>
      <h1>All Events</h1>
      <div className={classes.addNewEvent}>
        <Link
          className={classes.eventList_link}
          to="/marketing/campaigns/new/branch/event"
        >
          Add New Event
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Event Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Place</th>
            <th>Cost</th>
            <th>Type</th>
            <th>Campaign</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              onClick={() =>
                navigate(`/marketing/events/event-detail/${event.id}`)
              }
              key={event.id}
            >
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.place}</td>
              <td>{event.cost}</td>
              <td>{event.type}</td>
              <td>
                <Link
                  className={classes.link}
                  to={`/marketing/campaigns/campaign-detail/${event.campaign_id}`}
                >
                  {event.campaign_id}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Event Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Place</th>
            <th>Cost</th>
            <th>Type</th>
            <th>Campaign</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EventsList;
