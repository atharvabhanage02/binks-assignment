import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FeedPage } from "./Pages/Feed/FeedPage";
import { ProfilePage } from "./Pages/Profile/ProfilePage";
import { SinglePostPage } from "./Pages/SinglePost/SinglePostPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SignupPage } from "./Pages/SignUp/SignupPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./redux/features/auth";
import { RequireAuth } from "./components/ProtectedRoute/RequireAuth";
import { LikedPosts } from "./Pages/LikedPosts/LikedPosts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(getUserDetails(currentUser));
    });
    return () => {
      unsubscibe();
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <FeedPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <RequireAuth>
              <SinglePostPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/likes"
          element={
            <RequireAuth>
              <LikedPosts />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
