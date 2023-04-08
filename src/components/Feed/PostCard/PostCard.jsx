import styles from "./postCard.module.css";
import { BsBookmark } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  likePost,
  removeLike,
  updatePost,
} from "../../../redux/features/postSlice";
import { useState } from "react";
import {
  createComment,
  deleteComment,
} from "../../../redux/features/commentSlice";

function PostCard({ post, comments, showComments, user, userPost }) {
  const [commentBody, setCommentBody] = useState("");
  const posts = useSelector((state) => state.posts.myPosts);
  const likedPosts = useSelector((state) => state.posts.likedPosts);
  const [edit, setEdit] = useState(false);
  const getUsernameFromEmail = (email) => {
    return email.split("@")[0];
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user);
  const currentUserComments =
    comments &&
    comments.filter((comment) => comment.userName === userName.displayName);
  const [editedCommentBody, setEditedCommentBody] = useState("");
  const handleEdit = (id) => {
    setEdit(true);
    const currentPost = posts.find((post) => post.id == id);
    setEditedCommentBody(currentPost.body);
  };
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        {userPost ? (
          <img
            src="./Assets/user_avatar.png"
            className={styles.userAvatar}
            alt="Avatar"
          />
        ) : (
          <img
            src={`https://source.unsplash.com/random/30×${post.userId}`}
            className={styles.userAvatar}
            alt="Avatar"
          />
        )}
        <p>{user.name}</p>
        {userPost && (
          <AiOutlineDelete
            className={styles.deleteIcon}
            onClick={() => dispatch(deletePost(post.id))}
          />
        )}
        {userPost && (
          <RiEditCircleFill
            className={styles.editIcon}
            onClick={() => handleEdit(post.id)}
          />
        )}
      </div>
      <div
        className={styles.pointer}
        onClick={() => navigate(`/post/${post.id}`)}
      >
        <p>{post.body}</p>
      </div>
      {edit && (
        <div className={styles.updatePostSection}>
          <input
            type="text"
            className={styles.updatePostInput}
            value={editedCommentBody}
            onChange={(e) => setEditedCommentBody(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                updatePost({ id: post.id, postBody: editedCommentBody })
              );
              setEdit(false);
            }}
            className={styles.updatePostButton}
          >
            Update Post
          </button>
        </div>
      )}
      <div className={styles.postIcons}>
        {likedPosts.includes(post) ? (
          <FcLike onClick={() => dispatch(removeLike(post.id))} />
        ) : (
          <AiOutlineHeart onClick={() => dispatch(likePost(post))} />
        )}
        <FaRegComment onClick={() => navigate(`/post/${post.id}`)} />
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
          onClick={() => navigate(`/post/${post.id}`)}
        />
        <div
          className={styles.addComment}
          onClick={() => {
            dispatch(
              createComment({
                id: post.id,
                name: userName && userName.displayName,
                email: "",
                commentBody,
              })
            );
            setCommentBody("");
          }}
        >
          <BiSend />
        </div>
      </div>
      <div>
        {showComments &&
          comments.map((comment) => {
            return (
              <div className={styles.postedComment}>
                <div>
                  <p className={styles.commentedUsername}>
                    {comment.userName
                      ? comment.userName
                      : getUsernameFromEmail(comment.email)}
                  </p>
                  <p className={styles.commentedUserId}>
                    @
                    {comment.userName
                      ? comment.userName
                      : getUsernameFromEmail(comment.email)}
                  </p>
                </div>
                <p className={styles.postedCommentBody}>{comment.body}</p>
                {currentUserComments.includes(comment) && (
                  <AiOutlineDelete
                    className={styles.deleteCommentIcon}
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
