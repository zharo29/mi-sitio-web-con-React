import React from 'react';

const Mensaje = ({nombre, id, urlimg}) => {
return (
    <div className="container mt-4">
      <h1>Mensaje de la Dirección</h1>
      <div className="card mt-3 mx-auto" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={urlimg} className="img-fluid rounded-start" alt={`Foto de ${nombre}`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">¡Saludos, equipo!</h5>
              <p className="card-text">
                Este es un mensaje de parte de <strong>{nombre}</strong> para agradecerles
                a todos por su increíble trabajo y dedicación. ¡Sigamos adelante!
              </p>
              <p className="card-text">
                <small className="text-muted">ID de Usuario: {id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );   
    
};

export default Mensaje;