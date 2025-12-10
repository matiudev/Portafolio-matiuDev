import { Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

function SelecionFechaHora({selectedDay, setSelectedDay, selectedHour, setSelectedHour}) {

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  // Arrays horas
  const baseMorning = ["08:00", "08:30", "09:00", "09:30", "10:00"];
  const baseAfternoon = ["13:00", "14:00", "14:30", "15:00", "16:00"];
  const baseNight = ["18:00", "18:30", "19:00", "19:30", "20:00"];

  // Estado para las horas generadas
  const [morningHours, setMorningHours] = useState([]);
  const [afternoonHours, setAfternoonHours] = useState([]);
  const [nightHours, setNightHours] = useState([]);

  const generateRandomHours = (arr) => {
    return arr.map((time) => ({
      time,
      busy: Math.random() < 0.4, // 40% ocupado
    }));
  };

  // 🔄 Cada vez que cambia la fecha => regenerar horas
  useEffect(() => {
    if (!selectedDay) return;

    setMorningHours(generateRandomHours(baseMorning));
    setAfternoonHours(generateRandomHours(baseAfternoon));
    setNightHours(generateRandomHours(baseNight));

    setSelectedHour(null);
  }, [selectedDay]);

  return (
    <>
      <Calendar
        onChange={setSelectedDay}
        value={selectedDay}
        minDate={today}
        maxDate={nextMonth}
        className="text-black w-full p-4 rounded-2xl shadow-lg border border-gray-200 bg-white
             [&&]:border-none custom-calendar"
      />

      {selectedDay && (
        <div className="text-black font-semibold mt-8">
          {/* MAÑANA */}
          <div>
            <p>Mañana</p>
            <div className="flex items-center gap-4">
              {morningHours.map((hour) => (
                <button
                  disabled={!hour.busy}
                  onClick={() => setSelectedHour(hour.time)}
                  key={hour.time}
                  className={` px-8 py-2 rounded-2xl my-3 transition 
                    ${
                      hour.busy
                        ? "bg-gray-200 cursor-pointer"
                        : "bg-gray-300 opacity-50 cursor-not-allowed"
                    }
                    ${
                      selectedHour === hour.time
                        ? "ring-2 ring-black bg-blue-200"
                        : ""
                    }
    `}
                >
                  {hour.busy ? (
                    <p>{hour.time}</p>
                  ) : (
                    <div>
                      <Clock />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TARDE */}
          <div>
            <p>Tarde</p>
            <div className="flex items-center gap-4">
              {afternoonHours.map((hour) => (
                <button
                  disabled={!hour.busy}
                  onClick={() => setSelectedHour(hour.time)}
                  key={hour.time}
                  className={` px-8 py-2 rounded-2xl my-3 transition 
                    ${
                      hour.busy
                        ? "bg-gray-200 cursor-pointer"
                        : "bg-gray-300 opacity-50 cursor-not-allowed"
                    }
                    ${
                      selectedHour === hour.time
                        ? "ring-2 ring-black bg-blue-200"
                        : ""
                    }
    `}
                >
                  {hour.busy ? (
                    <p>{hour.time}</p>
                  ) : (
                    <div>
                      <Clock />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* NOCHE */}
          <div>
            <p>Noche</p>
            <div className="flex items-center gap-4">
              {nightHours.map((hour) => (
                <button
                  disabled={!hour.busy}
                  onClick={() => setSelectedHour(hour.time)}
                  key={hour.time}
                  className={` px-8 py-2 rounded-2xl my-3 transition 
                    ${
                      hour.busy
                        ? "bg-gray-200 cursor-pointer"
                        : "bg-gray-300 opacity-50 cursor-not-allowed"
                    }
                    ${
                      selectedHour === hour.time
                        ? "ring-2 ring-black bg-blue-200"
                        : ""
                    }
    `}
                >
                  {hour.busy ? (
                    <p>{hour.time}</p>
                  ) : (
                    <div>
                      <Clock />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelecionFechaHora;
