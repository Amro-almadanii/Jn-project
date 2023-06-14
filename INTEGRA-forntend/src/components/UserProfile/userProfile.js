import { Card } from '@mui/material';
import classes from './UserProfile.module.scss';
// import CountUp from 'react-countup';
import { Chart } from 'react-google-charts';
import { getAuthToken } from '../../hooks/auth';
import React, { Component } from 'react';
import { json } from 'react-router-dom';
import { useLoaderData, useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const [data] = useLoaderData();
  const userInfo = data;
  const navigate = useNavigate();
  console.log(userInfo);

  return (
    <div className={classes.UserProfile}>
      <h1> User profile > {userInfo.firstName + ' ' + userInfo.lastName}</h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <label>First Name:</label>
          <p>{userInfo.firstName}</p>
          <label>Last Name:</label>
          <p>{userInfo.lastName}</p>
          <div className={classes.button}>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
          <label>Certificate Info :</label>
          {userInfo.certificates.map((Info, index) => (
            <Card className={classes.childCard}>
              <label>Number Of Certificates :{index + 1} </label>
              <div className={classes.cardItems}>
                <label>Certificates Name :</label>
                <p>{Info.name}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Certificates Level :</label>
                <p>{Info.level}</p>
              </div>
            </Card>
          ))}

          <label>Educations Info :</label>
          {userInfo.educations.map((Info, index) => (
            <Card className={classes.childCard}>
              <label>Number Of Educations : {index + 1}</label>
              <div className={classes.cardItems}>
                <label>Educations Degree :</label>
                <p>{Info.degree}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Educations Graduation Date :</label>
                <p>{Info.graduationDate}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Educations Granting By :</label>
                <p>{Info.grantingBy}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Educations Specialization :</label>
                <p>{Info.specialization}</p>
              </div>
            </Card>
          ))}

          <label>Performances Info :</label>
          {userInfo.performances.map((Info, index) => (
            <Card className={classes.childCard}>
              <label>Number Of Performances :{index + 1} </label>
              <div className={classes.cardItems}>
                <label>Performances Rating :</label>
                <p>{Info.performanceRating}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Performances Review Date :</label>
                <p>{Info.reviewDate}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Performances Comments :</label>
                <p>{Info.comments}</p>
              </div>
            </Card>
          ))}

          <label>Vacations Info :</label>
          {userInfo.vacations.map((Info, index) => (
            <Card className={classes.childCard}>
              <label>Number Of Vacations : {index + 1}</label>
              <div className={classes.cardItems}>
                <label>Vacations Status :</label>
                <p>{Info.status}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Vacations Type :</label>
                <p>{Info.typeOfVacation}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Vacations Start Date :</label>
                <p>{Info.startDate}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Vacations End Date :</label>
                <p>{Info.endDate}</p>
              </div>
              <div className={classes.cardItems}>
                <label>Vacations Reason :</label>
                <p>{Info.reasonOfVacation}</p>
              </div>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;

export async function loader() {
  const id = localStorage.getItem('id');
  const token = getAuthToken();
  const response = await fetch(
    'http://localhost:8000/hr/employees/employeeDetails/' + id,
    {
      headers: {
        Authorization: 'bearer' + token,
      },
    }
  );

  if (!response.ok) {
    throw json({ message: 'Could not fetch User Details.' }, { status: 500 });
  } else {
    return response;
  }
}

{
  /* <div>
            <CountUp end={100} start={0} duration={3} />%
          </div> */
}

// const info = [
//   ['Task', 'Hours per Day', 'style'],
//   ['amro', 11],
//   ['Eat', 2],
//   ['Commute', 2],
//   ['Watch TV', 2],
// ];

// const columns = [
//   ['Element', 'Density', { role: 'style' }],
//   ['amro', 8.94, '#b87333'],
//   ['Silver', 10.49, 'silver'],
//   ['Gold', 19.3, 'gold'],
//   ['Platinum', 21.45, 'color: #e5e4e2'],
// ];

{
  /* <Chart
            chartType="PieChart"
            data={info}
            loader={<div>Loading Chart..</div>}
            options={{ title: 'Motivation Level Throughout the Day' }}
            width={'100%'}
            height={'400px'}
          /> */
}
{
  /* <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={columns}
          /> */
}
