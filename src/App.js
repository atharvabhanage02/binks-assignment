import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FeedPage } from "./Pages/Feed/FeedPage";
import { ProfilePage } from "./Pages/Profile/ProfilePage";
import { SinglePostPage } from "./Pages/SinglePost/SinglePostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
