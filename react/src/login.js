
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './headerComponent/hearticon.css';
import './style.css';
import HeaderBar from './headerComponent/headerBar';
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 320px;
  padding: 10px;
  margin: 10px 0;
  background-color: #5f0080;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #5f0080;
  border: 1px solid #5f0080;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: 50px;
`;

function LoginP() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // 로그인 로직을 여기에 추가합니다
    console.log('로그인 버튼 클릭');
    // navigate('/'); // 로그인 후 메인 페이지로 이동
  };

  const handleSingUpClick = () => {
    navigate('/signup');
  }
  return (

     <Container>
      <HeaderBar />
      <LoginContainer>
        <h2>로그인</h2>
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Button className="loginbtn"onClick={handleLoginClick}>로그인</Button>
        <OutlineButton className="signupbtn" onClick={handleSingUpClick}>회원가입</OutlineButton>
      </LoginContainer>
      <Footer>
        <div>Site name</div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}

export default LoginP;



