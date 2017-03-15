import React from 'react';
import './header.scss';

import logo from '../images/banner.png';


export default class Header extends React.Component {
  render(){
    return(
      <header>
        <nav>
          <div className="premier">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="utilites">
              <input type="search" placeholder="Rechercher"></input>
              <button type="button">Se connecter</button>
            </div>
          </div>

          <div className="second">
            <ul className="menu">
              <li><a href="#">À propos de nous</a></li>
              <li><a href="#">Toutes les projets</a></li>
              <li><a href="#">Comment ca marche?</a></li>
              <li><a href="#">Proposer un projet</a></li>
              <li><a href="#">Forum de discution</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
