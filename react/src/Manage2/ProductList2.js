import React from 'react';
//import ProductListItem from './ProductListItem';
import ProductListItem2 from './ProductListItem2';
//import Pagination from './Pagination2';
import Pagination2 from './Pagination2';
//import ProductRegistration from './ProductRegistration';
import ProductRegist2 from './ProductRegist2';
import './ProductList2.css';

const ProductList = () => {
  const dummyProducts = [
    { id: 1, productName: '불닭볶음면', quantity: 100 },
    { id: 2, productName: '신라면', quantity: 50 },
    { id: 3, productName: '햇반 10묶음', quantity: 100 },
    { id: 4, productName: '감자 10kg', quantity: 30 },
    { id: 5, productName: '불닭볶음면', quantity: 100 },
    { id: 6, productName: '신라면', quantity: 50 },
    { id: 7, productName: '햇반 10묶음', quantity: 100 },
  ];

  return (
    <div className="product-list">
      <ProductRegist2 />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map(product => (
            <ProductListItem2
              key={product.id}
              id={product.id}
              productName={product.productName}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
      <Pagination2 />
    </div>
  );
}

export default ProductList;
