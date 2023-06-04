import LeadForm from '../../../components/Marketing/lead/LeadForm';
import { useRouteLoaderData } from 'react-router-dom';
import classes from './editLead.module.scss';
const EditLeadPage = () => {
  const { data: lead } = useRouteLoaderData('lead-detail');

  return (
    <div className={classes.editLead}>
      <h1>Edit Page</h1>
      <LeadForm method="put" lead={lead} />
    </div>
  );
};

export default EditLeadPage;
