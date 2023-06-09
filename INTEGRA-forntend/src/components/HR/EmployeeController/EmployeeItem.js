import { Link, useSubmit } from 'react-router-dom';
import classes from './EmployeeItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
// import { useLeadsOfCustomer } from '../../../hooks/useApi';
const EmployeeItem = ({ employee }) => {
  //   const [leads, setLeads] = useState([]);
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  //   const leadResponse = useLeadsOfCustomer(employee.id);

  //   useEffect(() => {
  //     setLeads(leadResponse);
  //   }, [leadResponse]);

  return (
    <div className={classes.employeeItem}>
      <h1> HR > Employee > {employee.name} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>First name :</label>
            <p> {employee.firstName} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Last name :</label>
            <p> {employee.lastName} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Date Of Brith :</label>
            <p> {employee.dateOfBrith} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Gender :</label>
            <p> {employee.gender} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Address :</label>
            <p> {employee.address} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Email :</label>
            <p> {employee.email} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Phone :</label>
            <p> {employee.phone} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Date Of Hire :</label>
            <p> {employee.dateOfHire} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Salary :</label>
            <p> {employee.salary} </p>
          </div>
          <div className={classes.cardItems}>
            <label> Supervisor Id :</label>
            <p> {employee.supervisorId} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Status :</label>
            <p> {employee.status} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Department Id :</label>
            <p> {employee.departmentId} </p>
          </div>
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
              to={`/hr/employees/employee-detail/edit/${employee.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeItem;
