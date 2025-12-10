import { ShoppingCart, TriangleAlert, X } from "lucide-react";
import React, { useState } from "react";
import useCartShopping from "../store/useCartShoppingStore";

function ModalPizza({ visible, pizza, onClose }) {
  if (!visible || !pizza) return null;
  const [tamaños, setTamaños] = useState([
    "Personal",
    "Mediana",
    "Grande",
    "Familiar",
  ]);
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const addProduct = useCartShopping((state) => state.addProduct);

  const handleAddProduct = () => {
    if (!tamañoSeleccionado) {
      setMensajeError("Complete todos los campos");
      return;
    }

    addProduct({ ...pizza, tamaño: tamañoSeleccionado });
    onClose()
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-150 text-black">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[40%]">
        <button onClick={onClose} className="mb-4">
          <X />
        </button>
        <div className="flex gap-6">
          <img src={pizza.img} className="rounded-t-2xl h-56 object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-black">{pizza.nombre}</h2>
            <p className="mt-2 text-red-600 text-4xl font-bold">
              ${pizza.precio.toLocaleString()}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Ingredientes:</span>{" "}
              {pizza.ingredientes.join(", ")}
            </p>
            <select
              value={tamañoSeleccionado}
              onChange={(e) => setTamañoSeleccionado(e.target.value)}
              className="border rounded p-2 mt-2"
            >
              <option value="">Selecciona un tamaño</option>
              {tamaños.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <button
              className="flex bg-red-600 p-3 mt-3 rounded-2xl text-sm items-center gap-2 text-white font-semibold"
              onClick={handleAddProduct}
            >
              <ShoppingCart size={16} />
              Agregar al Carrito
            </button>
          </div>
        </div>
        {mensajeError && (
          <div className="flex gap-2 mt-5">
            <TriangleAlert color="#a65f00" />
            <p className="text-yellow-700 font-bold">{mensajeError}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalPizza;
