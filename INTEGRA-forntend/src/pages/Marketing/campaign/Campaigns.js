import { Fragment } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import CampaignsList from '../../../components/Marketing/campaign/CampaignsList';
import { getAuthToken } from '../../../util/auth';
import './Campaigns.css';
const CampaignsPage = () => {
  const { data: campaigns } = useLoaderData();

  return (
    <div className="campaigns">
      <h1>Campaigns Page</h1>
      <CampaignsList campaigns={campaigns} />
    </div>
  );
};

export default CampaignsPage;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/marketing/campaigns', {
    headers: {
      Authorization: 'bearer' + token,
    },
  });

  if (!response.ok) {
    throw json({ message: 'Could not fetch campaigns.' }, { status: 500 });
  } else {
    return response;
  }
}
