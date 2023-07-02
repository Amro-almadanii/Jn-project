import { useState , useEffect } from "react";
import { usePermission } from "../../../hooks/useApi";
import classes from './RolesSelectPermissions.module.scss'
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
const RolesSelectPermissions = ()=>{
    const permissionInfo =usePermission(); 
    const [permissions,setPermissions] = useState([])
    useEffect(() => {
        setPermissions(permissionInfo);
    }, [permissionInfo])
    console.log(permissionInfo)
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return(
    <div className={classes.RolesSelectPermissions}>
      <div className={classes.btnBox}>
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
    )
}

export default RolesSelectPermissions;