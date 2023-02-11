import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import SignUp from 'components/Login/SignUp';
import React from 'react';

const signup = () => {
    return (
        <>
         <Header/>
            <SignUp/>
         <Footer/>   
        </>
    );
};

export default signup;