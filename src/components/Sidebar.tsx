import React from 'react';
import { ChevronRight, FileText, BarChart3 } from 'lucide-react';
import { TableItem } from '../types/spreadsheet';

interface SidebarProps {
  tables: TableItem[];
  onTableSelect: (tableId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tables, onTableSelect }) => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-full flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Tables & Views
        </h2>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {tables.map((table) => (
            <button
              key={table.id}
              onClick={() => {
                console.log(`Selected table: ${table.name} (${table.type})`);
                onTableSelect(table.id);
              }}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                table.isActive
                  ? 'bg-blue-100 text-blue-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center flex-1">
                {table.type === 'table' ? (
                  <FileText className="w-4 h-4 mr-3 text-gray-500" />
                ) : (
                  <BarChart3 className="w-4 h-4 mr-3 text-gray-500" />
                )}
                <span className="truncate">{table.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Add New Section */}
        <div className="p-4 border-t border-gray-200 mt-4">
          <button
            onClick={() => {
              console.log('Create new table clicked');
            }}
            className="w-full px-3 py-2 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
          >
            + Create New Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;