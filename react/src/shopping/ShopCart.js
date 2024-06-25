import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../headerComponent/Logo';

import SearchBar from '../headerComponent/search/SearchBar';

import Headerbutton from '../headerComponent/headerbtn/headerbutton';

import Category from '../category/Category';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

import IconButton from '@mui/material/IconButton';


import '../headerComponent/hearticon.css';
// 스타일 컴포넌트 정의

const Cart = styled.div`
  font-family: 'Arial, sans-serif';
  margin: 20px;
`;

// CartContainer는 flexbox 레이아웃을 사용하여 컨테이너 안의 요소들을 나란히 배치합니다.
const CartContainer = styled.div`
  display: flex; // flexbox 레이아웃 사용
  justify-content: space-between; // 자식 요소들 사이에 공간을 고르게 분배
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; // 가로로 가운데 정렬
  
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

// CartContent는 장바구니 항목들을 담고 있는 섹션입니다.
const CartContent = styled.div`
  flex: 2; // flex-grow: 2로 설정하여 남은 공간의 2/3을 차지
  margin-right: 20px; // 오른쪽에 20px 간격
`;

// CartHeader는 장바구니의 헤더 부분입니다.
const CartHeader = styled.div`
  background-color: #f9f9f9; // 배경색
  padding: 10px; // 안쪽 여백
  border: 1px solid #ddd; // 테두리
  margin-bottom: 10px; // 아래쪽 여백

  div {
    display: flex; // 안쪽 div 요소도 flexbox 사용
    align-items: center; // 세로로 가운데 정렬
  }

  input {
    margin-right: 10px; // 오른쪽에 10px 간격
  }
`;

// CartBody는 장바구니의 본문 부분입니다.
const CartBody = styled.div`
  min-height: 200px; // 최소 높이 200px
  border: 1px solid #ddd; // 테두리
  display: flex; // flexbox 사용
  align-items: center; // 세로로 가운데 정렬
  justify-content: center; // 가로로 가운데 정렬

  p {
    margin: 0; // p 태그에 대한 기본 여백 제거
  }
`;

// CartSummary는 오른쪽에 위치한 배송지 요약 섹션입니다.
const CartSummary = styled.div`
  flex: 1; // flex-grow: 1로 설정하여 남은 공간의 1/3을 차지
  background-color: #f9f9f9; // 배경색
  padding: 10px; // 안쪽 여백
  border: 1px solid #ddd; // 테두리
  margin-bottom: 10px; // 아래쪽 여백

  h3 {
    margin: 0 0 10px 0; // 위쪽 여백 제거, 아래쪽 여백 10px
  }

  p {
    margin: 5px 0; // 위아래 여백 5px
  }

  .summary-details p {
    display: flex; // flexbox 사용
    justify-content: space-between; // 자식 요소들 사이에 공간을 고르게 분배
  }
`;

// Button 컴포넌트는 일반 버튼입니다.
const Button = styled.button`
  margin-top: 10px; // 위쪽에 10px 간격
  padding: 5px 10px; // 상하 5px, 좌우 10px의 안쪽 여백
  background-color: #6200ea; // 배경색
  color: white; // 글자색
  border: none; // 테두리 제거
  cursor: pointer; // 마우스를 올리면 포인터 커서로 변경

  &:hover {
    background-color: #3700b3; // 호버 시 배경색
  }
`;

// React 컴포넌트 정의
function ShopCart() {
  const [address, setAddress] = useState("부산 부산진구 연광로 210-1 (대동빌라) 대동빌라 A동 302호");
  const [items, setItems] = useState([]);

  const handleChangeAddress = () => {
    const newAddress = prompt("Enter new address:", address);
    if (newAddress) setAddress(newAddress);
  };

  return (
    <Cart>
        <HeaderTop> 
        <Headerbutton />
      </HeaderTop>
      <HeaderMiddle>
        <LogoContainer>
          <Logo />
        </LogoContainer>
          <SearchBar />
        <IconContainer>
          <IconButton>
            <IoLocationOutline style={{ marginRight: '10px', fontSize: '30px', color: "black" }} />
          </IconButton>
          <IconButton>
            <IoIosHeartEmpty style={{ marginRight: '10px', fontSize: '30px', color: "black" }} />
          </IconButton>
          <IconButton>
            <PiShoppingCartLight style={{ fontSize: '30px', color: "black" }} />
          </IconButton>
        </IconContainer>
      </HeaderMiddle>
      
      <Category />


      <CartContainer>
        <CartContent>
          <h2>장바구니</h2>
          <CartHeader>
            <div>
              <input type="checkbox" /> 전체선택 (0/0) | 선택삭제
            </div>
          </CartHeader>
          <CartBody>
            {items.length === 0 ? (
              <p>장바구니에 담긴 상품이 없습니다</p>
            ) : (
              items.map((item, index) => <div key={index}>{item}</div>)
            )}
          </CartBody>
        </CartContent>
        <CartSummary>
          <h3>배송지</h3>
          <p>{address}</p>
          <Button onClick={handleChangeAddress}>배송지 변경</Button>
          <div className="summary-details">
            <p>상품금액: 0원</p>
            <p>상품할인금액: 0원</p>
            <p>배송비: 0원</p>
            <p>결제예정금액: 0원</p>
          </div>
        </CartSummary>
      </CartContainer>
    </Cart>
  );
}

export default ShopCart;
