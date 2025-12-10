import { Mail, Phone, User } from "lucide-react";
import React, { useState } from "react";

function FormularioDatosPersonales({ formData, setFormData, handleSendForm }) {
  const fields = [
    {
      id: "name",
      label: "Nombre *",
      icon: <User />,
    },
    {
      id: "email",
      label: "Mail *",
      icon: <Mail />,
    },
    {
      id: "phone",
      label: "Phone *",
      icon: <Phone />,
    },
  ];

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="font-semibold text-black">
      {fields.map(({ id, label, icon }) => (
        <div key={id} className="flex-col flex items-center">
          <div className="flex gap-2 items-center">
            {icon}
            <p>{label}</p>
          </div>

          <input
            className="border border-gray-400 rounded-lg w-3/4 py-2 mt-2 pl-2 mb-4"
            value={formData[id]}
            onChange={(e) => handleChange(id, e.target.value)}
          />
        </div>
      ))}
      <div className="flex-col flex items-center">
        <button
          className="bg-black text-white w-3/4   py-3 rounded-xl mt-4 items-center"
          onClick={handleSendForm}
        >
          <p>Inscribirme</p>
        </button>
      </div>
    </div>
  );
}

export default FormularioDatosPersonales;
