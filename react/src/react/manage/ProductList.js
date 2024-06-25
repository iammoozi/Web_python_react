import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from './ProductListItem';
import Pagination from './Pagination';
import ProductRegist from './ProductRegist';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://study.aiclub.kr:8002/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("제품을 불러오는 데 실패했습니다:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="product-list">
      <ProductRegist fetchProducts={fetchProducts} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>제품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>설명</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(product => (
            <ProductListItem
              key={product.product_id}
              id={product.product_id}
              productName={product.product_name}
              quantity={product.quantity}
              price={product.product_price}
              description={product.description}
              category={product.category_name}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
