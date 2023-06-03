import { Link, useSubmit } from 'react-router-dom';
import classes from './LeadItem.module.scss';
import { Card } from '@mui/material';
const LeadItem = ({ lead }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.leadItem}>
        <h1> Lead Item </h1>
        <div className={classes.box}>
          <Card className={classes.card}>
            <div className={classes.cardItems}>
              <label>Name of Lead</label>
              <p> {lead.type} </p>
            </div>
          </Card>
        </div>
    </div>
  );
};

export default LeadItem;
