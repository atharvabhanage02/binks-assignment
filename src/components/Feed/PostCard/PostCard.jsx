import styles from "./postCard.module.css";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function PostCard({ post, comments, showComments }) {
  const getUsernameFromEmail = (email) => {
    return email.split("@")[0];
  };
  const navigate = useNavigate();
  return (
    <div
      className={styles.postCard}
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <div className={styles.postHeader}>
        <img
          src={`https://source.unsplash.com/random/30×${post.userId}`}
          className={styles.userAvatar}
          alt="Avatar"
        />
        <p>Virat Kohli</p>
      </div>
      <div className={styles.pointer}>
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
        />
        <div className={styles.addComment}>
          <BiSend />
        </div>
      </div>
      <div>
        {showComments &&
          comments.slice(0, 2).map((comment) => {
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
              </div>
            );
          })}
      </div>
    </div>
  );
}
export { PostCard };
