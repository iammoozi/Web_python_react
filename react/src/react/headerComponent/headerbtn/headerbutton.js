import React, { useState, useEffect } from 'react';
import './headerbutton.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function Headerbutton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [authority, setAuthority] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedAuthority = localStorage.getItem('authority');
    if (token && storedUsername && storedAuthority) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setAuthority(storedAuthority);
    }
  }, []);

  const handleSignUpClick = () => {
    console.log('회원가입 버튼 클릭');
    navigate('/signup');
  };

  const handleLoginClick = () => {
    console.log('로그인 버튼 클릭');
    navigate('/login');
  };

  const handleLogoutClick = () => {
    console.log('로그아웃 버튼 클릭');
    localStorage.removeItem('token'); // 토큰 제거
    localStorage.removeItem('username'); // 사용자 이름 제거
    localStorage.removeItem('authority'); // 권한 제거
    setIsLoggedIn(false);
    setUsername('');
    setAuthority('');
  };

  const handleSupportClick = () => {
    console.log('고객센터 버튼 클릭');
  };
  const handleManageClick = () => {
    navigate('/manage');
  }

  return (
    <div className="header-buttons">
      {isLoggedIn ? (
        <>
          <div className="username">안녕하세요, {username}님</div>
          <Button variant="text" onClick={handleLogoutClick}>로그아웃</Button>
          {authority === 'admin' && (
            <Button className="adminpage" variant="text" onClick={handleManageClick} >관리자페이지</Button>
          )}
          {authority === 'user' && (
            <Button className="mypage" variant="text">마이페이지</Button>
          )}
        </>
      ) : (
        <>
          <Button className="signup" variant="text" onClick={handleSignUpClick}>회원가입</Button>
          <Button variant="text" onClick={handleLoginClick}>로그인</Button>
        </>
      )}
      <Button variant="text" onClick={handleSupportClick}>고객센터</Button>
    </div>
  );
}
