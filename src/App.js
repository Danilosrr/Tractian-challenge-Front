import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/css/Globalstyle';
import { MainApp } from "./components/shared/Main";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="app" element={<MainApp />}>
            <Route path="/app/home" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}