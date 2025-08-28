import React from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Grid3X3, 
  User,
  FolderOpen,
  FileText,
  BookOpen,
  Building,
  Share2,
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ 
  sidebarCollapsed, 
  setSidebarCollapsed, 
  currentPage, 
  setCurrentPage, 
  dropdowns, 
  setDropdowns, 
  expandedSections, 
  setExpandedSections 
}) => {
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarItems = [
    {
      section: 'favorites',
      title: 'Favorites',
      items: [
        { id: 'overview', name: 'Overview', icon: Grid3X3, page: 'overview' }
      ]
    },
    {
      section: 'recently',
      title: 'Recently',
      items: []
    },
    {
      section: 'dashboards',
      title: 'Dashboards',
      items: [
        { id: 'default', name: 'Default', icon: Grid3X3, page: 'dashboard', active: true },
        { id: 'ecommerce', name: 'eCommerce', icon: Building, page: 'ecommerce' },
        { id: 'projects', name: 'Projects', icon: FolderOpen, page: 'projects' },
        { id: 'courses', name: 'Online Courses', icon: BookOpen, page: 'courses' }
      ]
    },
    {
      section: 'pages',
      title: 'Pages',
      items: [
        { id: 'user-profile', name: 'User Profile', icon: User, page: 'profile',
          subitems: [
            { id: 'overview-sub', name: 'Overview', page: 'profile-overview' },
            { id: 'projects-sub', name: 'Projects', page: 'profile-projects' },
            { id: 'campaigns', name: 'Campaigns', page: 'campaigns' },
            { id: 'documents', name: 'Documents', page: 'documents' },
            { id: 'followers', name: 'Followers', page: 'followers' }
          ]
        },
        { id: 'account', name: 'Account', icon: Settings, page: 'account' },
        { id: 'corporate', name: 'Corporate', icon: Building, page: 'corporate' },
        { id: 'blog', name: 'Blog', icon: FileText, page: 'blog' },
        { id: 'social', name: 'Social', icon: Share2, page: 'social' }
      ]
    }
  ];

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-50'} flex flex-col`}>
 
      <div className="p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            {!sidebarCollapsed && <span className="text-xl font-bold text-gray-900">ByeWind</span>}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>
      </div>

 
      <div className="flex-1 overflow-y-auto py-4">
        {sidebarItems.map((section) => (
          <div key={section.section} className="mb-6">
            {!sidebarCollapsed && (
              <button
                onClick={() => toggleSection(section.section)}
                className="w-full px-4 flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 hover:text-gray-700"
              >
                <span>{section.title}</span>
                {section.items.length > 0 && (
                  expandedSections[section.section] ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>
            )}
            
            {(sidebarCollapsed || expandedSections[section.section]) && (
              <div className="space-y-1 px-2">
                {section.items.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        setCurrentPage(item.page);
                        if (item.subitems) {
                          setDropdowns(prev => ({
                            ...prev,
                            [item.id]: !prev[item.id]
                          }));
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        currentPage === item.page
                          ? 'bg-gray-100 text-gray-700  border-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </div>
                      {!sidebarCollapsed && item.subitems && (
                        <ChevronRight className={`w-4 h-4 transition-transform ${dropdowns[item.id] ? 'rotate-90' : ''}`} />
                      )}
                    </button>
                    
                    {!sidebarCollapsed && item.subitems && dropdowns[item.id] && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.subitems.map((subitem) => (
                          <button
                            key={subitem.id}
                            onClick={() => setCurrentPage(subitem.page)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                              currentPage === subitem.page
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                          >
                            {subitem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;