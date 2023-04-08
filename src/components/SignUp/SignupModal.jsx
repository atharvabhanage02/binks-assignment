import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signup } from "../../services/signup";
import styles from "../Login/loginModal.module.css";
function SignupModal() {
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = async () => {
    setError("");
    try {
      await signup(auth, signUpCredentials.email, signUpCredentials.password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginModal}>
        <div className={styles.userLoginCredentials}>
          <h1>SignUp</h1>
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
          <button className={styles.loginBtn} onClick={() => handleSignUp()}>
            Signup
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <p>
          Already have a account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export { SignupModal };
