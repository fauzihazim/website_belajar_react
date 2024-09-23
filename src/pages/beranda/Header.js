import { useMediaQuery } from "@uidotdev/usehooks";
import './styles/Header.css';

export default function Header() {
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    return (
        <>
            <header className={bigScreenDevice ? "isBigScreen header" : "isSmallScreen header"}>
                <nav className="navbar">
                    <img className="nav-logo" src="../logo.png" alt="logo video belajar" />
                    <ul className="account nav-menu" style={{ margin: 0 }}>
                    <li className="kategori nav-item">
                        <a className="nav-link" href="#">
                        Kategori
                        </a>
                    </li>
                        <li className="liUserPhoto nav-item">
                            <img className="nav-link userPhoto" src="../image.png" alt="" srcSet="" />
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </nav>
            </header>
        </>
    )
}