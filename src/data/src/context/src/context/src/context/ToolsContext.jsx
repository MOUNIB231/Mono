Enterimport { createContext, useContext, useState } from 'react';
import { toolsData } from '../data/tools';

const ToolsContext = createContext();

export function ToolsProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.nameAr.includes(searchTerm) ||
                          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.desc.includes(searchTerm);
    const matchesCat = category === 'all' || tool.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <ToolsContext.Provider value={{ filteredTools, searchTerm, setSearchTerm, category, setCategory }}>
      {children}
    </ToolsContext.Provider>
  );
}

export const useTools = () => useContext(ToolsContext);
