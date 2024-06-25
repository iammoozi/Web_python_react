import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProductListItem2.css';
import EditIcon from '@mui/icons-material/Edit';

const ProductListItem2 = ({ id, productName, quantity, price}) => {
  return (
    <tr className="product-list-item">
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td className="price">
        <button className="edit-button"><EditIcon/></button>
        <button className="delete-button">
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default ProductListItem2;
