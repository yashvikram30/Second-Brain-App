import CreateContentModel from "../components/CreateContentModel";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Sidebar from "../components/ui/Sidebar";
import { Plus } from "../icons/Plus";
import Share from "../icons/Share";
import { useState } from "react";

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel open={open} onClose={() => setOpen(false)} />
        <div className="my-2 flex justify-end w-full gap-5">
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

        <div className="flex gap-2">
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
