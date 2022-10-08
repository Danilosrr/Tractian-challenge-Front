import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/css/Globalstyle';
import { Overview } from "./components/Overview";
import { MainApp } from "./components/shared/Main";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="app" element={<MainApp />}>
            <Route path="/app/home" element={<Overview></Overview>} />
            <Route path="/app/units" element={<></>} />
            <Route path="/app/assets" element={<></>} />
            <Route path="/app/users" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}