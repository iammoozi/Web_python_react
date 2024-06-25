import React from 'react';
import './ProductRegistration.css';
import  {useState} from 'react';

const ProductRegistration = ({onAddProduct, onSearch}) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //상품 등록 핸들러
  const handleAddProduct = () => {
    if(productName && quantity) {
      onAddProduct({id : Date.now(), productName, quantity: parseInt(quantity)});
      setProductName('');
      setQuantity('');
    }else{
      alert('모든 필드를 입력해주세요');
    }
  };

// 검색어 핸들러
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if(onSearch){
    onSearch(e.target.value); //onsearch prop 호출
    }
  };

  return (
    <div className="product-registration">
      {/* 검색 입력 필드 */}
      <input
        type='text'
        placeholder='검색...'
        value={searchTerm}
        onChange={handleSearch}
        className='search-input'
        />
        {/* 검색 버튼 */}
      <button className="search-button" onClick={handleSearch}>검색하기</button>
      {/* 상품명 입력 필드 */}
      <input
        type="text"
        placeholder="상품명"
        value = {productName}
        onChange = {(e)=> setProductName(e.target.value)}
        className = "input-field"
      />
      {/* 수량 입력 필드 */}
      <input
        type = "number"
        placeholder='수량'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className='input-field'
        />

      <button className="register-button" onClick={handleAddProduct}>상품등록</button>
      {/* <input type="text" placeholder="Search..." className="search-input" /> */}
    </div>
  );
}

export default ProductRegistration;
