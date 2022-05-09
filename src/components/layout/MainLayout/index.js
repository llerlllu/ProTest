import React from "react";

import {Header, Footer} from '../../common/'

import "./style.scss";

function MainLayout({children}) {
    return (
        <div className='main'>
            <Header/>
            <div className='main__body'>{children}</div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
