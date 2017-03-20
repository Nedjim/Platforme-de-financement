import React from 'react';
import { Link } from 'react-router';


import './header.scss';
import logo from '../images/banner2.png';


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
                <button type="button">Recherche</button>
              </div>
            </div>

            <div className="second">
              <ul className="menu">
                <li><a href="#">À propos de nous</a></li>
                <li><Link to="/projects">Toutes les projets</Link></li>
                <li><a href="#">Comment ca marche?</a></li>
                <Link to="/project">Proposer un projet</Link>
                <li><a href="#">Forum de discution</a></li>
              </ul>
            </div>
          </nav>

        </header>
    )
  }
}
