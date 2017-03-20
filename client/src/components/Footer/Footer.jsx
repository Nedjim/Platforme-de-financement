import React from 'react';
import './Footer.scss';
import './Footer.js';
import img1 from '../images/prj1.jpg';
import img2 from '../images/prj2.jpg';
import img3 from '../images/prj3.jpg';
// import img1 from '../images/trdelnik.jpg';
// import img1 from '../images/logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-wrap">
                    <div className="Footer">
                        <div className="three">
                            <div className="col1">
                                <div>
                                    <h3>Financé et en ligne</h3>
                                </div>
                                <div className="cont">
                                    <div>
                                        <img src={img1} alt=""/>
                                        <p>Entre le déclin des lumières et le levé des ombres, charnière de deux mondes, le crépuscule s’installe. Certains s'endorment et d'autres s'éveillent, fenêtre du temps où toutes les rencontres sont alors possibles. A pas feutrés jusqu’au cœur de la nuit, laissez le lynx vous guider.</p>
                                    </div>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>Crépuscules</td>
                                        </tr>

                                        <tr>
                                            <th>progrès:</th>
                                            <td>
                                                <progress value="100" max="100"></progress>
                                            </td>
                                        </tr>
                                    </table>
                                    <button>FAIRE UN DON</button>
                                    <a>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </a>
                                    <button>TOUT AFFICHER</button>
                                </div>
                            </div>
                            <hr className="vr"/>

                            <div className="col1">
                                <div>
                                    <h3>En cours de financement</h3>
                                </div>
                                <div className="cont">
                                    <div>
                                        <img src={img2} alt=""/>

                                        <p>Les enfants, petits et grands, les enfants d'alentour et des plus hautes tours y courent, y courent s'y installent pour toujours, pour… presque toujours !</p>
                                    </div>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>LUCIOLE</td>
                                        </tr>
                                        <tr>
                                            <th>progrès:</th>
                                            <td>
                                                <progress value="60" max="100"></progress>
                                            </td>
                                        </tr>
                                    </table>
                                    <button>FAIRE UN DON</button>
                                    <a>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </a>
                                    <button>TOUT AFFICHER</button>
                                </div>
                            </div>
                            <hr className="vr"/>

                            <div className="col1">
                                <div>
                                    <h3>Projet recént</h3>
                                </div>
                                <div className="cont">
                                    <div>
                                        <img src={img3} alt=""/>
                                        <p>Après le 1er potager d'open space, nous avons conçu un potager d'intérieur pour la maison : Jean Racine, le potager cultivé. L'objectif du financement participatif est de rendre possible sa commercialisation.</p>
                                    </div>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>Ciel mon radis !</td>
                                        </tr>
                                        <tr>
                                            <th>progrès:</th>
                                            <td>
                                                <progress value="30" max="100"></progress>
                                            </td>
                                        </tr>
                                    </table>
                                    <button>FAIRE UN DON</button>
                                    <a>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </a>
                                    <button>TOUT AFFICHER</button>
                                </div>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="footer-text">
                                <hr className="vr"/>

                                <div className="text1">
                                    <h3>Qui sommes-nous ?</h3>
                                    <ul>
                                        <li>
                                            <a>-Les Partenaires</a>
                                        </li>
                                        <li>
                                            <a>-L’équipe</a>
                                        </li>
                                        <li>
                                            <a>-FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="vr"/>
                                <div className="text1">
                                    <h3>Footer</h3>
                                    <ul>
                                        <li>
                                            <a>-Les Partenaires</a>
                                        </li>
                                        <li>
                                            <a>-L’équipe</a>
                                        </li>
                                        <li>
                                            <a>-FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="vr"/>

                                <div className="text1">
                                    <h3>Contacter nous</h3>
                                    <ul>
                                        <li>
                                            <a>-Les Partenaires</a>
                                        </li>
                                        <li>
                                            <a>-L’équipe</a>
                                        </li>
                                        <li>
                                            <a>-FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="vr"/>
                            </div>
                            <hr/>
                            <div className="base">
                                <div>
                                    <p>
                                        <strong>
                                            <a>KickAssStarter</a>
                                        </strong><br/>&copy;2017</p>
                                </div>
                                <div className="footer-icon">
                                    <ul className="footer-icon">
                                        <li>
                                            <a>
                                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lang">
                                    <a>
                                        <i className="fa fa-language" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
