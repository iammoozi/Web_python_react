import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Market Kurly" />
      </div>
      <nav>
        <ul>
          <li><a href="#">상품관리</a></li>
          <li><a href="#">카테고리</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
