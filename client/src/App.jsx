import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduction from './assets/app/cuentame-system/pages/Introduction';
import Contact from './assets/app/cuentame-system/pages/Contact';
import Category from './assets/app/cuentame-system/pages/Category';
import ListTales from './assets/app/cuentame-system/pages/ListTales';
import Nosotros from './assets/app/cuentame-system/pages/Nosotros';
import Readings from './assets/app/cuentame-system/pages/Readings';

const classicsTales = [
  { text: 'La caperucita Roja', href: '/caperucita' },
  { text: 'Pinocho', href: '#' },
  { text: 'Pulgarcito', href: '#' },
  { text: 'El gato con botas', href: '#' },
  { text: 'La Sirenita', href: '#' },
  { text: 'Originales', href: '#' },
  { text: 'Graciosos', href: '#' },
  { text: 'Originales', href: '#' },
];

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/inicio' element={<Introduction />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/clásicos/:id_categoria' element={<Category title="CLASICOS" />} />
          <Route path='/originales/:id_categoria' element={<Category title="ORIGINALES" />} />
          <Route path='/fantasiosos/:id_categoria' element={<Category title="FANTASIOSOS" />} />
          <Route path='/cuento/:id_cuento' element={<Readings id_cuento={1} />} />
          <Route path='/cuentos' element={<ListTales />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
