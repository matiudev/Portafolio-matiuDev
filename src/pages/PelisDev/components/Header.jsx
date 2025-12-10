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
    <header className="flex items-center h-[15vh] px-[5%] sticky z-100 top-0 gap-15">
      <div className="w-1/12 h-auto">
        <img src={logo} alt="Logo Pizzeria" className="w-full cursor-pointer" />
      </div>

      <nav className="w-11/12 flex justify-start items-center">
        <ul className="flex justify-center items-center gap-[17vh] list-none text-gray-600 font-parkinsans font-medium">
          {navOptions.map((option, i) => {
            const Icon = option.icono;
            return (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-red-600  hover:border-red-600 hover:border-b-2 text-white flex gap-2"
                >
                  <Icon />
                  {option.opcion}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
