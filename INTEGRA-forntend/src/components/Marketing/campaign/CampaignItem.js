import { Link, useSubmit, json } from 'react-router-dom';
import classes from './CampaignItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../../../hooks/auth';
import {
  useEvents,
  useLeadsOfCampaign,
  useSocialMedia,
  useTvs,
} from '../../../hooks/useApi';

const CampaignItem = ({ campaign }) => {
  const [campaignDetail, setCampaignDetail] = useState({
    events: [],
    tvs: [],
    socialMedia: [],
    leads: [],
  });

  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };
  const eventResponse = useEvents(campaign.id);
  const tvResponse = useTvs(campaign.id);
  const socialMediaResponse = useSocialMedia(campaign.id);
  const leadResponse = useLeadsOfCampaign(campaign.id);

  useEffect(() => {
    setCampaignDetail({ ...campaignDetail, events: eventResponse });
  }, [eventResponse]);

  useEffect(() => {
    setCampaignDetail({ ...campaignDetail, tvs: tvResponse });
  }, [tvResponse]);

  useEffect(() => {
    setCampaignDetail({ ...campaignDetail, socialMedia: socialMediaResponse });
  }, [socialMediaResponse]);

  useEffect(() => {
    setCampaignDetail({ ...campaignDetail, leads: leadResponse });
  }, [leadResponse]);

  return (
    <div className={classes.campaignItem}>
      <h1> Marketing > Campaign Item > {campaign.name}:</h1>
      <div className={classes.box}>
        <Card className={classes.card}>
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
          <div className={classes.cardItems}>
            <label>Leads of Campaign :</label>
            <p>
              {' '}
              {campaignDetail.leads.map((lead) => (
                <Link
                  key={lead.id}
                  className={classes.leadLink}
                  to={`/marketing/leads/lead-detail/${lead.id}`}
                >
                  {' '}
                  {lead.type}{' '}
                </Link>
              ))}{' '}
            </p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/marketing/campaigns/campaign-detail/edit/${campaign.id}`}
            >
              Edit
            </Link>

            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>

        <div className={classes.cardBox}>
          <Card className={classes.cardChildren}>
            <h2> Events:</h2>
            {campaignDetail.events.map((event) => (
              <Card className={classes.cardChildren} key={event.id}>
                <label>Name of Event</label>
                <p> {event.name} </p>
                <label>Description of Event</label>
                <p> {event.description} </p>
                <label>Place of Event :</label>
                <p> {event.place} </p>
                <label>Type of Event :</label>
                <p> {event.type} </p>
                <label>Cost of Event :</label>
                <p> {event.cost} </p>
                <label>Expected Revenue of Event:</label>
                <p> {event.expected_revenue} </p>
                <label>Actual Revenue of Event:</label>
                <p> {event.actual_revenue} </p>
                <div className={classes.btn}>
                  <Link
                    className={classes.link}
                    to={`/marketing/events/event-detail/edit/${event.id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={deleteHandler}>Delete</button>
                </div>
              </Card>
            ))}
          </Card>

          <Card className={classes.cardChildren}>
            <h2> TVs :</h2>
            {campaignDetail.tvs.map((tv) => (
              <Card className={classes.cardChildren} key={tv.id}>
                <label>Channel of TV:</label>
                <p> {tv.channel} </p>
                <label>Time to show on TV</label>
                <p> {tv.time} </p>
                <label>Cost:</label>
                <p> {tv.cost} </p>
                <label>Advertising Period:</label>
                <p> {tv.advertising_period} </p>
                <label>Expected Revenue of TV:</label>
                <p> {tv.expected_revenue} </p>
                <label>Actual Revenue of Tv:</label>
                <p> {tv.actual_revenue} </p>
                <div className={classes.btn}>
                  <Link
                    className={classes.link}
                    to={`/marketing/campaigns/campaign-detail/edit/${campaign.id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={deleteHandler}>Delete</button>
                </div>
              </Card>
            ))}
          </Card>

          <Card className={classes.cardChildren}>
            <h2> SocialMedia: </h2>
            {campaignDetail.socialMedia.map((socialmedia) => (
              <Card className={classes.cardChildren} key={socialmedia.id}>
                <label>Type:</label>
                <p> {socialmedia.type} </p>
                <label>way of SocialMedia:</label>
                <p> {socialmedia.way} </p>
                <label>Cost of SocialMedia:</label>
                <p> {socialmedia.cost} </p>
                <label>Expected Revenue of SocialMedia:</label>
                <p> {socialmedia.expected_revenue} </p>
                <label>Actual Revenue of SocialMedia:</label>
                <p> {socialmedia.actual_revenue} </p>
                <div className={classes.btn}>
                  <Link
                    className={classes.link}
                    to={`/marketing/campaigns/campaign-detail/edit/${campaign.id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={deleteHandler}>Delete</button>
                </div>
              </Card>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
