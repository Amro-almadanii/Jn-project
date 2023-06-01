import { NavLink, Outlet, redirect, useNavigate } from 'react-router-dom';
import classes from './NavBar.module.scss';
import { useState } from 'react';

function NavBar() {
  const [bar1, setBar1] = useState(false);
  const [bar2, setBar2] = useState(false);
  const [bar3, setBar3] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={classes.box}>
      <div className={classes.containar}>
        <div
          onClick={() => {
            setBar1(true);
            setBar2(false);
            setBar3(false);
            navigate('/marketing/campaigns/new/branch/tv');
          }}
          className={bar1 ? classes.active : classes.item}
        >
          <NavLink
            to="/marketing/campaigns/new/branch/tv"
            className={classes.link}
          >
            new tv
          </NavLink>
        </div>
        <div
          onClick={() => {
            setBar1(false);
            setBar2(true);
            setBar3(false);
            navigate('/marketing/campaigns/new/branch/socialMedia');
          }}
          className={bar2 ? classes.active : classes.item}
        >
          <NavLink
            to="/marketing/campaigns/new/branch/socialMedia"
            className={classes.link}
          >
            new socialMedia
          </NavLink>
        </div>
        <div
          onClick={() => {
            setBar1(false);
            setBar2(false);
            setBar3(true);
            navigate('/marketing/campaigns/new/branch/event');
          }}
          className={bar3 ? classes.active : classes.item}
        >
          <NavLink
            to="/marketing/campaigns/new/branch/event"
            className={classes.link}
          >
            new Event
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
