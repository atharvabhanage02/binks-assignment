import { useState } from "react";
import styles from "./loginModal.module.css";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { login } from "../../services/login";

function LoginModal() {
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    setError("");
    try {
      await login(auth, signUpCredentials.email, signUpCredentials.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginModal}>
        <div className={styles.userLoginCredentials}>
          <h1>Login</h1>
          <div className={styles.inputSection}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.credentialsInput}
              value={signUpCredentials.email}
              onChange={(e) =>
                setSignUpCredentials({
                  ...signUpCredentials,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              className={styles.credentialsInput}
              value={signUpCredentials.password}
              onChange={(e) =>
                setSignUpCredentials({
                  ...signUpCredentials,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button className={styles.loginBtn} onClick={() => handleLogin()}>
            Login
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <GoogleButton
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
        <p>
          Don't have a account ? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
export { LoginModal };
