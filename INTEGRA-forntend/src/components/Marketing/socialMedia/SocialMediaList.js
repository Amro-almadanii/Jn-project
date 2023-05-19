import { Link } from 'react-router-dom';
import './SocialMediaList.module.css';
const SocialMediasList = ({ socialMedia }) => {
  return (
    <div className="socialmedialist">
      <h1 style={{ color: 'var(--secound-color)' }}>All SocialMedias</h1>
      <table
        style={{
          border: '2px solid black',
          textAlign: 'center',
          backgroundColor: 'var(--secound-color)',
          color: 'var(--text-color)',
          bordercollapse: 'collapse',
          borderRadius: '4px',
          margin: '10px',
          borderStyle: 'none',
          width: '80%',
        }}
      >
        <thead>
          <tr>
            <th>SocialMedia Id</th>
            <th>Blogger</th>
            <th>Type</th>
            <th>Way</th>
            <th>Cost</th>
            <th>Campaign id</th>
          </tr>
        </thead>
        <tbody>
          {socialMedia.map((socialMedia) => (
            <tr key={socialMedia.id}>
              <td>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'var(--therd-color)',
                  }}
                  to={`/marketing/socialMedia/socialMedia-detail/${socialMedia.id}`}
                >
                  {socialMedia.id}
                </Link>
              </td>
              <td>{socialMedia.blogger}</td>
              <td>{socialMedia.type}</td>
              <td>{socialMedia.way}</td>
              <td>{socialMedia.cost}</td>
              <td>
                <Link
                  to={`/marketing/campaigns/campaign-detail/${socialMedia.campaign_id}`}
                >
                  {socialMedia.campaign_id}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>SocialMedia Id</th>
            <th>Blogger</th>
            <th>Type</th>
            <th>Way</th>
            <th>Cost</th>
            <th>Campaign id</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SocialMediasList;
