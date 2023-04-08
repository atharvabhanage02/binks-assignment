import { useSelector } from "react-redux";
import styles from "./navbar.module.css";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className={styles.nav}>
      <div className={styles.logoWrapper}>
        <img
          src="/Assets/social-media-logo.jpg"
          className={styles.logo}
          alt=""
        />
        <p>GetSocial</p>
      </div>
      <div className={styles.userInfo}>
        {user && <p>{user.displayName}</p>}
        <img
          src="/Assets/user_avatar.png"
          className={styles.profileIcon}
          alt="Avatar"
        />
      </div>
    </div>
  );
}
export { Navbar };
