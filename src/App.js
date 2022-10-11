import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/css/Globalstyle';
import 'antd/dist/antd.css';
import Overview from "./components/Overview";
import { MainApp } from "./components/shared/Main";
import Units from "./components/Units/Units";
import Assets from "./components/Assets/Assets";
import Users from "./components/Users/Users";
import { CompanyProvider } from "./context/companyContext";
import Company from "./components/Login/Company";
import NewAsset from "./components/Assets/Form";
import NewUnit from "./components/Units/Form";
import NewUser from "./components/Users/Form";
import NewCompany from "./components/Login/Form";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <CompanyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Company></Company>} />
            <Route path="/new" element={<NewCompany></NewCompany>} />
            <Route path="app" element={<MainApp />}>
              <Route path="/app/home" element={<Overview></Overview>} />
              <Route path="/app/units" element={<Units></Units>} />
              <Route path="/app/units/new" element={<NewUnit></NewUnit>} />
              <Route path="/app/assets" element={<Assets></Assets>} />
              <Route path="/app/assets/new" element={<NewAsset></NewAsset>} />
              <Route path="/app/users" element={<Users></Users>} />
              <Route path="/app/users/new" element={<NewUser></NewUser>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CompanyProvider>
    </>
  );
}