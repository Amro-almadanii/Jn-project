import { Card } from '@mui/material';
import classes from './GroupsList.module.scss';
import { Form, Link, useSubmit } from 'react-router-dom';

const GroupsList = ({ groups }) => {
  const submit = useSubmit();
  const deleteHandler = (event) => {
    const proceed = window.confirm('Are you sure?');

    const id = event.target.value;
    if (proceed) {
      submit(null, { method: 'delete', action: `/repository/products/attributes/groups/delete/${id}` });
    }
  };

  return (
    <div className={classes.groupsList}>
      {groups.map((group) => (
        <Card className={classes.card} key={group.id}>
          <label>Name of Group:</label>
          <p> {group.name} </p>
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/repository/products/attributes/new/${group.id}`}
            >
              Create New Attribute
            </Link>
            <Link
              className={classes.link}
              to={`/repository/products/attributes/groups/group-detail/edit/${group.id}`}
            >
              Edit
            </Link>
              <button onClick={deleteHandler} value={group.id} type="submit">Delete</button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GroupsList;

