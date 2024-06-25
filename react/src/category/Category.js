
import React from "react";
import Button from '@mui/material/Button';
import styled from 'styled-components';

const CategoryContainer = styled.div`
    .categorry {
        display: flex;
        gap: 100px;
        margin-left: 20%;
        margin-top: 50px;
    }

    .categorry button {
        color: black;
        font-size: 15px;
        font-weight: bold;
    }

    .footer-border {
        border-top: 1px solid #ddd;
        margin-top: 20px; /* 버튼과 테두리 사이의 간격 */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 그림자 추가 */

    }
`;

export default function Category() {
    const handleNew = () => {
        console.log("신상품 버튼 클릭");
    };
    
    const handleBest = () => {
        console.log("베스트 버튼 클릭");
    };

    const handleALD = () => {
        console.log("알뜰쇼핑 버튼 클릭");
    };
    
    const handleSale = () => {
        console.log("특가/혜택 버튼 클릭");
    };

    return (
        <CategoryContainer>
            <div className="categorry">
                <Button variant="text" onClick={handleNew}>신상품</Button>
                <Button variant="text" onClick={handleBest}>베스트</Button>
                <Button variant="text" onClick={handleALD}>알뜰쇼핑</Button>
                <Button variant="text" onClick={handleSale}>특가/혜택</Button>
            </div>
            <div className="footer-border"></div>
        </CategoryContainer>
    );
}
