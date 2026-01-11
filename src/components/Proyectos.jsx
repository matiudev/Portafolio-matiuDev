import { Link, Star } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import pizzeria from "../assets/pizzeria.png";
import specterGym from "../assets/specterGym.png";
import pelisdev from "../assets/pelisdev.png";
import cashflow from "../assets/cashflow.png";
import { FaCss3, FaJs, FaHtml5, FaPaw } from "react-icons/fa";
import {
  RiSupabaseFill,
  RiTailwindCssFill,
  RiReactjsLine,
} from "react-icons/ri";
import React from "react";

const proyectos = [
  {
    nombre: "CashFlow",
    descripcion:
      "Aplicacion Movil de finanzas personales te permite gestionar tus cuentas de manera sencilla y eficiente. Con opciones para añadir ingresos, gastos, transferencias, y categorizar tus movimientos, tendrás una visión clara de tus finanzas. Además, incluye gráficos intuitivos para analizar tus hábitos financieros y un registro detallado para un seguimiento completo.",
    web: "",
    lenguajes: ["React_Native", "Tailwind", "Zustand", "Supabase"],
    image: cashflow,
  },
  {
    nombre: "Pizzeria Ociia",
    descripcion:
      "Aplicación web de una pizzería desarrollada con JavaScript puro, que ofrece una experiencia interactiva para explorar el menú, realizar pedidos y rastrear su estado.",
    web: "PizzeriaOciia",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    image: pizzeria,
  },
  {
    nombre: "Specter GYM",
    descripcion:
      "Aplicación web de un gym desarrollada con React, que ofrece una experiencia interactiva para poder reservar tu visita a la hora de matricularte.",
    web: "SpecterGym",
    lenguajes: ["React", "Tailwind"],
    image: specterGym,
  },
  {
    nombre: "PelisDev",
    descripcion:
      "Este proyecto es un catálogo interactivo de películas y series desarrollado con HTML, CSS y JavaScript. Permite explorar diferentes categorías como películas, series y tendencias, con una interfaz responsive y animaciones dinámicas.",
    web: "PelisDev",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    image: pelisdev,
  },
];

const ICONS = {
  JavaScript: {
    icon: () => <FaJs className="text-yellow-400" />,
    bg: "bg-yellow-400/20", // fondo suave
  },
  HTML: {
    icon: () => <FaHtml5 className="text-orange-500" />,
    bg: "bg-orange-500/20",
  },
  CSS: {
    icon: () => <FaCss3 className="text-blue-500" />,
    bg: "bg-blue-500/20",
  },
  Supabase: {
    icon: () => <RiSupabaseFill className="text-green-500" />,
    bg: "bg-green-500/20",
  },
  Tailwind: {
    icon: () => <RiTailwindCssFill className="text-blue-500" />,
    bg: "bg-blue-500/20",
  },
  React: {
    icon: () => <RiReactjsLine className="text-cyan-500" />,
    bg: "bg-cyan-500/20",
  },
  React_Native: {
    icon: () => <RiReactjsLine className="text-cyan-500" />,
    bg: "bg-cyan-500/20",
  },
  Zustand: {
    icon: () => <FaPaw className="text-orange-500" />,
    bg: "bg-orange-500/20",
  },
};

const IconsLenguajes = ({ lenguajes }) => {
  return (
    <div className="md:flex gap-4 grid grid-cols-3">
      {lenguajes.map((lang) => {
        const data = ICONS[lang] || {
          icon: () => <FaHtml5 className="text-gray-400" />,
          bg: "bg-gray-400/20",
        };

        const Icon = data.icon;

        return (
            <div
              key={lang}
              className={`${data.bg} py-3 px-4 md:flex items-center gap-3 rounded-xl mb-5`}
            >
              <Icon />
              <p className="font-semibold">{lang.replace("_", " ")}</p>
            </div>
        );
      })}
    </div>
  );
};

function Proyectos() {
  return (
    <>
      <div className="flex items-center justify-start gap-5 mt-20 mb-12">
        <Star size={40} />
        <h2 className="font-black text-4xl font-poetsen">Proyectos</h2>
      </div>

      {proyectos.map((proyecto) => (
        <React.Fragment key={proyecto.nombre}>
          <div className="flex justify-between mb-5">
            <p className="font-black text-3xl font-poetsen text-pink-300">
              {proyecto.nombre}
            </p>
            {proyecto.web && (
              <RouterLink
                to={proyecto.web}
                className="bg-white py-2 px-5 flex items-center gap-1 rounded-xl"
              >
                <Link color="black" size={18} />
                <p className="text-black text-base font-semibold">Web</p>
              </RouterLink>
            )}
          </div>
          <p className="text-gray-300 font-semibold text-start mb-3">
            {proyecto.descripcion}
          </p>
          <IconsLenguajes lenguajes={proyecto.lenguajes} />
          <img
            src={proyecto.image}
            alt=""
            className="mb-10 rounded-2xl transition-transform duration-300 hover:scale-102"
          />
        </React.Fragment>
      ))}
    </>
  );
}

export default Proyectos;
