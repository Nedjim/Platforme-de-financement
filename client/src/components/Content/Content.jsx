import React from 'react';
import './content.scss';
import image from '../images/imgtest.jpg';


export default class Content extends React.Component {
    render() {
        return (
            <div id='content'>

            <div className="TopProjet">
                <h1>
                    Projet du Jour
                </h1>
            </div>

            <div className="content-1">
            <div className="limagedutop"> <img src={image}/></div>

            <div className="imgtopprojet"></div>
            <ul>
                <li>
                    Nom du Projet:
                </li>
                <li>
                    Description:
                </li>
                <li> Lieux: </li>
                <li> Budget Necessaire: </li>
            </ul>

            <div className="buttontop">
                <progress value="25" max="100"></progress>
                <button>Votez</button>
                <button>Faire un don</button>

            </div>
        </div>
      </div>


        )
    }
}
