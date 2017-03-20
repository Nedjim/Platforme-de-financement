import React from 'react';
import './Footer.scss';
import './Footer.js';
import img1 from '../images/sfr.jpg';
import img2 from '../images/trdelnik.jpg';


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
                                    <img src={img1} alt=""/>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>blaaablaaa</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td>lorem paragraph text ljkjdhdolwiufiicjejlicukl</td>
                                        </tr>
                                        <tr>
                                            <th>progrès:</th>
                                            <td>
                                                <progress value="50" max="100"></progress>
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
                                    <img src={img1} alt=""/>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>blaaablaaa</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td>lorem paragraph text ljkjdhdolwiufiicjejlicukl</td>
                                        </tr>
                                        <tr>
                                            <th>progrès:</th>
                                            <td>
                                                <progress value="20" max="100"></progress>
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
                                    <img src={img1} alt=""/>
                                    <table>
                                        <tr>
                                            <th>Nom de projet:</th>
                                            <td>blaaablaaa</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td>lorem paragraph text ljkjdhdolwiufiicjejlicukl</td>
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
