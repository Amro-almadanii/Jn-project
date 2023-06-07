import { Form, NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import { useContext, useState } from 'react';
import { marketingCtx } from './SideBarContext';
function SideBar() {
  const [showMarketingDropdown, setShowMarketingDropdown] = useState(false);
  const [showRepositoryDropdown, setShowRepositoryDropdown] = useState(false);
  const [showSystemManagmentDropdown, setSystemManagmentDropdown] =
    useState(false);
  const [showHrDropdown, setShowHrDropdown] = useState(false);

  const handleMarketingDropdownClick = () => {
    setShowMarketingDropdown(!showMarketingDropdown);
  };
  const handleRepositoryDropdownClick = () => {
    setShowRepositoryDropdown(!showRepositoryDropdown);
  };
  const handleSystemManagmentDropdownClick = () => {
    setSystemManagmentDropdown(!showSystemManagmentDropdown);
  };
  const handleHrDropdownClick = () => {
    setShowHrDropdown(!showHrDropdown);
  };
  // const handleDropdownClick = () => {
  //   setShowDropdown(!showDropdown);
  // };

  return (
    <aside className={classes.sidebar}>
      <div
        onClick={() => {
          {
            handleSystemManagmentDropdownClick();
          }
        }}
        className={` ${
          showSystemManagmentDropdown ? classes.itemBold : classes.item
        }`}
      >
        System Managment
      </div>
      <div
        className={` ${
          showSystemManagmentDropdown ? classes.dropdown.show : classes.dropdown
        }`}
      >
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/systemmanagment/profile"
            end
          >
            Profile
          </NavLink>
        </div>
      </div>
      <div
        onClick={() => {
          {
            handleMarketingDropdownClick();
          }
        }}
        className={` ${
          showMarketingDropdown ? classes.itemBold : classes.item
        }`}
      >
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

      <div
        onClick={() => {
          handleRepositoryDropdownClick();
        }}
        className={` ${
          showRepositoryDropdown ? classes.itemBold : classes.item
        }`}
      >
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
      <div
        onClick={() => {
          handleHrDropdownClick();
        }}
        className={` ${showHrDropdown ? classes.itemBold : classes.item}`}
      >
        HR
      </div>
      <div
        className={` ${
          showHrDropdown ? classes.dropdown.show : classes.dropdown
        }`}
      >
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/benefit"
            end
          >
            Benefit
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/department"
            end
          >
            Departments
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/employeecertificate"
            end
          >
            Employee Certificate
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/employee"
            end
          >
            Employee
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/employeeeducation"
            end
          >
            Employee Education
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/employeeperformances"
            end
          >
            Employee Performances
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.navlink
            }
            to="/hr/employeevacations"
            end
          >
            Employee Vacations
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
