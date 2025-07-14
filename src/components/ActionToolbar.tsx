import React from 'react';
import { ChevronRight, EyeOff, ArrowUpDown, Filter, Grid, Download, Upload, Share2, Plus } from 'lucide-react';

const ActionToolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-300 px-3 py-2">
      <div className="flex items-center justify-between">
        {/* Left side - Tool actions */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <span>Tool bar</span>
            <ChevronRight className="w-3 h-3" />
          </div>
          
          <div className="flex items-center space-x-1">
            <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded">
              <EyeOff className="w-3 h-3" />
              <span>Hide fields</span>
            </button>
            
            <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded">
              <ArrowUpDown className="w-3 h-3" />
              <span>Sort</span>
            </button>
            
            <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded">
              <Filter className="w-3 h-3" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded">
              <Grid className="w-3 h-3" />
              <span>Cell view</span>
            </button>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center space-x-1">
          <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 border border-gray-300 hover:bg-gray-50 rounded">
            <Download className="w-3 h-3" />
            <span>Import</span>
          </button>
          
          <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 border border-gray-300 hover:bg-gray-50 rounded">
            <Upload className="w-3 h-3" />
            <span>Export</span>
          </button>
          
          <button className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-700 border border-gray-300 hover:bg-gray-50 rounded">
            <Share2 className="w-3 h-3" />
            <span>Share</span>
          </button>
          
          <button className="flex items-center space-x-1 px-2 py-1 text-xs text-white bg-green-600 hover:bg-green-700 rounded">
            <Plus className="w-3 h-3" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionToolbar;