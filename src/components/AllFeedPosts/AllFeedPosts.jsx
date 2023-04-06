import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../Feed/PostCard/PostCard";
import styles from "./allFeedPosts.module.css";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/features/postSlice";
import { fetchComments } from "../../redux/features/commentSlice";
function AllFeedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, []);
  return (
    <div className={styles.allPostCards}>
      {posts.slice(0, 10).map((post) => {
        return (
          <PostCard
            key={post.userId}
            post={post}
            comments={comments}
            showComments={false}
          />
        );
      })}
    </div>
  );
}

export { AllFeedPosts };
