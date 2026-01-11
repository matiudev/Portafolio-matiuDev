import React from "react";
import heroImg from "../src/home.png";

function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-15vh)] px-[10%] md:flex md:items-center md:justify-between">
      <div className="md:max-w-[55%] text-center items-start">
        <h1 className="text-5xl md:text-8xl font-parkinsans text-[#302e29] font-bold">
          <span className="text-red-600">Bienvenido</span> al mundo de la pizza fresca y sabrosa
        </h1>
        <button className="text-white bg-red-500 px-8 py-2 rounded-4xl font-semibold mt-12 mb-12">Elige una Pizza</button>
      </div>

      <div>
        <img src={heroImg} alt="Pizza" className="w-[600px] mb-12" />
      </div>
    </div>
  );
}

export default HeroSection;
