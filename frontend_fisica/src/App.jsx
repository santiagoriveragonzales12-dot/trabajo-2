import { useState } from "react";
import Menu from "./components/Menu";
import Velocidad from "./components/Velocidad";
import Aceleracion from "./components/Aceleracion";
import Fuerza from "./components/Fuerza";
import Energia from "./components/Energia";
import Densidad from "./components/Densidad";
import "./App.css";

function App() {
  const [calculoSeleccionado, setCalculoSeleccionado] = useState(null);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Menu
        seleccionado={calculoSeleccionado}
        onSeleccionar={setCalculoSeleccionado}
      />

      <main className="flex-1 p-8 lg:p-12">
        {calculoSeleccionado === "velocidad" && <Velocidad />}
        {calculoSeleccionado === "aceleracion" && <Aceleracion />}
        {calculoSeleccionado === "fuerza" && <Fuerza />}
        {calculoSeleccionado === "energia" && <Energia />}
        {calculoSeleccionado === "densidad" && <Densidad />}

        {!calculoSeleccionado && (
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Elige un cálculo
            </h2>
            <p className="text-slate-600">
              Selecciona una opción del panel de cálculos físicos para
              empezar.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
