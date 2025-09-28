import React from 'react';
import ReactDOM from 'react-dom/cliente';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import '/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
        
    
);