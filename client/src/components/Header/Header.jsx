import React from 'react';
import './header.scss';

import trd from '../images/tridelnik.jpg';


export default class Header extends React.Component {
    render(){
        return(
            <header>
                <h1>Header</h1>
                <img src={trd}></img>


            </header>
        )
    }
}
