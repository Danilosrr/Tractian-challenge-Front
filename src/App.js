import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/css/Globalstyle';
import 'antd/dist/antd.css';
import Overview from "./components/Overview";
import { MainApp } from "./components/shared/Main";
import Units from "./components/Units";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} /> //login component
          <Route path="app" element={<MainApp />}>
            <Route path="/app/home" element={<Overview></Overview>} />
            <Route path="/app/units" element={<Units></Units>} />
            <Route path="/app/assets" element={<></>} />
            <Route path="/app/users" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}