import React from 'react';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import Pcomponents from './Projets/projectsComponents.jsx';


export default class Index extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Footer />
                <Pcomponents/>
            </div>
        )
    }
}
