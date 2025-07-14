import React, { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import ActionToolbar from './components/ActionToolbar';
import MainContent from './components/MainContent';
import BottomTabs from './components/BottomTabs';
import { taskData, bottomTabs } from './data/dummyData';
import { TabItem } from './types/spreadsheet';

function App() {
  const [tabs, setTabs] = useState<TabItem[]>(bottomTabs);

  const handleTabSelect = (tabId: string) => {
    setTabs(prev => 
      prev.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <TopNavigation />
      <ActionToolbar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainContent tasks={taskData} />
        <BottomTabs tabs={tabs} onTabSelect={handleTabSelect} />
      </div>
    </div>
  );
}

export default App;