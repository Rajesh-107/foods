import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Allusers from 'components/Login/Allusers';
import React from 'react';

const alluser = () => {
    return (
        <>
            <Header/>
              <Allusers/>
            <Footer/>
        </>
    );
};

export default alluser;