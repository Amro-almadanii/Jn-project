import CampaignForm from '../../../components/Marketing/campaign/CampaignForm';
import { useRouteLoaderData } from 'react-router-dom';
import classes from './editCampaign.module.scss';
const EditCampaignPage = () => {
  const { data: campaign } = useRouteLoaderData('campaign-detail');

  return (
    <div className={classes.editCampaign}>
      <h1>Edit Page</h1>
      <CampaignForm method="put" campaign={campaign} />
    </div>
  );
};

export default EditCampaignPage;
