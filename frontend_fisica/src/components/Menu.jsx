const opciones = [
  { id: "velocidad", label: "Velocidad" },
  { id: "aceleracion", label: "Aceleración" },
  { id: "fuerza", label: "Fuerza" },
  { id: "energia", label: "Energía" },
  { id: "densidad", label: "Densidad" },
];

function Menu({ seleccionado, onSeleccionar }) {
  return (
    <aside className="w-64 shrink-0 min-h-screen bg-slate-900 text-slate-300 flex flex-col">
      <div className="px-6 py-6 border-b border-slate-800">
        <span className="text-xl font-semibold text-white">☰ calculos fisicos</span>
        
      </div>

      <nav className="px-3 py-6">
        <p className="px-3 text-sm font-medium text-slate-400 mb-2">
          Cálculos 
        </p>
        <ul className="space-y-1">
          {opciones.map((opcion) => (
            <li key={opcion.id}>
              <button
                onClick={() => onSeleccionar(opcion.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors border-l-2 ${
                  seleccionado === opcion.id
                    ? "bg-teal-500/10 text-teal-400 border-teal-400"
                    : "border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {opcion.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
