import React from "react";
import Presentacion from "./components/Presentacion";
import Caracteristicas from "./components/Caracteristicas";
import FormReserve from "./components/FormReserve";
import Footer from "../../components/Footer";
import DatosEnviados from "./components/DatosEnviados";

function SpecterGymPage() {
  return (
    <div className="items-center w-full">
      <Presentacion />
      <Caracteristicas />
      <FormReserve />
      <Footer />
    </div>
  );
}

export default SpecterGymPage;
