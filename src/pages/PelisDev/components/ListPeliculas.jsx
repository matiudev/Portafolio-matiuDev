import React, { useEffect, useState } from "react";
import {
  peliculasRecienEstrenadas,
  peliculasTendencia,
  seriesPopulares,
} from "../data/listaContenido";
import { Flame, Ticket } from "lucide-react";

function ListPeliculas() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=dfb4e691&s=movie&page=1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div>
      <p className="flex gap-3 font-semibold text-xl items-center mb-5">
        <Flame color="orange" /> Tendencia
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14 mb-20">
        {data ? (
          data.Search.map((peli, i) => (
            <div key={i} className="items-center flex flex-col ">
              <img
                src={peli.Poster}
                alt=""
                className="rounded-2xl h-80 object-cover"
              />
              <p>{peli.Title}</p>
            </div>
          ))
        ) : (
          <div>
            <p>No hay diponible</p>
          </div>
        )}
      </div>
      <p className="flex gap-3 font-semibold text-xl items-center mb-5">
        <Ticket color="orange" /> Recien Estrenadas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14 mb-20">
        {peliculasRecienEstrenadas.map((peli, i) => (
          <div key={i} className="items-center flex flex-col ">
            <img
              src={peli.imagen}
              alt=""
              className="rounded-2xl h-80 object-cover"
            />
            <p>{peli.titulo}</p>
          </div>
        ))}
      </div>
      <p className="flex gap-3 font-semibold text-xl items-center mb-5">
        <Ticket color="orange" /> Series Populares
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14 mb-20">
        {seriesPopulares.map((peli, i) => (
          <div key={i} className="items-center flex flex-col ">
            <img
              src={peli.imagen}
              alt=""
              className="rounded-2xl h-80 object-cover"
            />
            <p>{peli.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPeliculas;
