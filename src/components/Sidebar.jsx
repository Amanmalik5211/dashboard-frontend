import React from "react";
import {
  Home,
  Users,
  BarChart,
  Settings,
  LogOut,
  HelpCircle,
  Layers,
  Wrench,
} from "lucide-react";
import TeamSwitcher from "./TeamSwitcher"; 
import SearchBar from "./SearchBar"; 
const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Insights", icon: <BarChart size={18} /> },
    { name: "Contacts", icon: <Users size={18} />, active: true },
    { name: "Setting", icon: <Wrench size={18} /> },
    { name: "Integration", icon: <Layers size={18} /> },
    { name: "Layouts", icon: <Layers size={18} /> },
    { name: "Reports", icon: <BarChart size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen  bg-gray-950 border-r border-gray-800 flex flex-col">

      <TeamSwitcher />

      

      <div className="border-t border-gray-100">
        <div className="p-3 flex-grow mt-3"><SearchBar/></div>
      <span className="block px-3 py-2 text-base mt-3 text-gray-500">SECTIONS</span>
      <nav className="flex-1 p-2 space-y-1">
        {menu.map((item, i) => (
          <div
            key={i}
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer text-sm ${
              item.active
                ? "bg-green-700 text-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </div>
          
        ))}
      </nav>

        <span className="block px-3 py-2 text-base mt-3 text-gray-500">OTHER</span>
       <div className="flex items-center px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer">
          <Settings size={18} className="mr-2" /> Settings
        </div>
        <div className="flex items-center px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer">
          <HelpCircle size={18} className="mr-2" /> Help Center
        </div>
      </div>

      
      <div className="p-2 border-t border-gray-800 mt-16">
        <div className="flex items-center px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer">
          <LogOut size={18} className="mr-2" /> Sign Out
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
