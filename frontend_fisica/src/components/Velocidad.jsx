import { useState } from "react";

function Velocidad() {
  const [distancia, setDistancia] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  async function calcular() {
    setError("");
    setResultado(null);

    try {
      const respuesta = await fetch("http://localhost:5000/fisica/velocidad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          distancia: Number(distancia),
          tiempo: Number(tiempo),
        }),
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        setError(datos.mensaje);
        return;
      }

      setResultado(datos);
    } catch  {
      setError("No fue posible conectarse con el servidor");
    }
  }

  return (
    <div className="max-w-md bg-white border border-slate-200 rounded-lg p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-slate-900">Cálculo de Velocidad</h2>
      

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Distancia 
          </label>
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Tiempo (s)
          </label>
          <input
            type="number"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <button
        onClick={calcular}
        className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
      >
        Calcular
      </button>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {resultado && (
        <p className="mt-4 p-4 bg-teal-50 border border-teal-200 rounded-md text-slate-900">
          Resultado:{" "}
          <span className="font-mono font-semibold text-teal-700">
            {resultado.resultado} {resultado.unidad}
          </span>
        </p>
      )}
    </div>
  );
}

export default Velocidad;
