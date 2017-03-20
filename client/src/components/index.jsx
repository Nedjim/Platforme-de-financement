import React from 'react';
import Header from './Header/Header.jsx';
import Carousel from './carousel/Carousel.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import Pcomponents from './Projets/projectsComponents.jsx';


export default class Index extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Carousel />
                <Content />
                <Footer />
                <Pcomponents/>
            </div>
        )
    }
}
