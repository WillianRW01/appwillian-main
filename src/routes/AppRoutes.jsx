import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Tecnologia  from "../pages/Tecnologia";
import Body from "../layout/Body";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Tecnologia" element={<Tecnologia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
