import styles from "./addPost.module.css";
import { BsPerson } from "react-icons/bs";
function AddPost() {
  return (
    <div className={styles.addPostContainer}>
      <div className={styles.postInputSection}>
        <img
          src="./Assets/user_avatar.png"
          className={styles.profileIcon}
          alt="Avatar"
        />
        <input
          type="text"
          className={styles.postInput}
          placeholder="What's happening?"
        />
      </div>
      <div className={styles.postButtonSection}>
        <button className={styles.postButton}>Post</button>
      </div>
    </div>
  );
}
export { AddPost };
