import React from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <ProductList />
      </div>
    </div>
  );
}

export default MainLayout;
