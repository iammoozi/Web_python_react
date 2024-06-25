import React from 'react';
import './HomePage.css';

import Animmate from '../banner/Homebanner';
import Shopping from '../shopping/Slist';
import Emoji from '../shopping/Emoji';
import './hearticon.css';
import HeaderBar from './headerBar';

export default function HomePage(){
 
    return ( 
        <>
            <div>
                <HeaderBar/>
            </div>
             <div>
                <Animmate/>
            </div> 
            <div>
                <Emoji/>
            </div>
            <div>
                <Shopping/>
            </div>
        </>
    )
}