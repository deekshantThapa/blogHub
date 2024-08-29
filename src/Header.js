import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <div className="hgroup-wrap">
                <div className="container">
                    <div className="hgroup-content-wrap">
                        <div className="site-branding">
                            <Link to='/'>Blog Hub</Link>
                        </div>
                        <div className="hgroup-right">
                            <div id="navbar" className="navbar">
                                <nav className="navigation">
                                    <div className="menu-top-menu-container">
                                        <ul>
                                            <li><Link to='/about'>About</Link></li>
                                            <li><Link to='/contact'>Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;