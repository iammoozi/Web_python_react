import React, { useState } from 'react';
import ProductListItem from './ProductListItem';
import Pagination from './Pagination';
import './ProductList.css';
import ProductRegistration from './ProductRegistration';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: '불닭볶음면', quantity: 100 },
    { id: 2, productName: '신라면', quantity: 50 },
    { id: 3, productName: '햇반 10묶음', quantity: 100 },
    { id: 4, productName: '감자 10kg', quantity: 30 },
    { id: 5, productName: '불닭볶음면', quantity: 100 },
    { id: 6, productName: '신라면', quantity: 50 },
    { id: 7, productName: '햇반 10묶음', quantity: 100 },
    { id: 8, productName: '불닭볶음면', quantity: 100 },
    { id: 9, productName: '신라면', quantity: 50 },
    { id: 10, productName: '햇반 10묶음', quantity: 100 },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); //검색어 상태
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);

// 페이지 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const getNextId = () =>{
    return products.length > 0 ? Math.max(products.map(p => p.id)) + 1 : 1;
  }
// 상품 추가 핸들러
  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: getNextId() };
    setProducts([...products, newProduct]);
  };

  // 상품 수정 핸들러
  const handleEditProduct = (id) => {
    const newProductName = prompt ('새로운 상품명을 입력하세요: ');
    const newQuantity = prompt('새로운 수량을 입력하세요: ');
    setProducts(products.map(product=>
      product.id === id ? { ... product, productName: newProductName, quantity: parseInt(newQuantity) } : product
    ));
  }
// 상품 삭제 핸들러
  const handleDeleteproduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
// 검색어 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term); //검색어 상태 업데이트
  }
// 검색어에 따라 필터링된 상품 리스트
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 현재 페이지에 표시할 상품 리스트
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="product-list">
      {/* 상품 등록 컴포넌트에 onAddProduct와 onSearch prop 전달 */}
      <ProductRegistration onAddProduct={handleAddProduct} onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map(product => (
            <ProductListItem
              key={product.id}
              id={product.id}
              productName={product.productName}
              quantity={product.quantity}
              price={product.price}
              onEdit={handleEditProduct}
              onDelete={handleDeleteproduct}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
