"use client"


import { createContext, useContext, ReactNode, useState } from "react";

// Define the type for your context state
type AppContextType = {
  user: any;
  createRecord: boolean;
  recordType: string;
  incomeRecords: any[];
  expenseRecords: any[];
  debtPlans: any[];
  incomeGrowth: any[];
  expenseGrowth: any[];
  savingPlanRequired: boolean;
  setUser: (use: any) => void;
  setCreateRecord: (createRecord: boolean) => void;
  setRecordType: (createRecord: string) => void;
  setExpenseRecordsFunc: (expenseRecords: any) => void;
  setIncomeRecordsFunc: (incomeRecords: any) => void;
  setDebtPlansFunc: (debtPlans: any) => void;
  setDeleteRecordsFunc: (type: string, id: string) => void;
  setSavingPlanRequired: (savingPlanRequired: any) => void;
  setIncomeGrowth: (incomeGrowth: any) => void;
  setExpenseGrowth: (expenseGrowth: any) => void;
  setExpenseGrowthFunc: (arr: any) => void;
  setIncomeGrowthFunc: (arr: any) => void;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Object>({})
  const [createRecord, setCreateRecord] = useState<boolean>(false)
  const [recordType, setRecordType] = useState<string>("transaction")
  const [incomeRecords, setIncomeRecords] = useState<any[]>([])
  const [expenseRecords, setExpenseRecords] = useState<any[]>([])
  const [debtPlans, setDebtPlans] = useState<any[]>([])
  const [incomeGrowth, setIncomeGrowth] = useState<any[]>([])
  const [expenseGrowth, setExpenseGrowth] = useState<any[]>([])
  const [savingPlanRequired, setSavingPlanRequired] = useState<boolean>(false)

  const setExpenseRecordsFunc = (newData: any) => {
    if (expenseRecords.length == 0) setExpenseRecords(newData)
    else {
      setExpenseRecords((oldData: any) => {
        return [...oldData, newData].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      })
    }
  }

  const setIncomeRecordsFunc = (newData: any) => {
    if (incomeRecords.length == 0) setIncomeRecords(newData)
    else {
      setIncomeRecords((oldData: any) => {
        return [...oldData, newData].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      })
    }
  }

  const setDebtPlansFunc = (newData: any) => {
    if (debtPlans.length == 0) setDebtPlans(newData)
    else {
      setDebtPlans((oldData: any) => {
        return [...oldData, newData].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      })
    }
  }

  const setIncomeGrowthFunc = (newData: any) => {
    setIncomeGrowth(newData)
  }

  const setExpenseGrowthFunc = (newData: any) => {
    setExpenseGrowth(newData)
  }

  const setDeleteRecordsFunc = (type: string, id: string) => {
    if (type == "income") {
      setIncomeRecords((oldData: any) => {
        return oldData.filter((data: any) => data._id !== id);
      })
    } else if (type == "debt") {
      setDebtPlans((oldData: any) => {
        return oldData.filter((data: any) => data._id !== id);
      })
    } else {
      setExpenseRecords((oldData: any) => {
        return oldData.filter((data: any) => data._id !== id);
      })
    }
  }

  return (
    <AppContext.Provider value={{ setIncomeGrowthFunc, setExpenseGrowthFunc, incomeGrowth, expenseGrowth, setIncomeGrowth, setExpenseGrowth, savingPlanRequired, setSavingPlanRequired, setDeleteRecordsFunc, setIncomeRecordsFunc, setExpenseRecordsFunc, setDebtPlansFunc, debtPlans, incomeRecords, expenseRecords, recordType, setRecordType, user, setUser, createRecord, setCreateRecord }}>
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
