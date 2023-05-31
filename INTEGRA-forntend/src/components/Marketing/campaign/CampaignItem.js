import { Link, useSubmit , json} from 'react-router-dom';
import classes from './CampaignItem.module.scss';
import { Card } from '@mui/material';
import EventsList from '../event/EventsList';
import EventsPage from '../../../pages/Marketing/event/Events';
import { useEffect } from 'react';
import { getAuthToken } from '../../../util/auth';
const CampaignItem = ({ campaign }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  //
  // useEffect(  (events) => {
  //   const token = getAuthToken();
  //
  //   fetch('http://localhost:8000/marketing/event/show/1', {
  //     headers:{
  //       'Authorization': 'bearer' + token,
  //     }
  //   })
  //     .then(function(response){ return response.json(); })
  //     .then(function(data) {
  //       events = data.data;
  //       console.log(events);
  //     })
  // }, []);
  //


  return (
    <div className={classes.campaignItem}>
      <h1> Marketing > Campaign Item > {campaign.name}:</h1>
      <div>
        <Card variant="outlined">
        <label>Name of Campaign:</label>
        <p> {campaign.name} </p>
        <label>Description of Campaign:</label>
        <p> {campaign.description} </p>
        <label>Start Date of Campaign:</label>
        <p> {campaign.start_date} </p>
        <label>End Date of Campaign:</label>
        <p> {campaign.end_date} </p>
        <label>Budget of Campaign:</label>
        <p> {campaign.budget} </p>
        <label>Expected Revenue of Campaign:</label>
        <p> {campaign.expected_revenue} </p>
        <label>Actual Revenue of Campaign:</label>
        <p> {campaign.actual_revenue} </p>
          </Card>
        </div>
      <div className={classes.btn}>
        <Link className={classes.link}
          to={`/marketing/campaigns/campaign-detail/edit/${campaign.id}`}
        >
          Edit
        </Link>

        <button onClick={deleteHandler} >
          Delete
        </button>
      </div>
      {/*<EventsList events={events}/>*/}
    </div>
  );
};

export default CampaignItem;
