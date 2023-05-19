import { Link } from 'react-router-dom';
import './CampaignsList.module.css';
const CampaignsList = ({ campaigns }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      <h1>All Campaigns</h1>
      <table
        style={{
          textAlign: 'center',
          backgroundColor: 'var(--secound-color)',
          color: 'var(--text-color)',
          bordercollapse: 'collapse',
          borderRadius: '4px',
        }}
      >
        <thead className="thead">
          <tr>
            <th>Campaign Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Expected Revenue</th>
            <th>Actual Revenue</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'var(--therd-color)',
                  }}
                  to={`/marketing/campaigns/campaign-detail/${campaign.id}`}
                >
                  {campaign.id}
                </Link>
              </td>
              <td>{campaign.name}</td>
              <td>{campaign.description}</td>
              <td>{campaign.start_date}</td>
              <td>{campaign.end_date}</td>
              <td>{campaign.budget}</td>
              <td>{campaign.status}</td>
              <td>{campaign.expected_revenue}</td>
              <td>{campaign.actual_revenue}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Campaign Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Expected Revenue</th>
            <th>Actual Revenue</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CampaignsList;
