import { useEffect, useState } from "react";
import CreateContentModel from "../components/CreateContentModel";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Sidebar from "../components/ui/Sidebar";
import { Plus } from "../icons/Plus";
import Share from "../icons/Share";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  // we call the refresh and contents from the useContent hook, whose work is to fetch all the data from the backend
  const { contents, refresh } = useContent();
  const navigate = useNavigate();

  // Refresh content when modal state changes
  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  if (!localStorage.getItem("token")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>
        <button
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    );
  }

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
          {contents.map((c) => (
            <Card
              contentId = {c.contentId}
              key={c.link}
              title={c.title}
              link={c.link}
              type={c.type}
              content={c.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
