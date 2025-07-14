import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const TopNavigation: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-300 px-3 py-2">
      <div className="flex items-center justify-between">
        {/* Left side - Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-gray-600">
          <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
          <span>Workspace</span>
          <span>›</span>
          <span>Folder 2</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Spreadsheet 3</span>
        </div>

        {/* Right side - Search and user */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-7 pr-3 py-1 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-green-500 focus:border-transparent w-48"
            />
          </div>
          
          <div className="relative">
            <Bell className="w-4 h-4 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-medium">2</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-700">JD</span>
            </div>
            <div className="text-xs">
              <div className="font-medium text-gray-900">John Doe</div>
              <div className="text-gray-500">john.doe...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;