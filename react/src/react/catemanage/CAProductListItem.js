import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './CAProductListItem.css';

const CAProductListItem = ({ id, Name}) => {
  return (
    <tr className="product-list-item">
      <td>{id}</td>
      <td>{Name}</td>
      <td className="price">
        <button className="edit-button"><EditIcon/></button>
        <button className="delete-button"><DeleteIcon/></button>
      </td>

    </tr>
  );
}

export default CAProductListItem;
