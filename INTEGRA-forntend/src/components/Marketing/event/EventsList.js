import { Link } from 'react-router-dom';

const EventsList = ({ events }) => {
  return (
    <div>
      <h1>All Events</h1>
      <table
        style={{
          border: '2px solid black',
          textAlign: 'center',
        }}
      >
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
                  <Link to ={`/marketing/events/event-detail/${event.id}`}>
                    {event.id}
                  </Link>
                </td>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.place}</td>
                <td>{event.cost}</td>
                <td>{event.type}</td>
                <td><Link to={`/marketing/campaigns/campaign-detail/${event.campaign_id}`}>{event.campaign_id}</Link></td>
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
