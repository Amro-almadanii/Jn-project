import { Link, useSubmit } from 'react-router-dom';
import classes from './UserItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import UserSelectRole from './UserSelectRole';
import { useUserRole } from '../../../hooks/useApi';

const UsersItem = ({ user }) => {
  const [userRoles, setUserRoles] = useState([]);
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  const userRoleResponse = useUserRole(user.id);

  useEffect(() => {
    setUserRoles(userRoleResponse);
  }, [userRoleResponse]);

  return (
    <div className={classes.userItem}>
      <h1> Administration > User > {user.username} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Fullname :</label>
            <p> {user.fullName} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Username :</label>
            <p> {user.username} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Email :</label>
            <p> {user.email} </p>
          </div>
          {/* <div className={classes.cardItems}>
            <label> Id :</label>
            <p> {user.id} </p>
          </div> */}
          {/* <div className={classes.cardItems}>
            <label>Leads of Customer:</label>
            <p>
              {' '}
              {leads.map((lead) => (
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
          </div> */}
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/userManagement/users/users-detail/edit/${user.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
      <UserSelectRole userRoles={userRoles} />
    </div>
  );
};

export default UsersItem;
