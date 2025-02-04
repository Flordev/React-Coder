import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      {/* El Navbar estará en todas las páginas */}
      <NavBar />
      <Routes>
        {/* Ruta a la página principal donde se muestra el catálogo */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Mi Tienda" />} />
        
        {/* Ruta para filtrar productos por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        
        {/* Ruta al detalle de un producto específico */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
