import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@uidotdev/usehooks";
import './styles/Header.css';
import useLink from '../../store/zustand/Store';
import { GetData, DeleteData } from '../../services/api';

export default function Header() {
    const navigate = useNavigate();
    const users = useLink((state) => state.users);
    const getAllUsers = useLink((state) => state.getAllUsers);
    const selectedUser = useLink((state) => state.selectedUser);
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");

    const goToLogin = () => {
        navigate('/');
    }

    getAllUsers(GetData());

    const deleteAccount = () => {
        DeleteData(selectedUser.id, users);
        goToLogin();
    }
    
    return (
        <>
            <header className={bigScreenDevice ? "isBigScreen header" : "isSmallScreen header"}>
                <nav className="navbar">
                    <img className="nav-logo" src="../logo.png" alt="logo video belajar" />
                    <ul className="account nav-menu" style={{ margin: 0 }}>
                        <li className="kategori nav-item" style={{ marginRight:5 }}>
                            <button style={{ textDecoration: 'none' }} className="nav-link" onClick={() => deleteAccount()}>{selectedUser.namaLengkap}</button>
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