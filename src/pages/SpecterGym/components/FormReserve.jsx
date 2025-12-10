import React, { useState } from "react";
import { Calendar, Clock, CreditCard } from "lucide-react";
import SelecionFechaHora from "./SelecionFechaHora";
import FormularioDatosPersonales from "./FormularioDatosPersonales";
import Swal from "sweetalert2";

function FormReserve() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSendForm = () => {
    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      return Swal.fire({
        title: "Advertencia",
        text: "Complete todos los campos para continuar",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }

    Swal.fire({
      title: "Completado",
      text: "Datos enviados Correctamente",
      icon: "success",
      confirmButtonText: "OK",
    });

    setSelectedDay(null);
    setSelectedHour(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    console.log("despues");
  };

  return (
    <div
      className="pt-14 pb-14 min-h-screen flex justify-center items-start bg-[#f0f3f4]"
      id="reserva"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-4 justify-around">
        <div className="bg-white p-8 rounded-md order-last md:order-first">
          {selectedDay && selectedHour ? (
            <>
              <p className="text-lg font-bold text-start text-gray-600">
                Complete sus datos personales
              </p>
              <p className="text-start mb-8 text-gray-600">
                Estos datos son relevantes conocerte mejor y darte una
                experiencia personalizada.
              </p>
              <FormularioDatosPersonales
                formData={formData}
                setFormData={setFormData}
                handleSendForm={handleSendForm}
              />
            </>
          ) : (
            <>
              <p className="text-lg font-bold text-start text-gray-600">
                Selecciona fecha y hora de tu servicio
              </p>
              <p className="text-start mb-4 text-gray-600">
                Esta fecha es relevante para esperar tu visita y brindarte una
                mejor atención.
              </p>
              <SelecionFechaHora
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                selectedHour={selectedHour}
                setSelectedHour={setSelectedHour}
              />
            </>
          )}
        </div>

        {/* CUADRO DE INFORMACION */}
        <div className="bg-linear-to-r from-gray-50 to-gray-100 p-9 rounded-xl border border-gray-200 order-first md:order-last">
          <h3 className="text-xl font-bold mb-3 text-black">Tu Reserva</h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <CreditCard className="w-5 h-5" />
            <p className="grow text-start">$15.000 Mensual</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <p className="grow text-start">60 min</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <p className="grow text-start min-w-[200px]">
              Selecciona una fecha y hora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormReserve;
