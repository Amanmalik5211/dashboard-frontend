import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import ContactsTable from "../components/ContactsTable";
import Header from "../components/Header";

const stats = [
  { label: "Connections", value: "427,296", change: "+12%", positive: true },
  { label: "Contacts", value: "37,429", change: "+42%", positive: true },
  { label: "Value", value: "$82,439", change: "+37%", positive: true },
  { label: "Referrals", value: "3,497", change: "-17%", positive: false },
];

const ContactsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen w-screen flex">
{sidebarOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}

<div
  className={`h-full w-[250px] bg-gray-950 border-r border-gray-800 z-50 transition-transform duration-300
    fixed top-0 left-0 transform ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 lg:relative`}
>
  <Sidebar />
</div>



      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4 sm:p-6 space-y-6 overflow-y-auto">
          <Header />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <StatsCard key={i} {...s} />
            ))}
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <ContactsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactsPage;
