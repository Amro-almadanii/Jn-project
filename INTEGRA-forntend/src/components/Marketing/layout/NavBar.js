import { Form, NavLink, Outlet } from 'react-router-dom';
import classes from './SideBar.module.css';
import { Fragment } from 'react';

function NavBar() {
  return (
    <Fragment>
      <nav className={classes['sidebar-nav']}>
        <ul>
          <li>
            <NavLink
              to="/marketing/campaigns/new/branch/tv"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              new TV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marketing/campaigns/new/branch/socialMedia"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              new SocialMedia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marketing/campaigns/new/branch/event"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              new Event
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;
