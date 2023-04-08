import styles from "./sidebar.module.css";
import { CgFeed } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { logout } from "../../services/logout";
function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.sidebarOptions} ${
          pathname === "/" ? styles.activeTab : ""
        }`}
        onClick={() => navigate("/")}
      >
        <CgFeed />
        <p>Feed</p>
      </div>
      <div
        className={`${styles.sidebarOptions} ${
          pathname === "/bookmark" ? styles.activeTab : ""
        }`}
        onClick={() => navigate("/bookmark")}
      >
        <MdOutlinePostAdd />
        <p>Bookmark</p>
      </div>
      <div
        className={`${styles.sidebarOptions} ${
          pathname === "/profile" ? styles.activeTab : ""
        }`}
        onClick={() => navigate("/profile")}
      >
        <BsPerson />
        <p>Profile</p>
      </div>
      <div className={styles.sidebarOptions} onClick={() => handleLogout()}>
        <FiLogOut />
        <p>Logout</p>
      </div>
    </div>
  );
}
export { Sidebar };
