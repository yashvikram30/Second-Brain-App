import { useState } from "react";
import CreateContentModel from "../components/CreateContentModel";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Sidebar from "../components/ui/Sidebar";
import { Plus } from "../icons/Plus";
import Share from "../icons/Share";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex">
      <Sidebar isExpanded={isSidebarExpanded} onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} />
      
      <div 
        className={`
          p-4 min-h-screen bg-gray-100 flex-1
          transition-all duration-300 ease-in-out
          ${isSidebarExpanded ? 'ml-64' : 'ml-16'}
        `}
      >
        <CreateContentModel open={open} onClose={() => setOpen(false)} />
        
        {/* Buttons Container */}
        <div className="my-2 flex flex-wrap justify-end w-full gap-3 sm:gap-5">
          <Button
            variant="primary"
            text="Add Content"
            size="sm"
            startIcon={<Plus size="sm" />}
            onClick={() => setOpen(true)}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            size="sm"
            startIcon={<Share size="sm" />}
          />
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card
            title="youtube"
            link="https://www.youtube.com/watch?v=scg3GkMpoKI"
            type="youtube"
          />
          <Card
            title="twitter"
            link="https://x.com/narendramodi/status/1872328464658808947"
            type="twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;