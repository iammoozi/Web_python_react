import React from 'react';
import './ProductRegist.css';
import { useNavigate } from 'react-router-dom';


const ProductRegist = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 선언
  
    const handleNewProduct = () => {
      navigate('/NewManage');
    }
  

  return (
    <div className="product-registration">
      <button className="register-button" onClick={handleNewProduct}>상품등록</button>
    </div>
  );
}

export default ProductRegist;
