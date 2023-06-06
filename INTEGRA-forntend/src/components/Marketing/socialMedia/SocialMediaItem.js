import { Link, useSubmit } from 'react-router-dom';
import classes from './SocialMediaItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCampaign } from '../../../hooks/useApi';
const SocialMediaItem = ({ socialMedia }) => {
  const [campaign, setCampaign] = useState({});
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  const campaignResponse = useCampaign(socialMedia.campaign_id);

  useEffect(() => {
    setCampaign(campaignResponse);
  }, [campaignResponse]);


  return (
    <div className={classes.socialMediaItem}>
      <h1> Marketing > SocialMedia Item > {socialMedia.blogger} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Blogger Name:</label>
            <p> {socialMedia.blogger} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Type:</label>
            <p> {socialMedia.type} </p>
          </div>
          <div className={classes.cardItems}>
            <label>way of SocialMedia:</label>
            <p> {socialMedia.way} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Cost of SocialMedia:</label>
            <p> {socialMedia.cost} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Expected Revenue of Event :</label>
            <p> {socialMedia.expected_revenue} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Actual Revenue of Event :</label>
            <p> {socialMedia.actual_revenue} </p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.linkbtn}
              to={`/marketing/socialMedia/socialMedia-detail/edit/${socialMedia.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>

      <Card className={classes.cardChildren}>
        <h1>Campaign: </h1>
        <div className={classes.cardItems}>
          <label>Name of Campaign :</label>
          <p> {campaign.name} </p>
        </div>
        <div className={classes.cardItems}>
          <label>Description of Campaign :</label>
          <p> {campaign.description} </p>
        </div>
        <div className={classes.cardItems}>
          <label>Start Date of Campaign :</label>
          <p> {campaign.start_date} </p>
        </div>
        <div className={classes.cardItems}>
          <label>End Date of Campaign :</label>
          <p> {campaign.end_date} </p>
        </div>
        <div className={classes.cardItems}>
          <label>Budget of Campaign :</label>
          <p> {campaign.budget} </p>
        </div>
        <div className={classes.cardItems}>
          <label>Expected Revenue of Campaign :</label>
          <p> {campaign.expected_revenue} </p>
        </div>
        <div className={classes.cardItems}>
          <label>Actual Revenue of Campaign :</label>
          <p> {campaign.actual_revenue} </p>
        </div>
        <div className={classes.btn}>
          <Link
            className={classes.linkbtn}
            to={`/marketing/campaigns/campaign-detail/${campaign.id}`}
          >
            Go To Campaign
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SocialMediaItem;
