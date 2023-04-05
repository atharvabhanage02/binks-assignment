import { Feed } from "../../components/Feed/Feed";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

function FeedPage() {
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
export { FeedPage };
