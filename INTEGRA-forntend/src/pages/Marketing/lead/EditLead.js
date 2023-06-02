import LeadForm from '../../../components/Marketing/lead/LeadForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditLeadPage = () => {
  const { data:lead }= useRouteLoaderData('lead-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <LeadForm method="put"  lead={lead}/>
    </>
  );
};

export default EditLeadPage;
