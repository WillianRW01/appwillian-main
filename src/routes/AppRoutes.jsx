import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Albums from "../pages/Albums";
import Body from "../layout/Body";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/inicio" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/albuns" element={<Albums />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
