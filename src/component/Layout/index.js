import React from 'react';
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
};

export default Layout;