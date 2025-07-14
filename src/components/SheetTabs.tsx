import React from 'react';
import { Plus } from 'lucide-react';
import { Sheet } from '../types/spreadsheet';

interface SheetTabsProps {
  sheets: Sheet[];
  onSheetSelect: (sheetId: string) => void;
  onAddSheet: () => void;
}

const SheetTabs: React.FC<SheetTabsProps> = ({ sheets, onSheetSelect, onAddSheet }) => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center space-x-1">
      {sheets.map((sheet) => (
        <button
          key={sheet.id}
          onClick={() => {
            console.log(`Switched to sheet: ${sheet.name}`);
            onSheetSelect(sheet.id);
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            sheet.isActive
              ? 'bg-white text-gray-900 border-t border-l border-r border-gray-200'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {sheet.name}
        </button>
      ))}
      
      <button
        onClick={() => {
          console.log('Add new sheet clicked');
          onAddSheet();
        }}
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        title="Add new sheet"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SheetTabs;