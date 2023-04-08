import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../Feed/PostCard/PostCard";
import styles from "./allFeedPosts.module.css";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/features/postSlice";
import { fetchComments } from "../../redux/features/commentSlice";
import { users } from "../../redux/features/users";
function AllFeedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, []);
  const getUser = (userId) => {
    return users.find((user) => user.id == userId);
  };
  return (
    <div className={styles.allPostCards}>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={post}
            comments={comments}
            showComments={false}
            user={getUser(post.userId)}
          />
        );
      })}
    </div>
  );
}

export { AllFeedPosts };
