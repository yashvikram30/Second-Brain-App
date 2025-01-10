import Twitter from "../../icons/Twitter";
import Youtube from "../../icons/Youtube";
import Button from "./Button";
import Sidebaritem from "./Sidebaritem";
import { Menu } from "lucide-react";
// import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle }) => {

  // const navigate = useNavigate();

  // function logout(){
  //   // setup and remove the user here
  //   localStorage.removeItem('token');
  //   navigate('/dashboard');
  // }

  return (
    <aside 
      className={`
        fixed left-0 top-0 h-screen bg-white border-r border-gray-200
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-16'}
      `}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={onToggle}>
          <Menu size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Sidebaritem icon={<Twitter size="md" />} text="Twitter" isExpanded={isExpanded} />
        <Sidebaritem icon={<Youtube size="md" />} text="Youtube" isExpanded={isExpanded} />
      </div>
      <div>
        <Button variant="primary" size="md" text="logout" />
      </div>
    </aside>
  );
};

export default Sidebar;