import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import PageContent from "./PageContent";

function Dashboard() {

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

 
  const [activePage, setActivePage] = useState("dashboard");


  const [openMenus, setOpenMenus] = useState({
    dashboards: true,
    projects: false,
    userProfile: false,
    notifications: true,
  });


  const [sectionsOpen, setSectionsOpen] = useState({
    favorites: true,
    recently: true,
    pages: false,
    dashboards: true,
  });



  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <Sidebar
        sidebarCollapsed={isSidebarCollapsed}
        setSidebarCollapsed={setIsSidebarCollapsed}
        currentPage={activePage}
        setCurrentPage={setActivePage}
        dropdowns={openMenus}
        setDropdowns={setOpenMenus}
        expandedSections={sectionsOpen}
        setExpandedSections={setSectionsOpen}
      />

      
      <div className="flex flex-1 flex-col min-w-0">
        <Navbar  />

        <main className="flex-1 overflow-y-auto">
          <div className="px-6 py-6">
           
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Today</h1>
             
              </div>
            </div>

         
            <PageContent currentPage={activePage} />
          </div>
        </main>
      </div>


      <RightSidebar />
    </div>
  );
}

export default Dashboard;
