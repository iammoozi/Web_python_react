import React from 'react';
import CAProductList from './CAProductList';
import './CAMainLayout.css';
import CASidebar from './CASidebar';



const CAMainLayout = () => {
  return (
    <div className="main-layout">
      <CASidebar />
      <div className="content">
        <CAProductList />
      </div>
    </div>
  );
}

export default CAMainLayout;
