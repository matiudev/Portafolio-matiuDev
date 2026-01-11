import React from 'react';
import Presentacion from '../components/Presentacion'
import Proyectos from '../components/Proyectos'


function Portafolio() {
  return (
    <div className="md:w-[870px] w-full max-w-7xl mx-auto px-4">
      <Presentacion />
      <Proyectos />
    </div>
  );
}


export default Portafolio;