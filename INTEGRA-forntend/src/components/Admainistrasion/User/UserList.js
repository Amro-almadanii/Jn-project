import { Link, useNavigate } from 'react-router-dom';
import classes from './UserList.module.scss';
const UsersList = ({ users }) => {
  const navigate = useNavigate();
  console.log(users);
  return (
    <div className={classes.UserList}>
      <h1> Admainistrasion > Users </h1>
      <div className={classes.add_User}>
        <Link className={classes.add_User_link} to="/userMangement/role/new">
          Add New User
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            {/* <th>Employee Id</th> */}
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((User) => (
            <tr
              key={User.id}
              onClick={() =>
                navigate(`/userMangement/users/User-detail/${User.id}`)
              }
            >
              {/* <td>{User.id}</td> */}
              <td>{User.fullName}</td>
              <td>{User.username}</td>
              <td>{User.email}</td>
              <td>{User.password}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {/* <th>Employee Id</th> */}
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersList;
