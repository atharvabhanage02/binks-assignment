import { PostCard } from "../Feed/PostCard/PostCard";
import styles from "./allFeedPosts.module.css";
function AllFeedPosts() {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.allPostCards}>
      {arr.map((card) => {
        return <PostCard />;
      })}
      {/* <PostCard /> */}
    </div>
  );
}

export { AllFeedPosts };
