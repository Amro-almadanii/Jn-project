import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>I N T E G R A</div>
      <nav className={classes["header-nav"]}>
        <ul>
          <li>
            <a href="src/components/Marketing/layout#">User Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
