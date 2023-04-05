import { UserProfileHeader } from "./UserProfileHeader/UserProfileHeader";
import styles from "./profileContainer.module.css";

function ProfileContainer() {
  return (
    <div className={styles.profileContainer}>
      <UserProfileHeader />
    </div>
  );
}
export { ProfileContainer };
