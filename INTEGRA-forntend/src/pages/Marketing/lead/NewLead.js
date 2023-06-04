import LeadForm from '../../../components/Marketing/lead/LeadForm';

const NewLeadPage = () => {
  return (
    <div>
      <h1> Marketing > Leads > Create New Lead </h1>
      <LeadForm method="post" />
    </div>
  );
};

export default NewLeadPage;
