import React, { useState, useRef, useEffect } from 'react';
import { Cell as CellType } from '../types/spreadsheet';

interface CellProps {
  cell: CellType;
  isSelected: boolean;
  isEditing: boolean;
  onSelect: () => void;
  onStartEdit: () => void;
  onStopEdit: () => void;
  onValueChange: (value: string) => void;
}

const Cell: React.FC<CellProps> = ({
  cell,
  isSelected,
  isEditing,
  onSelect,
  onStartEdit,
  onStopEdit,
  onValueChange
}) => {
  const [inputValue, setInputValue] = useState(cell.value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    setInputValue(cell.value);
  }, [cell.value]);

  const handleClick = () => {
    onSelect();
  };

  const handleDoubleClick = () => {
    onStartEdit();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onValueChange(inputValue);
      onStopEdit();
    } else if (e.key === 'Escape') {
      setInputValue(cell.value);
      onStopEdit();
    }
  };

  const handleBlur = () => {
    onValueChange(inputValue);
    onStopEdit();
  };

  return (
    <div
      className={`relative border-r border-b border-gray-200 h-8 min-w-24 max-w-48 flex items-center cursor-cell group hover:bg-blue-50 ${
        isSelected ? 'ring-2 ring-blue-500 bg-blue-50 z-10' : 'bg-white'
      }`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="w-full h-full px-2 text-sm border-none outline-none bg-white"
        />
      ) : (
        <div className="w-full h-full px-2 flex items-center text-sm text-gray-900 truncate">
          {cell.value || ''}
        </div>
      )}
    </div>
  );
};

export default Cell;