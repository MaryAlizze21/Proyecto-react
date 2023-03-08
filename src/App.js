import React from 'react';
import NavBar from './componentes/Navbar/Navbar';
import ProductosLista from './componentes/Productos/productos';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ProductosLista />
    </div>
  );
}

export default App;
