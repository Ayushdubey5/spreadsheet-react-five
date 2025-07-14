import { useState, useCallback } from 'react';
import { SpreadsheetData, Cell } from '../types/spreadsheet';
import { dummySpreadsheetData } from '../data/dummyData';

export const useSpreadsheet = () => {
  const [data, setData] = useState<SpreadsheetData>(dummySpreadsheetData);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);

  const updateCell = useCallback((row: number, col: number, value: string) => {
    console.log(`Updating cell [${row}, ${col}] with value: "${value}"`);
    
    setData(prevData => ({
      ...prevData,
      sheets: prevData.sheets.map(sheet =>
        sheet.id === prevData.activeSheetId
          ? {
              ...sheet,
              data: sheet.data.map((rowData, rowIndex) =>
                rowIndex === row
                  ? rowData.map((cell, colIndex) =>
                      colIndex === col ? { ...cell, value } : cell
                    )
                  : rowData
              )
            }
          : sheet
      )
    }));
  }, []);

  const selectCell = useCallback((row: number, col: number) => {
    console.log(`Selected cell: [${row}, ${col}]`);
    setSelectedCell({ row, col });
  }, []);

  const startEditing = useCallback((row: number, col: number) => {
    console.log(`Started editing cell: [${row}, ${col}]`);
    setEditingCell({ row, col });
  }, []);

  const stopEditing = useCallback(() => {
    console.log('Stopped editing cell');
    setEditingCell(null);
  }, []);

  const switchSheet = useCallback((sheetId: string) => {
    console.log(`Switching to sheet: ${sheetId}`);
    setData(prevData => ({
      ...prevData,
      activeSheetId: sheetId,
      sheets: prevData.sheets.map(sheet => ({
        ...sheet,
        isActive: sheet.id === sheetId
      }))
    }));
    setSelectedCell(null);
    setEditingCell(null);
  }, []);

  const activeSheet = data.sheets.find(sheet => sheet.id === data.activeSheetId);

  return {
    data,
    activeSheet,
    selectedCell,
    editingCell,
    updateCell,
    selectCell,
    startEditing,
    stopEditing,
    switchSheet
  };
};