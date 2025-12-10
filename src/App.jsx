import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Portafolio from "./pages/Portafolio";
import PelisDevPage from "./pages/PelisDev/PelisDevPage";
import PizzeriaPage from "./pages/PizzeriaOciia/PizzeriaPage";
import SpecterGymPage from "./pages/SpecterGym/SpecterGymPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Portafolio />} />
          <Route path="/PizzeriaOciia" element={<PizzeriaPage />} />
          <Route path="/SpecterGym" element={<SpecterGymPage />} />
          <Route path="/PelisDev" element={<PelisDevPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
