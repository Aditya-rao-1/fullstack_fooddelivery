import React from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';

import Order from './pages/Order';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/add" element={<Add />} />

            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
