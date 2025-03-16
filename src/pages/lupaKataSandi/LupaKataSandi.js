import React, { useState } from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";
// import useLink from '../../data/UseLink';
import './LupaKataSandi.css';
import useLink from '../../store/zustand/Store';
import { useNavigate } from 'react-router-dom';
import { GetData, UpdatePassword } from '../../services/api';

const LupaKataSandi = () => {
    const navigate = useNavigate();
    const users = useLink((state) => state.users);
    const getAllUsers = useLink((state) => state.getAllUsers);
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");

    // const selectedUser = useLink((state) => state.selectedUser);
    const selectUserByEmail = useLink((state) => state.selectUserByEmail);
    // const linkGet = useLink((state) => state.linkGet);
    // const linkUpdate = useLink((state) => state.linkUpdate);
    // const [ users, setUsers ] = useState([]);
    const [ email, setEmail ] = useState('');
    const [ kataSandi, setKataSandi ] = useState('');
    const [ konfirmasiKataSandi, setKonfirmasiKataSandi ] = useState('');

    getAllUsers(GetData());
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleKataSandi = (event) => {
        setKataSandi(event.target.value);
    }

    const handleKonfirmasiKataSandi = (event) => {
        setKonfirmasiKataSandi(event.target.value);
    }

    const updateKataSandi = () => {
        const findItem = users.find(item => item.email === email);
        selectUserByEmail(findItem);
        UpdatePassword(findItem.id, users, kataSandi, konfirmasiKataSandi);
        navigate('/beranda');
    }

    function seePassword () {
        const togglePassword = document.getElementById('togglePassword');
        const password = document.getElementById('kataSandi');
    
        if (togglePassword && password) {
            if (password.type === "password") {
                password.type = "text";
                togglePassword.classList.remove("fa-eye");
                togglePassword.classList.add("fa-eye-slash");
            } else {
                password.type = "password";
                togglePassword.classList.remove("fa-eye-slash");
                togglePassword.classList.add("fa-eye");
            }
        }
    }

    function seeConfirmPassword () {
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        const password = document.getElementById('konfirmasiKataSandi');
    
        if (toggleConfirmPassword && password) {
            if (password.type === "password") {
                password.type = "text";
                toggleConfirmPassword.classList.remove("fa-eye");
                toggleConfirmPassword.classList.add("fa-eye-slash");
            } else {
                password.type = "password";
                toggleConfirmPassword.classList.remove("fa-eye-slash");
                toggleConfirmPassword.classList.add("fa-eye");
            }
        }
    }

    return (
        <div className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
            <article>
                <h1>Forget Password</h1>
                <label htmlFor="email" className='labelEmail'>Email</label><br />
                <input type="email" className='inputEmail' name="" id="email" value={email} onChange={handleEmail}/><br />
                {/* <div className="user-box">
                    <label htmlFor="kataSandi" className='labelPassword'>Kata Sandi Baru <span className="required">*</span></label><br />
                    <input type="password" name="kata sandi baru" className='inputPassword' id="kataSandi" value={kataSandi} onChange={handleKataSandi} /><br />
                    <span className="password-toggle-icon">
                        <i className="fa-solid fa-eye" id="togglePassword" onClick={() => seePassword()}></i>
                    </span>
                </div> */}
                <div className="user-box" style={{ position: "relative" }}>
                    <label htmlFor="kataSandi" className="labelPassword">
                        Kata Sandi Baru <span className="required">*</span>
                    </label>
                    <br />
                    <input
                        type="password"
                        name="kata sandi baru"
                        className="inputPassword"
                        id="kataSandi"
                        value={kataSandi}
                        onChange={handleKataSandi}
                    />
                    <i
                        className="fa-solid fa-eye password-toggle-icon"
                        id="togglePassword"
                        onClick={() => seePassword()}
                    ></i>
                </div>
                {/* <label htmlFor="konfirmasiKataSandi" className='labelConfirmPassword'>Konfirmasi Kata Sandi Baru</label><br />
                <input type="password" name="konfirmasi kata sandi baru"  className='inputConfirmPassword' id="konfirmasiKataSandi" value={konfirmasiKataSandi} onChange={handleKonfirmasiKataSandi} /><br /> */}
                <div className="user-box" style={{ position: "relative" }}>
                    <label htmlFor="konfirmasiKataSandi" className="labelConfirmPassword">
                        Konfirmasi Kata Sandi Baru<span className="required">*</span>
                    </label>
                    <br />
                    <input
                        type="password"
                        name="konfirmasi kata sandi baru"
                        className="inputKonfirmasiPassword"
                        id="konfirmasiKataSandi"
                        value={konfirmasiKataSandi}
                        onChange={handleKonfirmasiKataSandi}
                    />
                    <i
                        className="fa-solid fa-eye password-toggle-icon"
                        id="toggleConfirmPassword"
                        onClick={() => seeConfirmPassword()}
                    ></i>
                </div>
                <button className='btnSubmit' onClick={updateKataSandi}>Submit</button><br />
            </article>
        </div>
    );
};
 
export default LupaKataSandi;