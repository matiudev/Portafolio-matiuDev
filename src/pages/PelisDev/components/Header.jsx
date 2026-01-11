import logo from "../src/logo_pelisdev.png";
import {
  Airplay,
  Flame,
  Home,
  Minus,
  Plus,
  ShoppingCart,
  TvMinimal,
  X,
} from "lucide-react";

const navOptions = [
  {
    opcion: "Inicio",
    icono: Home,
  },
  {
    opcion: "Tendencia",
    icono: Flame,
  },
  {
    opcion: "Estreno",
    icono: Airplay,
  },
  {
    opcion: "Series",
    icono: TvMinimal,
  },
];

function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        flex items-center justify-between
        h-16 md:h-[15vh]
        px-4 md:px-[5%]
        bg-transparent
      "
    >
      {/* Logo */}
      <div className="w-24 md:w-28">
        <img src={logo} alt="Logo Pizzeria" className="w-full cursor-pointer" />
      </div>

      {/* Nav Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-20 text-gray-600 font-parkinsans font-medium">
          {navOptions.map((option, i) => {
            const Icon = option.icono;
            return (
              <li key={i}>
                <a
                  href="#"
                  className="
                    flex items-center gap-2
                    hover:text-red-600
                    hover:border-b-2 hover:border-red-600
                    transition text-white
                  "
                >
                  <Icon />
                  {option.opcion}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Botón menú móvil (opcional) */}
      <button className="md:hidden text-white">
        ☰
      </button>
    </header>
  );
}


export default Header;
