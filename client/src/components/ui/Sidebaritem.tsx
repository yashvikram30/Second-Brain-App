import React from "react";

interface SidebaritemProps {
  icon: React.ReactNode;
  text: string;
  isExpanded: boolean;
  onClick? : ()=> void;
}

const Sidebaritem: React.FC<SidebaritemProps> = ({ icon, text, isExpanded, onClick }) => {
  return (
    <div className="flex justify-between p-4 hover:bg-gray-200 rounded-md transition-all duration-100" onClick = {onClick}>
      <div>{icon}</div>
      <div>{isExpanded && <span className="ml-4">{text}</span>}</div>
    </div>
  );
};

export default Sidebaritem;