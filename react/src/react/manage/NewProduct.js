import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewProduct.css';

function NewProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://study.aiclub.kr:8002/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('product_name', productName);
    formData.append('product_price', productPrice);
    formData.append('description', description);
    formData.append('product_image', productImage);
    formData.append('quantity', quantity);
    formData.append('categories', selectedCategory);
  
    try {
      const response = await axios.post('http://study.aiclub.kr:8002/add_product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        navigate('/manage');
      } else {
        setErrorMessage('제품이 추가되지 않았습니다.');
      }
    } catch (error) {
      console.error('제품 추가 실패:', error);
      setErrorMessage('제품이 추가되지 않았습니다.');
    }
  };

  return (
    <div className="new-product-container">
      <h1>제품 추가 페이지</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>제품명:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>가격:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>설명:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>이미지:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <label>수량:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>카테고리:</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-button">제품 추가</button>
      </form>
    </div>
  );
}

export default NewProduct;
