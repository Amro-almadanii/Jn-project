import { Link, useSubmit } from 'react-router-dom';
import classes from './SocialMediaItem.module.scss';
import { Card } from '@mui/material';
const SocialMediaItem = ({ socialMedia }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.socialMediaItem}>
      <h1> Marketing > SocialMedia Item > {socialMedia.blogger} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Blogger Name:</label>
            <p> {socialMedia.blogger} </p>
            <label>Type:</label>
            <p> {socialMedia.type} </p>
          </div>
          <div className={classes.cardItems}>
            <label>way of SocialMedia:</label>
            <p> {socialMedia.way} </p>
            <label>Cost of SocialMedia:</label>
            <p> {socialMedia.cost} </p>
          </div>
          <div className={classes.cardItems}>
            <label>campaign of SocialMedia:</label>
            <p>
              <Link
                to={`/marketing/campaigns/campaign-detail/${socialMedia.campaign_id}`}
              >
                {' '}
                {socialMedia.campaign_id}
              </Link>{' '}
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.btn}>
        <Link
          className={classes.link}
          to={`/marketing/socialMedia/socialMedia-detail/edit/${socialMedia.id}`}
        >
          Edit
        </Link>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default SocialMediaItem;
