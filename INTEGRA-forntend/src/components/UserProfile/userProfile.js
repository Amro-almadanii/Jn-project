import { Card } from '@mui/material';
import classes from './UserProfile.module.scss';
// import CountUp from 'react-countup';

import { getAuthToken } from '../../hooks/auth';
import React, { Component, useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  let certificatesCounter = 1;
  let educationsCounter = 1;
  let performancesCounter = 1;
  let vacationsCounter = 1;
  const handleCertificatesCounter = () => {
    certificatesCounter++;
  };
  const handleEducationsCounter = () => {
    educationsCounter++;
  };

  const handlePerformancesCounter = () => {
    performancesCounter++;
  };

  const handleVacationsCounter = () => {
    vacationsCounter++;
  };

  const getInfo = async () => {
    const token = getAuthToken();
    const data = await fetch('http://localhost:8000/getMe', {
      headers: {
        Authorization: 'bearer ' + token
      }
    });
    return data.json();
  };

  const { data, isLoading } = useQuery('getMe', getInfo);

  console.log(userInfo);

  useEffect(() => {
    if (data)
      setUserInfo(data[0]);
  }, [data]);

  const navigate = useNavigate();

  return (
    <div className={classes.UserProfile}>
      {isLoading && <p>is loading.....</p>}
      {!isLoading && data &&
        <div>
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
              {userInfo.certificates && userInfo.certificates.map((Info) => (
                <Card className={classes.childCard}>
                  <label>Number Of Certificates :{certificatesCounter} </label>
                  <div
                    onLoad={handleCertificatesCounter()}
                    className={classes.cardItems}
                  >
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
              {userInfo.educations && userInfo.educations.map((Info) => (
                <Card className={classes.childCard}>
                  <label>Number Of Educations : {educationsCounter}</label>
                  <div className={classes.cardItems}>
                    <label>Educations Degree :</label>
                    <p>{Info.degree}</p>
                  </div>
                  <div className={classes.cardItems}>
                    <label>Educations Graduation Date :</label>
                    <p>{Info.graduationDate}</p>
                  </div>
                  <div
                    onLoad={handleEducationsCounter()}
                    className={classes.cardItems}
                  >
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
              {userInfo.performances && userInfo.performances.map((Info) => (
                <Card className={classes.childCard}>
                  <label>Number Of Performances :{performancesCounter} </label>
                  <div className={classes.cardItems}>
                    <label>Performances Rating :</label>
                    <p>{Info.performanceRating}</p>
                  </div>
                  <div
                    onLoad={handlePerformancesCounter()}
                    className={classes.cardItems}
                  >
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
              {userInfo.vacations && userInfo.vacations.map((Info) => (
                <Card className={classes.childCard}>
                  <label>Number Of Vacations : {vacationsCounter}</label>
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
                  <div
                    onLoad={handleVacationsCounter}
                    className={classes.cardItems}
                  >
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
        </div>}
    </div>
  );
};

export default UserProfile;

{
  /* <div>
            <CountUp end={100} start={0} duration={3} />%
          </div> */
}
