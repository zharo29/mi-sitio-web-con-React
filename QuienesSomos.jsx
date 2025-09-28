import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuienesSomos = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        
        // Validación para no agregar usuarios duplicados por ID
        const usuariosUnicos = users.filter((user, index, self) =>
            index === self.findIndex((u) => u.id === user.id)
        );
        
        setEmpleados(data);
      } catch (error) {
        console.error("Error al obtener los datos de los empleados:", error);
      }
    };
    
    obtenerDatos();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez [cite: 177]
  
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Nuestro Equipo</h1>
      <p>Haz clic en el nombre de un empleado para ver más detalles.</p>
      <div className="list-group">
        {empleados.map((empleado) => (
          <Link
            key={empleado.id}
            to={`/quienes-somos/${empleado.id}`}
            className="list-group-item list-group-item-action"
          >
            {empleado.name} - <span className="text-muted">{empleado.company.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );

   
     
       
       
       
         
           
             
               
           
         
     
     
   
};

export default QuienesSomos;
    
