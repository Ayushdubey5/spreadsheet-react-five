import React from 'react';
import { Search, Plus, Share2, Download, Settings } from 'lucide-react';

interface HeaderProps {
  onAction: (action: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAction }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and tabs */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-gray-900">Spreadsheet</span>
          </div>
          
          <nav className="flex space-x-6">
            <button 
              onClick={() => onAction('home')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => onAction('templates')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Templates
            </button>
            <button 
              onClick={() => onAction('recent')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Recent
            </button>
          </nav>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search spreadsheets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => {
                console.log(`Search query: ${e.target.value}`);
                onAction(`search:${e.target.value}`);
              }}
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onAction('add')}
            className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </button>
          
          <button
            onClick={() => onAction('share')}
            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onAction('download')}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={() => onAction('settings')}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;