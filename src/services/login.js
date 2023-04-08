import { signInWithEmailAndPassword } from "firebase/auth";

const login = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export { login };
