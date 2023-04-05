import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FeedPage } from "./Pages/Feed/FeedPage";
import { ProfilePage } from "./Pages/Profile/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
