import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculor/calculor';
import Home from './Calculor/components/Pages/home';
import Quotes from './Calculor/components/Pages/quote';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/calculator" exact element={<Calculator />} />
      <Route path="/quote" exact element={<Quotes />} />
    </Routes>
  </BrowserRouter>
);

export default App;
