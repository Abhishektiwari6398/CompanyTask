import React from 'react';
import { 
  Search, 
  Bell, 
  Grid3X3, 
  Moon, 
  RotateCcw
} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center space-x-2">
           
              <Grid3X3 className="w-5 h-5" />
              <span className="font-medium">Dashboards</span>
           
          </div>
          
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-medium">Default</span>
        </div>

        <div className="flex items-center space-x-4">
       
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
    
          </div>

         
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;