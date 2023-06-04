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
        <h1> Marketing > Customer > {customer.name} </h1>
        <div className={classes.box}>
          <p>customer</p>
        </div>
    </div>
  );
};

export default CustomerItem;
