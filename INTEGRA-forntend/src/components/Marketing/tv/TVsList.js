import { Link } from 'react-router-dom';
import './TVsList.module.css';
const TVsList = ({ tvs }) => {
  return (
    <div style={{ overflowy: 'auto', overflowx: 'hidden', width: '800px' }}>
      <h1>All TVs</h1>
      <table
        style={{
          border: '2px solid black',
          textAlign: 'center',
        }}
      >
        <thead>
          <tr>
            <th>TV Id</th>
            <th>Channel</th>
            <th>Time</th>
            <th>Cost</th>
            <th>Advertising Period</th>
            <th>Campaign Id</th>
          </tr>
        </thead>
        <tbody>
          {tvs.map((tv) => (
            <tr key={tv.id}>
              <td>
                <Link to={`/marketing/tvs/tv-detail/${tv.id}`}>{tv.id}</Link>
              </td>
              <td>{tv.channel}</td>
              <td>{tv.time}</td>
              <td>{tv.cost}</td>
              <td>{tv.advertising_period}</td>
              <td>
                <Link
                  to={`/marketing/campaigns/campaign-detail/${tv.campaign_id}`}
                >
                  {' '}
                  {tv.campaign_id}{' '}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>TV Id</th>
            <th>Channel</th>
            <th>Time</th>
            <th>Cost</th>
            <th>Advertising Period</th>
            <th>Campaign Id</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TVsList;
