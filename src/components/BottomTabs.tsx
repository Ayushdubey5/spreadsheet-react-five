import React from 'react';
import { Plus } from 'lucide-react';
import { TabItem } from '../types/spreadsheet';

interface BottomTabsProps {
  tabs: TabItem[];
  onTabSelect: (tabId: string) => void;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ tabs, onTabSelect }) => {
  return (
    <div className="bg-gray-50 border-t border-gray-300 px-3 py-1">
      <div className="flex items-center space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
            className={`px-3 py-1 text-xs font-medium rounded-t transition-colors ${
              tab.isActive
                ? 'bg-white text-gray-900 border-t border-l border-r border-gray-300 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
        
        <button
          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors ml-1"
          title="Add new tab"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;