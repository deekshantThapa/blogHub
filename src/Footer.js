import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="widget-area">
                    <aside className="widget">
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </aside>
                    <div className="newsletter">
                        <header className="entry-header heading">
                            <h5 className="entry-title">Newsletter</h5>
                            <span>Sign up now; get closer to our action.</span>
                        </header>
                        <div className="input-wrap">
                            <input type="email" name="" id="" />
                            <input type="submit" value="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;