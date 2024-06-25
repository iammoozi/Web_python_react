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

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

export default function HeaderBar(){

    return (
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
          <IconButton>
            <PiShoppingCartLight style={{ fontSize: '30px', color: "black" }} />
          </IconButton>
        </IconContainer>
      </HeaderMiddle>
      
      <Category />
    </Container >
    )
}