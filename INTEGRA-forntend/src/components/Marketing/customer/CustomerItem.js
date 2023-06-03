import { Link, useSubmit } from 'react-router-dom';
import classes from './CustomerItem.module.scss';
import { Card } from '@mui/material';
const CustomerItem = ({ customer }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.customerItem}>
        <h1> Customer Item </h1>
        <div className={classes.box}>
          <Card className={classes.card}>
            <div className={classes.cardItems}>
              <label>Name of Customer</label>
              <p> {customer.type} </p>
            </div>
          </Card>
        </div>
    </div>
  );
};

export default CustomerItem;
