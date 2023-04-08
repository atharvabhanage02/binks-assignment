import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleSignIn = (auth) => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};
export { googleSignIn };
