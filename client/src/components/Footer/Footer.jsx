import React from 'react';
import './Footer.scss';
import './material-ui';
export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-wrap">
                    <div className="Footer">
                        <h2><a href="">KickAssStarter</a></h2>
                        <div className="three">
                          <div className="col1">
                            <h3>financed</h3>
                            <div className="cont">
                              <img src="" alt=""/>
                              <p>lorem paragraph text ljkjdhdolwiufiicjejlicukl</p>
                            </div>
                          </div>
                          <div className="col1"><h3>oncourse</h3></div>
                          <div className="col1"><h3>latest</h3></div>
                        </div>

                        <hr/>
                        <div className="wrap">

                        <div className="footer-text">
                            <div className="text1">
                                <h3>Footer</h3>
                                <ul>
                                    <li>someText</li>
                                    <li>someText</li>
                                    <li>someText</li>
                                </ul>
                            </div>
                            <div className="text1">
                                <h3>Footer</h3>
                                <ul>
                                    <li>someText</li>
                                    <li>someText</li>
                                    <li>someText</li>
                                </ul>
                            </div>
                            <div className="text1">
                                <h3>Footer</h3>
                                <ul>
                                    <li>asomeText</li>
                                    <li>someText</li>
                                    <li>someText</li>
                                </ul>
                            </div>
                        </div>

                        <hr/>

                        <div className="base">
                            <div>
                                <p><strong>KickAssStarter</strong><br/>&copy;2017</p>
                            </div>
                            <div className="footer-icon">
                                <ul className="footer-icon">
                                    <li>
                                        <a>
                                            <i className=
                                              "fa fa-facebook-official" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                              <a href="">

                                <button>
                                        <div>FR</div>
                                        <div className="lang">
                                          <ul>
                                            <li>Francaise</li>
                                            <li>English</li>
                                          </ul>
                                        </div>
                                </button>
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
