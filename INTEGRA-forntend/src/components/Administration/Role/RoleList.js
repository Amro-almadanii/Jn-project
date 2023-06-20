import { Link, useNavigate } from 'react-router-dom';
import classes from './RolesList.module.scss';
const RolesList = ({ roles }) => {
  const navigate = useNavigate();
  console.log(roles);
  return (
    <div className={classes.rolesList}>
      <h1> Administration > Roles </h1>
      <div className={classes.add_role}>
        <Link className={classes.add_role_link} to="/userManagement/roles/new">
          Add New Role
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Role Id</th>
            <th>Name</th>
            <th>guard_name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr
              key={role.id}
              onClick={() =>
                navigate(`/userManagement/roles/role-detail/${role.id}`)
              }
            >
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.guard_name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Role Id</th>
            <th>Name</th>
            <th>guard_name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RolesList;
