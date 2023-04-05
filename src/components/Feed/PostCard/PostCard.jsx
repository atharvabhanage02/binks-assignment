import styles from "./postCard.module.css";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

function PostCard() {
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        {/* <BsPerson /> */}
        <img
          src="https://source.unsplash.com/random/30×30"
          className={styles.userAvatar}
          alt="Avatar"
        />
        <p>Virat Kohli</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vel
          sequi expedita sunt nisi quia sed necessitatibus eos, fuga nemo
          inventore modi doloremque nihil maxime qui sint itaque, nobis
          repellat.
        </p>
      </div>
      {/* <hr /> */}
      <div className={styles.postIcons}>
        <AiOutlineHeart />
        <FaRegComment />
        <BsBookmark />
        {/* <FcLike /> */}
      </div>
      {/* <hr /> */}
      <div className={styles.commentSection}>
        <img
          src="https://source.unsplash.com/random/30×30"
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
    </div>
  );
}
export { PostCard };
