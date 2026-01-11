import { Star } from "lucide-react";
import React, { useState } from "react";
import ModalPizza from "./ModalPizza";

const pizzas = [
  {
    id: 1,
    nombre: "Pizza Margarita",
    precio: 12990,
    ingredientes: [
      "Tomate",
      "Albahaca",
      "Tomate",
      "Mozzarella",
    ],
    valoracion: 4.5,
    img: "https://imag.bonviveur.com/pizza-margarita.jpg",
  },
  {
    id: 2,
    nombre: "Pizza Pepperoni",
    precio: 10990,
    ingredientes: ["Tomate", "Mozzarella", "Pepperoni"],
    valoracion: 4.7,
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/DAKghgqXYNurHY9B7-800-x.webp",
  },
  {
    id: 3,
    nombre: "Pizza Hawaiana",
    precio: 9490,
    ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"],
    valoracion: 4.3,
    img: "https://assets.unileversolutions.com/recipes-v2/244028.jpg",
  },
  {
    id: 4,
    nombre: "Pizza Vegetariana",
    precio: 9790,
    ingredientes: ["Tomate", "Mozzarella", "Pimientos", "Cebolla", "Aceitunas"],
    valoracion: 4.6,
    img: "https://hoytoca-cms.ext-sites-prd.cloudherdez.com/assets/b0d29d09-852e-42e1-9e66-b486a01e25a3",
  },
  {
    id: 5,
    nombre: "Pizza 4 Estaciones",
    precio: 11490,
    ingredientes: [
      "Tomate",
      "Mozzarella",
      "Jamón",
      "Champiñones",
      "Olivas",
      "Pimientos",
    ],
    valoracion: 4.2,
    img: "https://i.blogs.es/2b355a/pizza-4-estaciones/1366_2000.jpg",
  },
  {
    id: 6,
    nombre: "Pizza Carbonara",
    precio: 12990,
    ingredientes: ["Crema", "Mozzarella", "Bacon", "Huevo"],
    valoracion: 4.8,
    img: "https://comedera.com/wp-content/uploads/sites/9/2022/04/pizza-carbonara.jpg",
  },
  {
    id: 7,
    nombre: "Pizza BBQ",
    precio: 5600,
    ingredientes: ["Salsa barbacoa", "Mozzarella", "Pollo", "Cebolla"],
    valoracion: 4.4,
    img: "https://okdiario.com/img/2015/09/08/receta-pizza-barbacoa.jpg",
  },
  {
    id: 8,
    nombre: "Pizza Cuatro Quesos",
    precio: 11990,
    ingredientes: ["Mozzarella", "Cheddar", "Gorgonzola", "Parmesano"],
    valoracion: 4.9,
    img: "https://www.hola.com/horizon/landscape/e8bb41b65869-pizzacuatroquesos-adob-t.jpg",
  },
  {
    id: 9,
    nombre: "Pizza Mariscos",
    precio: 13490,
    ingredientes: ["Tomate", "Mozzarella", "Camarones", "Mejillones", "Ajo"],
    valoracion: 4.1,
    img: "https://www.mmo.co.mz/wp-content/uploads/2024/09/Pizza-de-mariscos-Receitas.webp",
  },
  {
    id: 10,
    nombre: "Pizza Calzone",
    precio: 9500,
    ingredientes: ["Mozzarella", "Ricotta", "Jamon", "Huevo"],
    valoracion: 4.2,
    img: "https://okdiario.com/img/recetas/2017/07/12/pizza-calzone-3.jpg",
  },
];

function MenuPizzas() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
    setSelectedPizza(null);
  };

  return (
    <div className="px-[10%] pb-30">
      <h4 className="text-gray-800 text-4xl font-bold font-parkinsans">
        Menú de Pizzas
      </h4>
      <p className="text-black text-xl">
        Nosotros hemos seleccionado para ti los sabores más exquisitos alrededor
        del mundo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-8">
        {pizzas.map((pizza) => (
          <div
            className="border border-gray-200 rounded-2xl flex flex-col"
            onClick={() => openModal(pizza)}
            key={pizza.nombre}
          >
            <img src={pizza.img} className="rounded-t-2xl h-48 object-cover" />
            <div className="text-black bg-[#f9f8f6] px-4 py-4 rounded-b-2xl flex flex-col h-full">
              <p className="text-2xl font-semibold font-parkinsans text-red-600">
                {pizza.nombre}
              </p>
              <p className="font-bold text-4xl">
                ${pizza.precio.toLocaleString()}
              </p>

              <p className="text-gray-800 font-semibold text-lg grow">
                {pizza.ingredientes.join(", ")}
              </p>

              <p className="text-gray-800 font-semibold text-base flex items-center gap-2">
                Valoración: {pizza.valoracion} <Star size={16} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleModal && (
        <ModalPizza
          visible={visibleModal}
          pizza={selectedPizza}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default MenuPizzas;
