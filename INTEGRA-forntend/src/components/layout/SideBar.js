import { Form, NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import { useState } from 'react';

function SideBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMarketingDropdown, setShowMarketingDropdown] = useState(false);
  const [showRepositoryDropdown, setShowRepositoryDropdown] = useState(false);
  const handleMarketingDropdownClick = () => {
    setShowMarketingDropdown(!showMarketingDropdown);
  };
  const handleRepositoryDropdownClick = () => {
    setShowRepositoryDropdown(!showRepositoryDropdown);
  };
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <aside className={classes.sidebar}>
      <div onClick={handleMarketingDropdownClick} className={classes.item}>
        Marketing
      </div>
      <div
        className={` ${
          showMarketingDropdown ? classes.dropdown.show : classes.dropdown
        }`}
      >
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
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/marketing/emails"
            end
          >
            Emails
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/marketing/customers"
            end
          >
            Customers
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/marketing/leads"
            end
          >
            Leads
          </NavLink>
        </div>
      </div>



      <div onClick={handleRepositoryDropdownClick} className={classes.item}>
        Repository
      </div>
      <div
        className={` ${
          showRepositoryDropdown ? classes.dropdown.show : classes.dropdown
        }`}
      >
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/repository/suppliers"
            end
          >
            Suppliers
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/repository/categories"
            end
          >
            Categories
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/repository/products"
            end
          >
            Products
          </NavLink>
        </div>


      </div>
       <div className={classes.butContainar}>
         <Form action="/Logout" method="post">
           <button className={classes.button}>Logout</button>
         </Form>
       </div>
    </aside>
  );
}

export default SideBar;
