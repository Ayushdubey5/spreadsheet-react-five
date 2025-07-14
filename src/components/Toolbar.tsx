import React from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Percent, DollarSign } from 'lucide-react';

interface ToolbarProps {
  onAction: (action: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAction }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center space-x-1">
        {/* Formatting buttons */}
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-3 mr-3">
          <button
            onClick={() => onAction('bold')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => onAction('italic')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => onAction('underline')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Underline"
          >
            <Underline className="w-4 h-4" />
          </button>
        </div>

        {/* Alignment buttons */}
        <div className="flex items-center space-x-1 border-r border-gray-300 pr-3 mr-3">
          <button
            onClick={() => onAction('align-left')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onAction('align-center')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            onClick={() => onAction('align-right')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>
        </div>

        {/* Number formatting */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => onAction('percentage')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Percentage"
          >
            <Percent className="w-4 h-4" />
          </button>
          <button
            onClick={() => onAction('currency')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            title="Currency"
          >
            <DollarSign className="w-4 h-4" />
          </button>
        </div>

        {/* Font size dropdown */}
        <select
          onChange={(e) => onAction(`font-size:${e.target.value}`)}
          className="ml-3 border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12" selected>12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Toolbar;