import "./App.css";
import { Feed } from "./components/Feed/Feed";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
