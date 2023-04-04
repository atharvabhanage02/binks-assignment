import styles from "./navbar.module.css";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logoWrapper}>
        <img
          src="./Assets/social-media-logo.jpg"
          className={styles.logo}
          alt=""
        />
        <p>GetSocial</p>
      </div>
      <div className={styles.searchContainer}>
        <BiSearch />
        <input
          type="text"
          className={styles.searchBar}
          aria-hidden="true"
          placeholder="Search"
        />
      </div>
      <div className={styles.userInfo}>
        <p>Atharva Bhanage</p>
        <BsFillPersonFill className={styles.profileIcon} />
      </div>
    </div>
  );
}
export { Navbar };
