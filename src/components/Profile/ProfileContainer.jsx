import { MyPosts } from "./MyPosts/MyPosts";
import { UserProfileHeader } from "./UserProfileHeader/UserProfileHeader";
import styles from "./profileContainer.module.css";

function ProfileContainer() {
  return (
    <div className={styles.profileContainer}>
      <UserProfileHeader />
      <MyPosts />
    </div>
  );
}
export { ProfileContainer };
