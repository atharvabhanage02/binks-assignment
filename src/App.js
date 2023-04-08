import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FeedPage } from "./Pages/Feed/FeedPage";
import { ProfilePage } from "./Pages/Profile/ProfilePage";
import { SinglePostPage } from "./Pages/SinglePost/SinglePostPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SignupPage } from "./Pages/SignUp/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
