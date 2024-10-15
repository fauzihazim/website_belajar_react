import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@uidotdev/usehooks";
import './styles/Header.css';
import useUser from "../../data/UseUser";

export default function Header() {
    const items = useUser((state) => state.items);
    const deleteItem = useUser((state) => state.deleteItem);
    const selectedUser = useUser((state) => state.selectedUser);
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/');
    }

    const deleteAccount = (index) => {
        console.log("The index is :", index);
        const halo = deleteItem(selectedUser[0].email);
        goToLogin();
    }
    return (
        <>
            <header className={bigScreenDevice ? "isBigScreen header" : "isSmallScreen header"}>
                <nav className="navbar">
                    <img className="nav-logo" src="../logo.png" alt="logo video belajar" />
                    <ul className="account nav-menu" style={{ margin: 0 }}>
                        <li className="kategori nav-item" style={{ marginRight:5 }}>
                            <a style={{ textDecoration: 'none' }} className="nav-link" onClick={() => deleteAccount(selectedUser[0].email)}>{selectedUser[0].namaLengkap}</a>
                        </li>
                        <li className="liUserPhoto nav-item">
                            <img className="nav-link userPhoto" src="../image.png" alt="" srcSet="" style={{ float:"right" }} />
                        </li>
                    </ul>
                    <div className="hamburger hid">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </nav>
            </header>
        </>
    )
}