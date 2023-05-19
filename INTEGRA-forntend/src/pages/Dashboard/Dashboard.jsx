import React from 'react';
import Header from '../../components/Dashboard/Header';
import SideBar from '../../components/Dashboard/SideBar';
import Main from '../../components/Dashboard/Main';
import styled from 'styled-components';
const Containar = styled.div`
  display: flex;
`;
const Dashboard = () => {
  return (
    <>
      <Header />
      <Containar>
        <SideBar />
        <Main />
      </Containar>
    </>
  );
};

export default Dashboard;
