import { useMediaQuery } from "@uidotdev/usehooks";
import './Section.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import useUser from "../../data/UseUser";

export default function Section() {
    const items = useUser((state) => state.items);
    const selectedUser = useUser((state) => state.selectedUser);
    // const updateItems = useUser((state) => state.updateItems);
    const selectUserByEmail = useUser((state) => state.selectUserByEmail);
    const [ email, setEmail ] = useState('');
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const goToBeranda = () => {
        navigate('/beranda');
    };
    const goToregister = () => {
        navigate('/register');
    }
    const goToLupaKataSandi = () => {
        navigate('/lupaKataSandi');
    }
    function seePassword () {
        const togglePassword = document.getElementById('togglePassword');
        const password = document.getElementById('kataSandi');
    
        if (togglePassword && password) {
            // alert("Clicked!");
            
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
    const clickToLogin = () => {
        // const findId = items.find(item => item.email === email).id;
        // updateItems([{ id: findId, kataSandi, konfirmasiKataSandi }]);
        handleSelectedEmail(email);
        goToBeranda();
        // navigate('/beranda');
    }

    // console.log('Selecting: ', selectedUser);

    const handleSelectedEmail = (index) => {
        selectUserByEmail(index);
    };
    console.log(items);
    
    return (
        <>
            <section className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                <article>
                    <h1>Masuk ke Akun</h1>
                    <h5 id="yukLanjutinVideoBelajarmu">
                    Yuk, lanjutin belajarmu di videobelajar.
                    </h5>
                    <label className="labelEmail" htmlFor="email">
                    E-mail <span className="required">*</span>
                    </label>
                    <br />
                    <input className="inputEmail" type="email" name="" id="email" value={email} onChange={handleEmail} />
                    <br />
                    <div className="user-box">
                        <label className="labelPassword" htmlFor="kataSandi">
                            Kata Sandi <span className="required">*</span>
                        </label>
                        <br />
                        <input
                            className="inputKataSandi"
                            type="password"
                            name=""
                            id="kataSandi"
                        />
                        <span className="password-toggle-icon">
                            <i className="fa-solid fa-eye" id="togglePassword" onClick={() => seePassword()}></i>
                        </span>
                    </div>
                    <h5 className="forgotPassword" id="forgotPassword">
                    <a onClick={goToLupaKataSandi} href="">Lupa Password?</a>
                    </h5>
                    <button className="btnMasuk" onClick={clickToLogin}>Masuk</button>
                    <br />
                    <button className="btnDaftar" onClick={goToregister}>Daftar</button>
                    <br />
                    <h5 style={{ width: "88%", gap: 10, borderBottom: "1px solid #F1F1F1", lineHeight: "0.1em", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
                    >
                    <span style={{ background: "#fff", padding: "0 10px", color: "#4A505C", fontFamily: "DM Sans", fontWeight: 400, alignItems: "center" }}>
                        atau
                    </span>
                    </h5> <button id="btnLoginWithGoogle"> 
                        <i>
                            <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path
                                d="M20.4905 10.926C20.4905 10.0874 20.4224 9.47543 20.2752 8.84082H10.6992V12.6258H16.3201C16.2068 13.5664 15.5948 14.983 14.2349 15.9349L14.2159 16.0616L17.2436 18.4071L17.4534 18.4281C19.3798 16.6489 20.4905 14.0311 20.4905 10.926Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M10.6992 20.8983C13.453 20.8983 15.7648 19.9917 17.4534 18.4279L14.2349 15.9347C13.3737 16.5353 12.2177 16.9546 10.6992 16.9546C8.00211 16.9546 5.71297 15.1754 4.89695 12.7163L4.77734 12.7265L1.62906 15.1629L1.58789 15.2774C3.26508 18.6091 6.71016 20.8983 10.6992 20.8983Z"
                                fill="#34A853"
                            />
                            <path
                                d="M4.89695 12.7164C4.68164 12.0818 4.55703 11.4018 4.55703 10.6993C4.55703 9.9966 4.68164 9.31668 4.88562 8.68207L4.87992 8.54691L1.69219 6.07129L1.58789 6.1209C0.896641 7.50348 0.5 9.05605 0.5 10.6993C0.5 12.3425 0.896641 13.895 1.58789 15.2775L4.89695 12.7164Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M10.6992 4.44367C12.6144 4.44367 13.9063 5.27094 14.6429 5.96227L17.5213 3.1518C15.7535 1.50859 13.453 0.5 10.6992 0.5C6.71016 0.5 3.26508 2.78914 1.58789 6.12086L4.88563 8.68203C5.71297 6.22289 8.00211 4.44367 10.6992 4.44367Z"
                                fill="#EB4335"
                            />
                            </svg>
                        </i>
                        <span>Masuk dengan Google</span>
                    </button>
                </article>
            </section>
        </>
    )
}

