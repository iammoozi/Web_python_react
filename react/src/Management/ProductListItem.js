import React from 'react';
import './ProductListItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// 리스트들 값 불러옴

const ProductListItem = ({ id, productName, quantity, price, onEdit, onDelete }) => {
  return (
    <tr className="product-list-item"> 
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td className="price">
        <button className="edit-button" onClick={() => onEdit(id)}><EditIcon/></button>
        <button className="delete-button" onClick={() => onDelete(id)}><DeleteIcon/></button>
        
      </td>
    </tr>
  );
}

export default ProductListItem;
