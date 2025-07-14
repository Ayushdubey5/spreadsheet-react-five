import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { TaskRow } from '../types/spreadsheet';

interface MainContentProps {
  tasks: TaskRow[];
}

const MainContent: React.FC<MainContentProps> = ({ tasks }) => {
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>({ row: 5, col: 5 }); // Default selection on row 5, URL column

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In-process': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Need to start': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Complete': return 'bg-green-100 text-green-800 border-green-300';
      case 'Blocked': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 font-medium';
      case 'Medium': return 'text-orange-600 font-medium';
      case 'Low': return 'text-blue-600 font-medium';
      default: return 'text-gray-600';
    }
  };

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const getCellContent = (task: TaskRow, colIndex: number) => {
    switch (colIndex) {
      case 0: return task.jobRequest;
      case 1: return task.submitted;
      case 2: return task.status;
      case 3: return task.submitter;
      case 4: return task.url;
      case 5: return task.assigned;
      case 6: return task.priority;
      case 7: return task.dueDate;
      case 8: return task.estValue;
      default: return '';
    }
  };

  const isSelected = (row: number, col: number) => {
    return selectedCell?.row === row && selectedCell?.col === col;
  };

  return (
    <div className="flex-1 bg-white">
      {/* Sheet tabs */}
      <div className="flex border-b border-gray-300">
        <div className="flex items-center px-3 py-2 bg-white border-r border-gray-300">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span className="text-xs font-medium text-gray-900">Q3 Financial Overview</span>
            <div className="w-3 h-3 bg-orange-400 rounded-full text-xs text-white flex items-center justify-center">!</div>
          </div>
        </div>
        <div className="flex items-center px-3 py-2 text-xs text-gray-600 bg-gray-50">
          <div className="w-3 h-3 bg-gray-400 rounded-sm mr-2"></div>
          Job Request
        </div>
      </div>

      {/* Action sections */}
      <div className="flex border-b border-gray-300">
        <div className="flex-1 bg-green-100 px-3 py-2 text-center border-r border-gray-300">
          <span className="text-sm font-bold text-green-800">ABC</span>
        </div>
        <div className="flex-1 bg-purple-100 px-3 py-2 text-center border-r border-gray-300">
          <span className="text-xs font-medium text-purple-800">Answer a question</span>
        </div>
        <div className="flex-1 bg-orange-100 px-3 py-2 text-center border-r border-gray-300">
          <span className="text-xs font-medium text-orange-800">Extract</span>
        </div>
        <div className="w-8 bg-gray-50 flex items-center justify-center border-r border-gray-300">
          <Plus className="w-3 h-3 text-gray-400" />
        </div>
      </div>

      {/* Excel-style table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-1 py-1 text-left text-xs font-normal text-gray-600 w-6 bg-gray-100">#</th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 min-w-64 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span>Job Request</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-20 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span>Submitted</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-20 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Status</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-24 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span>Submitter</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-24 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span>URL</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-24 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span>Assigned</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-16">Priority</th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-20">Due Date</th>
              <th className="border border-gray-300 px-2 py-1 text-left text-xs font-normal text-gray-600 w-20">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, taskIndex) => (
              <tr key={task.id} className="hover:bg-blue-50">
                <td 
                  className={`border border-gray-300 px-1 py-1 text-xs text-gray-600 bg-gray-100 ${isSelected(taskIndex, -1) ? 'bg-blue-200' : ''}`}
                  onClick={() => handleCellClick(taskIndex, -1)}
                >
                  {task.id}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 0) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 0)}
                >
                  {task.jobRequest}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 1) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 1)}
                >
                  {task.submitted}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 cursor-cell ${isSelected(taskIndex, 2) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 2)}
                >
                  <span className={`inline-flex px-1 py-0.5 text-xs font-medium rounded border ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 3) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 3)}
                >
                  {task.submitter}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-blue-600 hover:text-blue-800 cursor-cell ${isSelected(taskIndex, 4) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 4)}
                >
                  {task.url}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 5) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 5)}
                >
                  {task.assigned}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 cursor-cell ${isSelected(taskIndex, 6) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 6)}
                >
                  <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 7) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 7)}
                >
                  {task.dueDate}
                </td>
                <td 
                  className={`border border-gray-300 px-2 py-1 text-xs text-gray-900 cursor-cell ${isSelected(taskIndex, 8) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                  onClick={() => handleCellClick(taskIndex, 8)}
                >
                  {task.estValue} ₹
                </td>
              </tr>
            ))}
            {/* Empty rows with Excel-style grid */}
            {Array.from({ length: 20 }, (_, i) => (
              <tr key={`empty-${i}`} className="hover:bg-blue-50">
                <td 
                  className={`border border-gray-300 px-1 py-1 text-xs text-gray-500 bg-gray-100 cursor-cell ${isSelected(tasks.length + i, -1) ? 'bg-blue-200' : ''}`}
                  onClick={() => handleCellClick(tasks.length + i, -1)}
                >
                  {tasks.length + i + 1}
                </td>
                {Array.from({ length: 9 }, (_, colIndex) => (
                  <td 
                    key={colIndex}
                    className={`border border-gray-300 px-2 py-1 h-5 cursor-cell ${isSelected(tasks.length + i, colIndex) ? 'bg-blue-200 ring-2 ring-blue-500' : ''}`}
                    onClick={() => handleCellClick(tasks.length + i, colIndex)}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;