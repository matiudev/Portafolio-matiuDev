import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuPizzas from "./components/MenuPizzas";
import Footer from "../../components/Footer";

function PizzeriaPage() {
  return (
    <div className="items-center w-full bg-white">
      <Header />
      <HeroSection />
      <MenuPizzas />
      <Footer background="bg-red-600" />
    </div>
  );
}

export default PizzeriaPage;
