import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { SinglePostContainer } from "../../components/SinglePost/SinglePostContainer";

function SinglePostPage() {
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <SinglePostContainer />
      </div>
    </div>
  );
}
export { SinglePostPage };
