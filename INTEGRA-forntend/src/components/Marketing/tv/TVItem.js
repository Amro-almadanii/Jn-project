import { Link, useSubmit } from 'react-router-dom';
import classes from './TVItem.module.scss';
import { Card } from '@mui/material';
const TVItem = ({ tv }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.tvItem}>
      <h1> Marketing > TV Item > {tv.channel} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Channel of TV:</label>
            <p> {tv.channel} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Time to show on TV:</label>
            <p> {tv.time} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Cost:</label>
            <p> {tv.cost} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Advertising Period:</label>
            <p> {tv.advertising_period} </p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/marketing/tvs/tv-detail/edit/${tv.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TVItem;
