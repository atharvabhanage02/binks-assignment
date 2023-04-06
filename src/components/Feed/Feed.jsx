import { AllFeedPosts } from "../AllFeedPosts/AllFeedPosts";
import { AddPost } from "./AddPost/AddPost";
import styles from "./feed.module.css";

function Feed() {
  return (
    <div className={styles.feedContainer}>
      <AddPost />
      <AllFeedPosts />
    </div>
  );
}
export { Feed };
