import CampaignForm from '../../../components/Marketing/campaign/CampaignForm';

const NewCampaignPage = () => {
  return (
    <div>
      <h1>Marketing > Campaigns > Create New Campaign </h1>
      <CampaignForm method="post" />
    </div>
  );
};

export default NewCampaignPage;
