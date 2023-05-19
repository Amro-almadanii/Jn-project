import CampaignForm from '../../../components/Marketing/campaign/CampaignForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditCampaignPage = () => {
  const { data:campaign } = useRouteLoaderData('campaign-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <CampaignForm method="put"  campaign={campaign}/>
    </>
  );
};

export default EditCampaignPage;
