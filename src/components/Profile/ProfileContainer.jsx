import { AddPost } from "../Feed/AddPost/AddPost";
import { MyPosts } from "./MyPosts/MyPosts";
import { UserProfileHeader } from "./UserProfileHeader/UserProfileHeader";
import styles from "./profileContainer.module.css";

function ProfileContainer() {
  return (
    <div className={styles.profileContainer}>
      <UserProfileHeader />
      <AddPost />
      <MyPosts />
    </div>
  );
}
export { ProfileContainer };
