import { createContext } from "react";
import { useLocalStorage } from "../services/utils";

const CompanyContext = createContext();

export default CompanyContext;

export function CompanyProvider({ children }) {
  const [companyData, setCompanyData] = useLocalStorage('companyId',{});

  return (
    <CompanyContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyContext.Provider>
  )
};
