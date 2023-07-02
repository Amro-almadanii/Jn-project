import { Link, useSubmit } from 'react-router-dom';
import classes from './RoleItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { usePermission, useRolesPermission } from "../../../hooks/useApi";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
// import { useEmployeeBenefits } from '../../../hooks/useApi';
// import BenefitEmployeeShow from './BenefitEmployeeShow';
const RoleItem = ({ role }) => {
  // const [employeesBenefit, setEmployeesBenefit] = useState([]);
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };
//   const [rolePermissionInfo,setRolePermissionInfo] = useState([])
// const rolesPermission = useRolesPermission(role.id);

  // useEffect(() => {
  //   setRolePermissionInfo(rolesPermission);
  // }, [rolesPermission]);

  const permissionInfo = usePermission(); 
  const [permissions,setPermissions] = useState([])
  useEffect(() => {
      setPermissions(permissionInfo);
  }, [permissionInfo])
  console.log(permissionInfo)
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className={classes.roleItem}>
      <h1> Administration > Role > {role.name} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Name of Benefit :</label>
            <p> {role.name} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Role Permissions :</label>
            {/* {rolePermissionInfo.map((rolePermission)=>(
            <p> {rolePermission.name} </p>
            ))} */}
          </div>
          {/* <div className={classes.cardItems}>
            <label>Guard Name :</label>
            <p> {role.guard_name} </p>
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
              to={`/userManagement/roles/role-detail/edit/${role.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
        <div className={classes.RolesSelectPermissions}>
      <div className={classes.btnBox}>
  
      <h2>Give Permission :</h2>
   
     <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
     </button>
     </div>
 <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Give/Not</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr
              key={permission.id}
            >
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td><input type="checkbox" id={permission.name}
               value={permission.name}/></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Give/Not</th>
          </tr>
        </tfoot>
      </table>
    </div>
      </div>
      {/* <BenefitEmployeeShow data={employeesBenefit} /> */}
    </div>
  );
};

export default RoleItem;
