import { useContext } from 'react';
import CompanyContext from '../context/companyContext';

export default function useCompany() {
  const { companyData: companyId } = useContext(CompanyContext);

  if (typeof companyId === 'string') { return companyId };
  return false;
}