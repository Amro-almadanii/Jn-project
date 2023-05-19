import "../Styles/Css/sidebar.css";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { MdInventory } from "react-icons/md";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={handleDropdownClick}>
          <div className="icon">
            <AccountCircleIcon />
            <p className="text">User Managment</p>
            <ArrowDropDownIcon
              className={`downicon ${showDropdown ? "rotation" : "unrotation"}`}
            />
          </div>
          <ul className={`dropdown ${showDropdown ? "show" : " "}`}>
            <li>Rules</li>
            <li>permission</li>
          </ul>
        </li>
        <li>
          <div className="icon">
            <StorefrontIcon />
            <p className="text">Marketing</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <MdInventory />
            <p className="text">Inventory</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <AccountBalanceIcon />
            <p className="text">Finince</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <Diversity3Icon />
            <p className="text">HR</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
