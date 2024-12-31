import Twitter from "../../icons/Twitter";
import Youtube from "../../icons/Youtube";
import Sidebaritem from "./Sidebaritem";
import { Menu } from "lucide-react";

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle }) => {
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
    </aside>
  );
};

export default Sidebar;