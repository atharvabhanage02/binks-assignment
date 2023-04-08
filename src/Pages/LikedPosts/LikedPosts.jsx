import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../components/Feed/PostCard/PostCard";
import { users } from "../../data/users";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./likedPosts.module.css";
function LikedPosts() {
  const likedPosts = useSelector((state) => state.posts.likedPosts);
  const getUser = (userId) => {
    return users.find((user) => user.id == userId);
  };
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <div className={styles.likesContainer}>
          {likedPosts &&
            likedPosts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  //   comments={comments}
                  showComments={false}
                  user={getUser(post.userId)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
export { LikedPosts };
