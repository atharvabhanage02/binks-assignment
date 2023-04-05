import { AddPost } from "./AddPost/AddPost";
import { PostCard } from "./PostCard/PostCard";
import styles from "./feed.module.css";

function Feed() {
  return (
    <div className={styles.feedContainer}>
      <AddPost />
      <PostCard />
    </div>
  );
}
export { Feed };
