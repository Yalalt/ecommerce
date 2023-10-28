import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationContext } from './Layout';

export default function Header() {
    const { basket } = useContext(ApplicationContext);

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link to="/" className="logo">
                                <img src="/images/logo.png" />
                            </Link>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li className="scroll-to-section">
                                    <Link key={'homeButtonfgfjkeg'} to="/" className="active">Нүүр</Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link key={'addToCardButtondjhceds'} to="/shopping-card" className="active">Сагс: {basket.length}</Link>
                                </li>
                            </ul>
                            <Link className="menu-trigger">
                                <span>Menu</span>
                            </Link>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}