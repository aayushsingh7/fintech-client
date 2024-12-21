"use client"


import { createContext, useContext, ReactNode, useState } from "react";

// Define the type for your context state
type AppContextType = {
  user: any;
  createRecord: boolean;
  recordType: string;
  setUser: (use: any) => void;
  setCreateRecord: (createRecord: boolean) => void;
  setRecordType: (createRecord: string) => void;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Object>({})
  const [createRecord, setCreateRecord] = useState<boolean>(false)
  const [recordType, setRecordType] = useState<string>("transaction")

  return (
    <AppContext.Provider value={{ recordType, setRecordType, user, setUser, createRecord, setCreateRecord }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
