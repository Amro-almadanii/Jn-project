import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>Marketing Department</div>
      <nav className={classes["header-nav"]}>
        <ul>
          <li>
            <a href="src/components/Marketing/layout#">Home</a>
          </li>
          <li>
            <a href="src/components/Marketing/layout#">About</a>
          </li>
          <li>
            <a href="src/components/Marketing/layout#">Services</a>
          </li>
          <li>
            <a href="src/components/Marketing/layout#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
