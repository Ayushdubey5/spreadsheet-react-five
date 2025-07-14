import React, { useCallback } from 'react';
import { useSpreadsheet } from '../hooks/useSpreadsheet';
import Cell from './Cell';

const Spreadsheet: React.FC = () => {
  const {
    activeSheet,
    selectedCell,
    editingCell,
    selectCell,
    startEditing,
    stopEditing,
    updateCell
  } = useSpreadsheet();

  const handleCellSelect = useCallback((row: number, col: number) => {
    selectCell(row, col);
  }, [selectCell]);

  const handleCellEdit = useCallback((row: number, col: number) => {
    startEditing(row, col);
  }, [startEditing]);

  const handleCellValueChange = useCallback((row: number, col: number, value: string) => {
    updateCell(row, col, value);
  }, [updateCell]);

  if (!activeSheet) {
    return <div className="flex-1 flex items-center justify-center">No sheet selected</div>;
  }

  // Generate column headers (A, B, C, ...)
  const columnHeaders = Array.from({ length: activeSheet.data[0]?.length || 15 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="relative">
        {/* Column headers */}
        <div className="sticky top-0 z-20 bg-gray-100 border-b border-gray-300 flex">
          {/* Empty cell for row header intersection */}
          <div className="w-12 h-8 border-r border-gray-300 bg-gray-200"></div>
          {columnHeaders.map((header, index) => (
            <div
              key={header}
              className="min-w-24 max-w-48 h-8 border-r border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 bg-gray-100"
            >
              {header}
            </div>
          ))}
        </div>

        {/* Spreadsheet rows */}
        {activeSheet.data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {/* Row header */}
            <div className="w-12 h-8 border-r border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 bg-gray-100 sticky left-0 z-10">
              {rowIndex + 1}
            </div>
            
            {/* Row cells */}
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                cell={cell}
                isSelected={
                  selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                }
                isEditing={
                  editingCell?.row === rowIndex && editingCell?.col === colIndex
                }
                onSelect={() => handleCellSelect(rowIndex, colIndex)}
                onStartEdit={() => handleCellEdit(rowIndex, colIndex)}
                onStopEdit={stopEditing}
                onValueChange={(value) => handleCellValueChange(rowIndex, colIndex, value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spreadsheet;