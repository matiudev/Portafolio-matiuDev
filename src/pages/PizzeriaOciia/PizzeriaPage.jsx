import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuPizzas from "./components/MenuPizzas";
import Footer from "../../components/Footer";

function PizzeriaPage() {
  return (
    <>
      <div className="bg-white w-full mx-auto px-2 items-center">
        <Header />
        <HeroSection />
        <MenuPizzas />
      </div>
      <Footer background="bg-red-600" />
    </>
  );
}

export default PizzeriaPage;
