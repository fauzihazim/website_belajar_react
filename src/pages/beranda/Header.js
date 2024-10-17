import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@uidotdev/usehooks";
import './styles/Header.css';
import useLink from '../../data/UseLink';

export default function Header() {
    const selectedUser = useLink((state) => state.selectedUser);
    const selectUserByEmail = useLink((state) => state.selectUserByEmail);
    const linkDelete = useLink((state) => state.linkDelete);
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/');
    }

    const deleteAccount = async (index) => {
        console.log("The index is :", index);
        console.log("Link deleted : ", linkDelete+index);
        
        // Deleted user
        let response = await fetch(
            linkDelete+index,
            {
               method: 'DELETE',
            }
         );
         if (response.status === 200) {
            console.log("deleted successfully");
            selectUserByEmail("");
            goToLogin();
         } else {
            alert("Failed to deleted");
         };
    }
    
    return (
        <>
            <header className={bigScreenDevice ? "isBigScreen header" : "isSmallScreen header"}>
                <nav className="navbar">
                    <img className="nav-logo" src="../logo.png" alt="logo video belajar" />
                    <ul className="account nav-menu" style={{ margin: 0 }}>
                        <li className="kategori nav-item" style={{ marginRight:5 }}>
                            <a style={{ textDecoration: 'none' }} className="nav-link" onClick={() => deleteAccount(selectedUser.id)}>{selectedUser.namaLengkap}</a>
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