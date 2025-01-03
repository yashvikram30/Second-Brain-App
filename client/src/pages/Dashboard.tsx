import { useEffect, useState } from "react";
import CreateContentModel from "../components/CreateContentModel";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Sidebar from "../components/ui/Sidebar";
import { Plus } from "../icons/Plus";
import Share from "../icons/Share";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  // State management
  const [modalOpen, setModalOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const { contents, refresh } = useContent();

  // Refresh content when modal state changes
  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div className="flex">
      <Sidebar
        isExpanded={isSidebarExpanded}
        onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />

      <div
        className={`
          p-4 min-h-screen bg-gray-100 flex-1
          transition-all duration-300 ease-in-out
          ${isSidebarExpanded ? "ml-64" : "ml-16"}
        `}
      >
        {/* Content creation modal */}
        <CreateContentModel
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* Action buttons */}
        <div className="my-2 flex flex-wrap justify-end w-full gap-3 sm:gap-5">
          <Button
            variant="primary"
            text="Add Content"
            size="sm"
            startIcon={<Plus size="sm" />}
            onClick={() => setModalOpen(true)}
          />

          <Button
            variant="secondary"
            text="Share Brain"
            size="sm"
            startIcon={<Share size="sm" />}
          />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {contents.map((content) => (
            <Card
              key={content.link}
              title={content.title}
              link={content.link}
              type={content.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
