import React, { createContext, useState, ReactNode } from 'react';

interface DataContextType {
  validEmails: string[];
  inValidEmails: string[];
  updateEmails: (validEmails: string[], inValidEmails: string[]) => void;
}

const DataContext = createContext<DataContextType>({
  validEmails: [],
  inValidEmails: [],
  updateEmails: () => {},
});

interface DataProviderProps {
    children: ReactNode;
  }

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [validEmails, setvalidEmails] = useState<string[]>([]);
  const [inValidEmails, setinValidEmails] = useState<string[]>([]);

  const updateEmails = (validEmails: string[], inValidEmails: string[]) => {
    setvalidEmails(validEmails);
    setinValidEmails(inValidEmails);
  };
// 
  return (
    <DataContext.Provider value={{ validEmails: validEmails, inValidEmails: inValidEmails, updateEmails: updateEmails }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
