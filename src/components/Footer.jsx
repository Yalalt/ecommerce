import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="first-item">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/images/white-logo.png" alt="hexashop ecommerce templatemo" />
                                </Link>
                            </div>
                            <ul>
                                <li><Link to="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</Link></li>
                                <li><Link to="#">hexashop@company.com</Link></li>
                                <li><Link to="#">010-020-0340</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h4>Хэрэгцээт холбоос</h4>
                        <ul>
                            <li><Link to="/">Нүүр</Link></li>
                            <li><Link to="/about">Бидний тухай</Link></li>
                            <li><Link to="#">Тусламж</Link></li>
                            <li><Link to="#">Холбоо барих</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-12">
                        <div className="under-footer">
                            <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                                <br />Design: <Link to="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</Link></p>
                            <ul>
                                <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                                <li><Link to="#"><i className="fa fa-behance" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}