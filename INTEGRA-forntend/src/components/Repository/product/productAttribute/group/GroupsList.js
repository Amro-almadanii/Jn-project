import { Card } from '@mui/material';
import classes from './GroupsList.module.scss';
import { Form, Link, useSubmit } from 'react-router-dom';

const GroupsList = ({ groups }) => {
  const submit = useSubmit();
  // const deleteHandler = () => {
  //   const proceed = window.confirm('Are you sure?');
  //
  //   if (proceed) {
  //     submit(null, { method: 'delete' });
  //   }
  // };

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
            <Form method="delete">
              <input type="hidden" name="groupId" value={group.id} />
              <button type="submit">Delete</button>
            </Form>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GroupsList;
