import React from "react";
import Button from '@mui/material/Button';
import './Category.css';
//import ToggleButton from '@mui/material/ToggleButton';

export default function Category(){
    const handleCategory = () => {
        console.log("카테고리 버튼 클릭");
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

    return(

        // <div className="togglebtn">
        //  <ToggleButton value="center" aria-label="centered">
        //  <FormatAlignCenterIcon />
        //   </ToggleButton>
        // </div>
        
        <div className="categorry">
           <Button variant ="text" onClick={handleCategory}>카테고리</Button>
           <Button variant ="text" onClick={handleBest}>베스트</Button>
           <Button variant ="text" onClick={handleALD}>알뜰쇼핑</Button>
           <Button variant ="text" onClick={handleSale}>특가/혜택</Button>
        </div>
    )

} 