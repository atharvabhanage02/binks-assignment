import styles from "./userProfileHeader.module.css";

function UserProfileHeader() {
  return (
    <div>
      <div className={styles.userProfileHeader}>
        <img
          src="./Assets/profile-header.jpg"
          className={styles.profileHeaderImg}
          alt="User Profile Header"
        />
        <div className={styles.userAvatarSection}>
          <img
            src="./Assets/user_avatar.png"
            className={styles.userAvatar}
            alt="User Profile"
          />
          <span className={styles.userName}>Atharva Bhanage</span>
        </div>
      </div>
      <div className={styles.userBioSection}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium adipisci at. Cum exercitationem, explicabo dolor velit
          facere deserunt vero eius ducimus quidem nemo fugit possimus dicta.
          Tempora, natus dolores!
        </p>
        <button className={styles.editProfileBtn}>Edit Proifile</button>
      </div>
    </div>
  );
}
export { UserProfileHeader };
