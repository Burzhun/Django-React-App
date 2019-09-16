import React, {useEffect} from 'react';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import '../static/app.css';


const Layout = function (props) {

    // useEffect(() => {
    //     document.body.className = 'index-page';
    // }, []);

    return (
        <Container>
            <Header/>
            {props.children}
            <Footer/>
        </Container>
    )
};

export default Layout;