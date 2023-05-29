import { Link, useSubmit } from 'react-router-dom';
import './CampaignItem.module.css';
const CampaignItem = ({ campaign }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: 'var(--second-color)',
        width: 'calc(100vw - 270px)',
        borderRadius: '4px',
      }}
    >
      <h1 style={{ color: 'var(--text-color)' }}> Campaign Item:</h1>
      <div>
        <label>Name of Campaign:</label>
        <p className="p"> {campaign.name} </p>
        <label>Description of Campaign:</label>
        <p className="p"> {campaign.description} </p>
        <label>Start Date of Campaign:</label>
        <p className="p"> {campaign.start_date} </p>
        <label>End Date of Campaign:</label>
        <p className="p"> {campaign.end_date} </p>
        <label>Budget of Campaign:</label>
        <p className="p"> {campaign.budget} </p>
        <label>Expected Revenue of Campaign:</label>
        <p className="p"> {campaign.expected_revenue} </p>
        <label>Actual Revenue of Campaign:</label>
        <p className="p"> {campaign.actual_revenue} </p>
      </div>
      <div
        style={{
          marginLeft: '50px',
          marginTop: '40px',
          display: 'flex',
        }}
      >
        <Link
          to={`/marketing/campaigns/campaign-detail/edit/${campaign.id}`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
            backgroundColor: 'var(--therd-color)',
            borderRadius: '4px',
            margin: '10px',
            borderStyle: 'none',
            padding: '10px',
          }}
        >
          Edit
        </Link>
        <button
          onClick={deleteHandler}
          style={{
            margin: '10px',
            backgroundColor: 'var(--therd-color)',
            borderStyle: 'none',
            padding: '6px',
            borderRadius: '4px',
            color: 'var(--text-color)',
            cursor: 'pointer',
            width: '70px',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CampaignItem;
