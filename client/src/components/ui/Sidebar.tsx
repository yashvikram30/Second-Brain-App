import Twitter from "../../icons/Twitter";
import Youtube from "../../icons/Youtube";
import Sidebaritem from "./Sidebaritem";

const Sidebar = () => {
  return (
    <div className="left-0 top-0 fixed bg-white max-w-96 border-r min-w-72 h-screen border-gray-300 p-8 flex flex-col text-gray-700">
      <div className="mb-4"> Brainly</div>
      <Sidebaritem icon={<Twitter size="lg" />} title="Tweets" />
      <Sidebaritem icon={<Youtube size="lg" />} title="Videos" />
    </div>
  );
};

export default Sidebar;
