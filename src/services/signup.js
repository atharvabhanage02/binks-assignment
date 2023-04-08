import { createUserWithEmailAndPassword } from "firebase/auth";

const signup = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export { signup };
