import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileContainer } from "../../components/Profile/ProfileContainer";
import { Sidebar } from "../../components/Sidebar/Sidebar";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <ProfileContainer />
      </div>
    </div>
  );
}
export { ProfilePage };
