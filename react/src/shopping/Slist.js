import React from "react";
import './Slist.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";



export default function Shopping() {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate('/detail');
    }
    
    return(
        
        <div className="whole-container">
            <div className="container1">
                <img alt ="food1"
                className="img1" 
                src ="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/6566e209-8ade-43c6-af94-01168edf495b.jpg"
                onClick={handleDetail}>
                </img>
                <Button variant="outlined" className="sbtn" startIcon={<PiShoppingCart/>} style={{borderColor: 'rgh(221,221,221)'}}>담기</Button>
            </div>
            <div className="container1">
                <img alt ="food2" className="img2" src="https://img-cf.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/shop/data/goods/1637928754131l0.jpg"></img>
                <Button variant="outlined" className="sbtn" startIcon={<PiShoppingCart/>}>담기</Button>
            </div>
            <div className="container1">
                <img alt ="food3" className="img3" src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/dd17288f-5e81-414c-a334-92011e028405.jpg"></img>
                <Button variant="outlined" className="sbtn" startIcon={<PiShoppingCart/>} >담기</Button>
            </div>
            <div className="container1">
                <img alt ="food4" className="img4" src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/cd090e3f-9939-4524-a1e6-fad2a81e21e6.jpg"></img>
                <Button variant="outlined" className="sbtn" startIcon={<PiShoppingCart/>}  >담기</Button>
            </div>
        </div>

        
        
    )

}   