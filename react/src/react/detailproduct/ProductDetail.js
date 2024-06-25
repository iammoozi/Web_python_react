import React , {useState} from 'react';
import './ProductDetail.css';
import HeaderBar from '../headerComponent/headerBar';
//import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {

    const[quantity, setQuantity] = useState(1);
    
    const handleIncrement = () => {
      setQuantity(prevQuantitiy => prevQuantitiy + 1);
    };
    const handleDecrement = () => {
      if(quantity>1){
        setQuantity(prevQuantitiy => prevQuantitiy -1);
      }
    }
  

  return (  
   <>
    <HeaderBar/>
    <div className="product-detail">
      <div className="product-image-section">
        <img
          src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/4ef7342d-b489-4725-b237-b7f47f25a6c2.jpg"
          srcSet="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/4ef7342d-b489-4725-b237-b7f47f25a6c2.jpg 1x, https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=1440,height=1872,quality=85/product/image/4ef7342d-b489-4725-b237-b7f47f25a6c2.jpg 2x"
          alt="Product"
          className="product-image"
        />
      </div>
      <div className="product-info-section">
        <h1 className="product-title">[금주의라면] 농심 라면 7종 골라담기(택3)</h1>
        <div className="product-price">
          <span className="discount">26%</span>
          <span className="price">3,900원</span>
          <span className="original-price">5,300원</span>
        </div>
        <div className="product-description">
          <p>원산지: 상품설명/상세정보 참조</p>
          <p>로그인 후, 적립 혜택이 제공됩니다.</p>
        </div>
        
        <div className="product-details">
          <div data-label="배송:"><span>샛별배송</span></div>
            <div data-label="판매자:"><span>컬리</span></div>
            <div data-label="포장타입:"><span></span></div>
            <div data-label="판매단위:"><span></span></div>
            <div data-label="중량/용량:"><span></span></div>
            <div data-label="알레르기정보:"><span></span></div>
            <div data-label="소비기한(또는 유통기한)정보:"><span>출고일 기준, 소비기한 만기 185일 이상 남은 상품을 보내드립니다.</span></div>
            <div className="product-option-detail" data-label="상품선택: ">
              <span>[하코야] 살얼음 동동 냉메밀소바 2인분 (메밀함량 40%)</span>
              <div className="quantity-control">
                <button onClick={handleDecrement} className="quantity-button">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={handleIncrement} className="quantity-button">+</button>
              </div>
          </div>
        </div>

        <div className='product-summary'>
          <div className='total-price'>
            <span>총 상품금액: </span>
            <span className='price-amout'>0원</span>
          </div>
        </div>
        <button className='add-to-cart-button'>장바구니 담기</button>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
