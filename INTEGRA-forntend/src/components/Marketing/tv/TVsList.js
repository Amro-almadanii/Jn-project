import { Link } from 'react-router-dom';
import classes from './TVsList.module.scss';
const TVsList = ({ tvs }) => {
  return (
    <div className={classes.tvList}>
      <h1>All TVs</h1>
      <div className={classes.addNewTv}>
        <Link className={classes.tvList_link} to="/marketing/campaigns/new">
          Add New TV
        </Link>
      </div>
      <table>
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
                <Link
                  className={classes.link}
                  to={`/marketing/tvs/tv-detail/${tv.id}`}
                >
                  {tv.id}
                </Link>
              </td>
              <td>{tv.channel}</td>
              <td>{tv.time}</td>
              <td>{tv.cost}</td>
              <td>{tv.advertising_period}</td>
              <td>
                <Link
                  className={classes.link}
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
