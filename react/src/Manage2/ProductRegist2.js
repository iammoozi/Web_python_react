import React from 'react';
import './ProductRegist2.css';

const ProductRegist2 = () => {
  return (
    <div className="product-registration">
      <input type="text" placeholder="검색..." className="search-input" />
      <button className="search-button">검색하기</button>
      <input type="text" placeholder="상품명" className="input-field" />
      <input type="number" placeholder="수량" className="input-field" />
      <button className="register-button">상품등록</button>
    </div>
  );
}

export default ProductRegist2;
