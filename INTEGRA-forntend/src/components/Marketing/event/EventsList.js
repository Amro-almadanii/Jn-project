import { Link } from 'react-router-dom';
import classes from './EventsList.module.scss';
const EventsList = ({ events }) => {
  return (
    <div className={classes.eventList}>
      <h1>All Events</h1>
      <div className={classes.addNewEvent}>
        <Link className={classes.eventList_link} to="/marketing/campaigns/new">
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
            <tr key={event.id}>
              <td>
                <Link to={`/marketing/events/event-detail/${event.id}`}>
                  {event.id}
                </Link>
              </td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.place}</td>
              <td>{event.cost}</td>
              <td>{event.type}</td>
              <td>
                <Link
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
