import { Form, NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import { useContext, useState } from 'react';
import { marketingCtx } from './SideBarContext';
function SideBar() {
  const [repository, setRepository] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showMarketingDropdown, setShowMarketingDropdown] = useState(false);
  const [showRepositoryDropdown, setShowRepositoryDropdown] = useState(false);
  // const handleMarketing = () => {
  //   setMarketing(!marketing);
  // };
  const handleRepository = () => {
    setRepository(!repository);
  };
  // const handleMarketingDropdownClick = () => {
  //   setShowMarketingDropdown(!showMarketingDropdown);
  // };
  const handleRepositoryDropdownClick = () => {
    setShowRepositoryDropdown(!showRepositoryDropdown);
  };
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  let marketing;
  return (
    <aside className={classes.sidebar}>
      <div
        onClick={() => {
          {
            marketing = marketingCtx;
          }
        }}
        className={` ${marketing ? classes.itemBold : classes.item}`}
      >
        Marketing
      </div>
      <div
        className={` ${marketing ? classes.dropdown.show : classes.dropdown}`}
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
          handleRepository();
        }}
        className={` ${repository ? classes.itemBold : classes.item}`}
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
      <div className={classes.butContainar}>
        <Form action="/Logout" method="post">
          <button className={classes.button}>Logout</button>
        </Form>
      </div>
    </aside>
  );
}

export default SideBar;
