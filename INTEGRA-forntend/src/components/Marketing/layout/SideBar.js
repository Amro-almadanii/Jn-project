import { Form, NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';
import { useState } from 'react';

function SideBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <aside className={classes.sidebar}>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
          to="/marketing/campaigns"
          end
        >
          Campaigns
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/marketing/campaigns/new"
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        >
          new Campaign
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
          to="/marketing/tvs"
          end
        >
          TVs
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
          to="/marketing/socialMedia"
          end
        >
          SocialMedia
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
          to="/marketing/events"
          end
        >
          Events
        </NavLink>
      </div>
      <ul>
        <li onClick={handleDropdownClick} className={classes.item}>
          Create new ‿
        </li>
      </ul>
      <div
        className={` ${
          showDropdown ? classes.dropdown.show : classes.dropdown
        }`}
      >
        <NavLink
          to="/marketing/campaigns/new/branch/tv"
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        >
          <span className={classes.p}>new TV</span>
        </NavLink>
      </div>
      <div
        className={` ${showDropdown ? classes.dropdownshow : classes.dropdown}`}
      >
        <NavLink
          to="/marketing/campaigns/new/branch/socialMedia"
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        >
          <span className={classes.p}>new SocialMedia</span>
        </NavLink>
      </div>
      <div
        className={` ${showDropdown ? classes.dropdownshow : classes.dropdown}`}
      >
        <NavLink
          to="/marketing/campaigns/new/branch/event"
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        >
          <span className={classes.p}>new Event</span>
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink
          to="/marketing/pdfs"
          className={({ isActive }) =>
            isActive ? classes.active : classes.navlink
          }
        >
          PDFs
        </NavLink>
      </div>
      <div className={classes.butContainar}>
        <Form action="/logout" method="post">
          <button className={classes.button}>Logout</button>
        </Form>
      </div>

      <div className={classes.footer}>
        <p>Marketing Department</p>
      </div>
    </aside>
  );
}

export default SideBar;
