import React from "react";

interface SidebaritemProps {
  icon: React.ReactNode;
  text: string;
  isExpanded: boolean;
}

const Sidebaritem: React.FC<SidebaritemProps> = ({ icon, text, isExpanded }) => {
  return (
    <div className="flex items-center p-4">
      {icon}
      {isExpanded && <span className="ml-4">{text}</span>}
    </div>
  );
};

export default Sidebaritem;