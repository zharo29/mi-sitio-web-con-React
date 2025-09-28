import React, {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';

const EmpleadoDetalle = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        setEmpleado(data);

        }catch (error) {
            console.error("Error al obtener los detalles del empleado:", error);
        } finally {
            setLoading(false);
        }
            
        
            
        
      
        
      
    };
    
    obtenerDatos();
  }, [id]); // El efecto se ejecuta cada vez que el 'id' cambia

  if (loading) {
    return <div className=" container mt-4 text-center">Cargando...</div>;
  }
  
  return (
    <div className="container mt-4">
      {empleado ? (
        <div className="card">
          <div className="card-header">
            <h2>Detalles del Empleado</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">{empleado.name} (@{empleado.username})</h5>
            <p className="card-text"><strong>Email:</strong> {empleado.email}</p>
            <p className="card-text"><strong>Teléfono:</strong> {empleado.phone}</p>
            <p className="card-text"><strong>Sitio Web:</strong> <a href={`http://${empleado.website}`} target="_blank" rel="noopener noreferrer">{empleado.website}</a></p>
            <p className="card-text"><strong>Ciudad:</strong> {empleado.address.city}</p>
            <Link to="/quienes-somos" className="btn btn-primary">Volver al listado</Link>
          </div>
        </div>
      ) : (
        <p>No se pudo encontrar la información del empleado.</p>
      )}
    </div>
  );
  
    
   
           
                
                    
                     

        

    
      
        
        
        
        
      
    
  
};

export default EmpleadoDetalle;