import React, { useState } from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";
import './Section.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import useUser from "../../data/UseUser";

export default function Section() {
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    const xsScreenDevice = useMediaQuery("only screen and (max-width : 349px)");
    // Function See Password
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


    // Data
    const items = useUser((state) => state.items);
    const addItem = useUser((state) => state.addItem);
    const [ namaLengkap, setNamaLengkap ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ noHp, setNoHp ] = useState('');
    const [ kataSandi, setKataSandi ] = useState('');
    const [ konfirmasiKataSandi, setKonfirmasiKataSandi ] = useState('');

    const navigate = useNavigate();
    
    // const [ lastName, setLastName ] = useState('');
    console.log(items);
    
    const handleAddItem = () => {
        console.log(items);
        const filteredPeople = items.find(item => item.email === email);
    // console.log(!filteredPeople);
        if (filteredPeople) {
            alert("User sudah ada");
            setNamaLengkap('');
            setEmail('');
            setNoHp('');
            setKataSandi('');
            setKonfirmasiKataSandi('');
            return;
        }
        addItem({ id: items.length + 1, namaLengkap, email, noHp, kataSandi, konfirmasiKataSandi });
        setNamaLengkap('');
        setEmail('');
        setNoHp('');
        setKataSandi('');
        setKonfirmasiKataSandi('');
        goToBeranda();
        
        // Late assign
        // console.log(items);
    };
    const goToBeranda = () => {
        navigate('/beranda');
    }
    
    // Function See Confirm Password
    function seeConfirmPassword () {
        const togglePassword = document.getElementById('toggleKonfirmasiPassword');
        const password = document.getElementById('konfirmasiKataSandi');
    
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
    return (
        <>
            <section className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                <article>
                    <h1>Pendaftaran Akun</h1>
                    <h5 id="yukDaftarkanAkunmu">Yuk, daftarkan akunmu sekarang juga!</h5>
                    <label htmlFor="fullName" className="labelFullName">Nama Lengkap <span className="required">*</span></label>
                    <br />
                    <input type="text" name="Full Name" id="fullName" className="inputFullName" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
                    <br />
                    <label htmlFor="email" className="labelEmail">Email <span className="required">*</span></label>
                    <br />
                    <input type="email" name="Email" id="email" className="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label htmlFor="noTelp" className="labelNoTelp">No. HP <span className="required">*</span></label>
                    <br />
                    <div className="row conInputNoTelp" id={xsScreenDevice && "isXsScreenDevice"}>
                        <div className="input-group sm-3 row">
                            <label className="input-group-text col-md-auto" htmlFor="inputGroupSelect01">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V12.4453H0V0Z" fill="#E70011" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12H24V24H0V12Z" fill="white" />
                                </svg>
                            </label>
                            <select className="form-select col-md-auto" id="inputGroupSelect01">
                                <option selected="">+62</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                            <input type="number" id="inputNoTelp" class="form-control col-8" aria-label="Dollar amount (with dot and two decimal places)" value={noHp} onChange={(e) => setNoHp(e.target.value)}></input>
                        </div>
                    </div>
                    <br />
                    <div className="user-box">
                        <label htmlFor="password" className="labelPassword">Kata Sandi <span className="required">*</span>
                        </label>
                        <br />
                        <input type="password" name="" id="kataSandi" className="inputKataSandi" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} />
                        <span className="password-toggle-icon">
                            {/* <FontAwesomeIcon icon={faEyeSlash} className="passwordIcon" /> */}
                            <i className="fa-solid fa-eye" id="togglePassword" onClick={() => seePassword()}></i>
                        </span>
                    </div>
                    <br />
                    <div className="user-box">
                        <label htmlFor="password" className="labelKonfirmasiPassword">
                            Konfirmasi Kata Sandi <span className="required">*</span>
                        </label>
                        <br />
                        <input type="password" className="inputKonfirmasiPassword" name="" id="konfirmasiKataSandi" value={konfirmasiKataSandi} onChange={(e) => setKonfirmasiKataSandi(e.target.value)} />
                        <span className="password-toggle-icon">
                            {/* <FontAwesomeIcon icon={faEyeSlash} className="passwordIcon" /> */}
                            <i className="fa-solid fa-eye" id="toggleKonfirmasiPassword" onClick={() => seeConfirmPassword()}></i>
                        </span>
                    </div>
                    <h5 className="forgotPassword" id="forgotPassword">
                        <a href="#" style={{ color: "#333333AD", textDecoration: "none" }}>Lupa Password?</a>
                    </h5>
                    <button className="btnDaftar" onClick={handleAddItem}>Daftar</button>
                    <br />
                    <button className="btnMasuk">Masuk</button>
                    <br />
                    <h5 style={{ width: "100%", textAlign: "center", borderBottom: "1px solid #000", lineHeight: "0.1em",margin: "10px 0px 20px",  }}><span style={{ background:"#fff", padding:"0 10px", fontFamily: "DM Sans", fontWeight: 400, }}>atau</span></h5>
                    <button id="btnLoginWithGoogle">
                    <i style={{ marginLeft: "auto", verticalAlign: "auto", marginRight: 0, marginTop: 4 }} >
                        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        {" "} style="width: 15px; height: 20px; gap: 0px; opacity: 0px;"&gt;
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