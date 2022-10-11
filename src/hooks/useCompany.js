import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyContext from '../context/companyContext';

export default function useCompany() {
  const { companyData: companyId } = useContext(CompanyContext);
  const navigate = useNavigate()
  
  if (!companyId) { navigate('/') }
  else return companyId;
}