import React from 'react';
import CAProductListItem from './CAProductListItem';
import CAPagination from './CAPaginations';
import './CAProductList.css';
import CAProductRegist from './CAProductRegist';


const CAProductList = () => {
  const dummyProducts = [
    { id: 1, Name: '채소' },
    { id: 2, Name: '정육'},
    { id: 3, Name: '면'},
    { id: 4, Name: '간식'},
    { id: 5, Name: '와인, 위스키'},
    
  ];

  return (
    <div className="product-list">
     
      <CAProductRegist/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map(product => (
            <CAProductListItem
              key={product.id}
              id={product.id}
              Name={product.Name}
              
            />
          ))}
        </tbody>
      </table>
      <CAPagination />
    </div>
  );
}

export default CAProductList;
