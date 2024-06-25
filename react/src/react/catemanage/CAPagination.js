import React from 'react';
import './CAPaginations.css';

const CAPagination = () => {
  return (
    <div className="pagination">
      <button>{'<'}</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>{'>'}</button>
    </div>
  );
}

export default CAPagination;
