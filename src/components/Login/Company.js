import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Space } from "antd";
import CompanyContext from "../../context/companyContext";
import { getAllCompanies } from "../../services/companyApi";

export default function Company() {
  const { setCompanyData } = useContext(CompanyContext);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allCompanies = async () => {
      const data = await getAllCompanies();
      setCompanies(data);
      console.log(data)
    }

    allCompanies();
  }, []);

  return (
    <Space
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100%',
        height: 'calc(100% - 45px)',
        flexWrap: 'wrap',
      }}
    >
      {companies.map(company => {
        return (
          <Button key={company.id} onClick={()=>{setCompanyData(company.id); navigate('app/home')}}>
            {company.name}
          </Button>
        )
      })}
    </Space>
  )
}