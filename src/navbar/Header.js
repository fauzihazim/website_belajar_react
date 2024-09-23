import { useMediaQuery } from "@uidotdev/usehooks";
import './Header.css';

export default function Header() {
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    return (
        <>
            <div className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                <header className="header">
                    <nav className="navbar">
                        <img className="nav-logo" src="../logo.png" alt="logo video belajar" />
                        {/* <ul className="nav-menu" style={{ margin: 0 }}>
                            <li className="login nav-item">
                                <a className="nav-link" href="/">
                                Login
                                </a>
                            </li>
                            <li className="register nav-item">
                                <a className="nav-link" href="/register">
                                Register
                                </a>
                            </li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </div> */}
                    </nav>
                </header>
            </div>
        </>
    )
}