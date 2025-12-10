import React, { useState } from "react";
import logo from "../src/logo.png";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import useCartShopping from "../store/useCartShoppingStore";

function Header() {
  const products = useCartShopping((state) => state.products);
  const increaseCantidad = useCartShopping((state) => state.increaseCantidad);
  const decreaseCantidad = useCartShopping((state) => state.decreaseCantidad);
  const [visibleCart, setVisibleCart] = useState(false);

  return (
    <header className="flex justify-between items-center h-[15vh] px-[10%] sticky z-100 top-0 bg-[#fffefef3]">
      <div className="w-1/10 h-auto">
        <img src={logo} alt="Logo Pizzeria" className="w-full cursor-pointer" />
      </div>

      <nav className="w-8/10 flex justify-center items-center">
        <ul className="flex justify-center items-center gap-[17vh] list-none text-gray-600 font-parkinsans font-medium">
          <li>
            <a
              href=""
              className="hover:text-red-600  hover:border-red-600 hover:border-b-2 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-red-600  hover:border-red-600 hover:border-b-2 "
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-red-600  hover:border-red-600  hover:border-b-2 "
            >
              Rastrear Pedido
            </a>
          </li>
        </ul>
      </nav>
      <a className="flex gap-2">
        <button className="font-bold text-white py-2 px-5 bg-[#ed1e10] rounded-4xl cursor-pointer font-parkinsans text-sm">
          Contact
        </button>

        {products && (
          <button
            onClick={() => setVisibleCart(true)}
            className="font-bold text-white py-2 px-5 bg-[#ed1e10] rounded-4xl cursor-pointer font-parkinsans text-sm flex items-center gap-2 relative"
          >
            <div className="relative">
              <ShoppingCart />

              <span className="absolute -top-1 -right-3 bg-white text-red-600 w-5 h-5 text-xs flex items-center justify-center rounded-full">
                {products.length}
              </span>
            </div>
          </button>
        )}
      </a>
      {visibleCart && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-end z-150 text-black">
          <div className="bg-white p-6 rounded-l-xl shadow-xl h-full w-1/5">
            <div className="flex justify-between">
              <h4 className="font-bold text-2xl text-red-600 font-poetsen mb-5">
                TU PEDIDO
              </h4>
              <X onClick={() => setVisibleCart(false)} />
            </div>
            {products.map((product, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between">
                  <p className="font-bold font-parkinsans ">{product.nombre} - {product.tamaño}</p>
                  <div className="flex gap-2">
                    <p
                      className="rounded-full border-red-600 border px-1 items-center flex"
                      onClick={() =>
                        decreaseCantidad(product.id, product.tamaño)
                      }
                    >
                      <Minus size={15} />
                    </p>
                    <p className="font-parkinsans">{product.cantidad}</p>
                    <p
                      className="rounded-full border-red-600 border px-1 items-center flex"
                      onClick={() =>
                        increaseCantidad(product.id, product.tamaño)
                      }
                    >
                      <Plus size={15} />
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium text-sm font-parkinsans">
                  {product.ingredientes.join(", ")}
                </p>
                <p className="font-bold text-lg text-end font-parkinsans mb-4">
                  ${(product.precio * product.cantidad).toLocaleString("es-CL")}
                </p>
                <div className="bg-gray-400 h-px"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
