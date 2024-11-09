import React from 'react';
import Navbar2 from '../components/Admin_Components/Navbar2';
import Sidebar from '../components/Admin_Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from '../components/Admin_Components/Add';
import List from '../components/Admin_Components/List';
import Orders from '../components/Admin_Components/Orders';
import Default1 from '../components/Admin_Components/Default1';

const Admin = () => {
  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path='' element={<Default1 />} />
            <Route path='add' element={<Add />} />
            <Route path='list' element={<List />} />
            <Route path='orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
