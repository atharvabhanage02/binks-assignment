import { signOut } from "firebase/auth";

const logout = (auth) => {
  return signOut(auth);
};
export { logout };
