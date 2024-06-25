import React from 'react';
import styled from 'styled-components';
import Category from '../category/Category';
import Logo from './Logo';
import SearchBar from './search/SearchBar';
import Headerbutton from './headerbtn/headerbutton';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

// 외부 컨테이너 스타일 정의
const OuterContainer = styled.div`
  width: 100%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); /* 아래 방향으로 그림자 */
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0px 0px 0px 1px solid #ddd; /* 하단에만 선을 추가 */
`;

// 내부 컨테이너 스타일 정의
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// // 헤더 상단 부분 스타일 정의
// const HeaderTop = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-bottom: 10px;
// `;
const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬로 변경 */
  align-items: center;
  margin-bottom: 10px;
  margin-left: 400px; /* 왼쪽으로 이동 */
`;
// 헤더 중간 부분 스타일 정의
const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 20px; /* 간격 추가 */
`;

// 로고 컨테이너 스타일 정의
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px; /* 서치바와의 간격 조정 */
  margin-left: 100px;
`;

// 아이콘 컨테이너 스타일 정의
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px; /* 서치바와의 간격 조정 */
  margin-right: 100px;
`;

// 카테고리 스타일 정의
const CategoryContainer = styled.div`
  position: relative;
  top: -45px; /* 서치바와의 간격 조정 */
`;

export default function HeaderBar() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/ShopCart');
  }

  return (
      <OuterContainer>
        <Container>
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
              <IconButton onClick={handleCartClick}>
                <PiShoppingCartLight style={{ fontSize: '30px', color: "black" }} />
              </IconButton>
            </IconContainer>
          </HeaderMiddle>
          <CategoryContainer>
            <Category />
          </CategoryContainer>
        </Container>
        {/* <Footer /> */}
      </OuterContainer>
  )
}
