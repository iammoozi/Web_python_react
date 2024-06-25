import React from 'react';
import './ProductListItem.css';

const SERVER_URL = 'http://study.aiclub.kr:8002'; // 서버 URL 설정
const defaultImageUrl = '/home/team02/react/src/productImg/noimage.jpg'; // 기본 이미지 URL 설정

const ProductListItem = ({ id, productName, quantity, price, description, category, productImage }) => {
  const imageUrl = productImage ? `${SERVER_URL}/${productImage}` : defaultImageUrl;

  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{category}</td>
    </tr>
  );
}

export default ProductListItem;
