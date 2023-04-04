import styles from "./sidebar.module.css";
import { CgFeed } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarOptions}>
        <CgFeed />
        <p>Feed</p>
      </div>
      <div className={styles.sidebarOptions}>
        <MdOutlinePostAdd />
        <p>My Posts</p>
      </div>
      <div className={styles.sidebarOptions}>
        <BsPerson />
        <p>Profile</p>
      </div>
      <div className={styles.sidebarOptions}>
        <FiLogOut />
        <p>Logout</p>
      </div>
    </div>
  );
}
export { Sidebar };
