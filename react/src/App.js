import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginP from './login';
import SignUp from './signup';
import ShopCart from './shopping/ShopCart';
import HomePage from './headerComponent/HomePage';
// import MainLayout from './Management/MainLayout';
// import Mainlayout2 from './Manage2/Mainlayout2';
import CMainlayout from './catemanage/CMainlayout';
import ProductDetail from './detailproduct/ProductDDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginP/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/ShopCart" element={<ShopCart/>} />
        <Route path="/detail" element={<ProductDetail/>} />
      </Routes> 
    </Router>
   //<CMainlayout/>
  );
}

export default App;
