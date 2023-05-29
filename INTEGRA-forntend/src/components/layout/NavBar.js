import { NavLink, Outlet } from 'react-router-dom';
import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className={classes.box}>
      <div className={classes.containar}>
        <div className={classes.item}>
          <NavLink
            to="/marketing/campaigns/new/branch/tv"
            className={({ isActive }) =>
              isActive ? classes.active : classes.item
            }
          >
            new tv
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/marketing/campaigns/new/branch/socialMedia"
            className={({ isActive }) =>
              isActive ? classes.active : classes.item
            }
          >
            new socialMedia
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/marketing/campaigns/new/branch/event"
            className={({ isActive }) =>
              isActive ? classes.active : classes.item
            }
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