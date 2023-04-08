import styles from "./postCard.module.css";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { users } from "../../../redux/features/users";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/features/postSlice";
import { useState } from "react";
import {
  createComment,
  deleteComment,
} from "../../../redux/features/commentSlice";

function PostCard({ post, comments, showComments, user, userPost }) {
  const [commentBody, setCommentBody] = useState("");
  const getUsernameFromEmail = (email) => {
    return email.split("@")[0];
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <img
          src={`https://source.unsplash.com/random/30×${post.userId}`}
          className={styles.userAvatar}
          alt="Avatar"
        />
        <p>{user.name}</p>
        {userPost && (
          <AiOutlineDelete
            className={styles.deleteIcon}
            onClick={() => dispatch(deletePost(post.id))}
          />
        )}
      </div>
      <div
        className={styles.pointer}
        onClick={() => navigate(`/post/${post.id}`)}
      >
        <p>{post.body}</p>
      </div>
      <div className={styles.postIcons}>
        <AiOutlineHeart />
        <FaRegComment />
        <BsBookmark />
      </div>
      <div className={styles.commentSection}>
        <img
          src="/Assets/user_avatar.png"
          className={styles.userAvatar}
          alt="Avatar"
        />
        <input
          type="text"
          className={styles.commentInput}
          placeholder="Write a comment"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <div className={styles.addComment}>
          <BiSend
            onClick={() =>
              dispatch(createComment({ id: post.id, commentBody }))
            }
          />
        </div>
      </div>
      <div>
        {showComments &&
          comments.map((comment) => {
            return (
              <div className={styles.postedComment}>
                <div>
                  <p className={styles.commentedUsername}>
                    {getUsernameFromEmail(comment.email)}
                  </p>
                  <p className={styles.commentedUserId}>
                    @{getUsernameFromEmail(comment.email)}
                  </p>
                </div>
                <p className={styles.postedCommentBody}>{comment.body}</p>
                {userPost && (
                  <AiOutlineDelete
                    onClick={() => dispatch(deleteComment(comment.id))}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
export { PostCard };
