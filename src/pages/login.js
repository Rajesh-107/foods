import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Login from 'components/Login/Login';
import React from 'react';

const login = () => {
    return (
        <>
            <Header/>
                <Login/>
            <Footer/>
        </>
    );
};

export default login;