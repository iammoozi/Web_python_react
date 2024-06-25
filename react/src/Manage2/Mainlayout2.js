import React from 'react';
import Sidebar from './Sidebar2';
import ProductList from './ProductList2';
import './Mainlayout2.css';

const Mainlayout2 = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <ProductList />
      </div>
    </div>
  );
}

export default Mainlayout2;
