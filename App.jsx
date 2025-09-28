import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import EmpleadoDetalle from './components/EmpleadoDetalle';
import Mensaje from './components/Mensaje';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta para el listado de empleados */}
          <Route path="/quienes-somos" element={<QuienesSomos />} />

          {/* Ruta con parámetro para el detalle de cada empleado */}
          <Route path="/quienes-somos/:id" element={<EmpleadoDetalle />} />

          {/* Ruta para el mensaje, pasando los datos como props */}
          <Route
            path="/mensaje"
            element={
              <Mensaje
                nombre="Janns Patiño Saucedo"
                id={777}
                urlimg="https://api.lorem.space/image/face?w=150&h=220"
              />
            }
          />
        </Routes>
      </main>
    </>
  );   
}
    
export default App;    
