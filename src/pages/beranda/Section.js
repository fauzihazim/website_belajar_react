import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $, { event } from 'jquery';
import { useMediaQuery } from "@uidotdev/usehooks";
// import './styles/Section.css';
import './styles/Section.css';

export default function Section() {
    const bigScreenDevice = useMediaQuery("only screen and (min-width : 811px)");
    function openCategory (evt, categoryName, idTag) {
        // console.log(evt, categoryName, idTag);
        if (categoryName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            tablinks = document.getElementsByClassName("tablinks");
            if (document.getElementsByClassName("tabcontent") && document.getElementsByClassName("tablinks")) {
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(categoryName).style.display = "block";
                document.getElementById(idTag).classList.add("active");
            }
        } else{
            console.log("kosong");
        }
    }
    return (
        <>
            <section>
                <article className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                    <div className="hero" id="heroContainer">
                        <img src="../hero.jpeg" alt="Hero" className="heroImg" />
                        <div className="hero-text">
                            <h1 className="h1Hero">
                                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                            </h1>
                            <p className="pHero">
                                Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
                                pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
                                berpartisipasi dalam latihan interaktif yang akan meningkatkan
                                pemahaman Anda.
                            </p>
                            <button className="buttonHero" style={{ margin: "auto" }}>
                                <span>Temukan Video Course untuk Dipelajari!</span>
                            </button>
                        </div>
                    </div>
                </article>
                <article className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                    <h1 className='h1Article'>Koleksi Video Pembelajaran Unggulan</h1>
                    <h5 className='jelajahiDunia'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h5>
                    <div className="tab">
                        <button id="tab1" className="tablinks active" onClick={() => openCategory(event, 'semuaKelas', 'tab1')}>Semua Kelas</button>
                        <button id="tab2" className="tablinks" onClick={() => openCategory(event, 'pemasaran', 'tab2')}>Pemasaran</button>
                        <button id="tab3" className="tablinks" onClick={() => openCategory(event, 'desain', 'tab3')}>Desain</button>
                        <button id="tab4" className="tablinks" onClick={() => openCategory(event, 'pengembanganDiri', 'tab4')} >Pengembangan Diri</button>
                        <button id="tab5" className="tablinks" onClick={() => openCategory(event, 'bisnis', 'tab5')}>Bisnis</button>
                    </div>
                    <div id="semuaKelas" className="tabcontent" style={{ display:'block' }}>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                {/* <img src="../digital marketing.jpg" className="card-img-top" alt="Kelas" style={{ width: "90%", marginTop: "20px" }}/> */}
                                    <div className={bigScreenDevice ? "" : "d-flex align-items-center"}>
                                        <img src="../digital marketing.jpg" className={bigScreenDevice ? "card-img-top" : "card-img-top flex-shrink-0"} alt="Kelas"/>
                                        {/* <div className="card-body flex-grow-1 ms-3"> */}
                                        <div className={bigScreenDevice ? "" : "card-body flex-grow-1 ms-3"}>
                                            <h5 className="card-title"><b>Big 4 Auditor Financial Analyst</b></h5>
                                            <p className="card-text">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className='imgMentor' src="../image.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 style={{ fontFamily: "DM Sans", fontSize: "16px", fontWeight: "500", lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}><b>Jenna Ortega</b></h5>
                                                    <h6 style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left", marginBottom: "0px" }}>Senior Accountant <span>di <b>Gojek</b></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FCE91B"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D9D9D9"><path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" style={{ padding: "0px" }}/></svg>
                                            <span style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: 500, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left" }}><u>3.5 (86)</u></span>
                                            <span style={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 600, lineHeight: "28.8px", textAlign: "left", color: "#3ECF4C", float: 'right' }}>Rp 300K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pemasaran" className="tabcontent">
                        <h3>Pemasaran</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                    <div id="desain" className="tabcontent">
                        <h3>Desain</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                    <div id="pengembanganDiri" className="tabcontent">
                        <h3>Pengembangan Diri</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                    <div id="bisnis" className="tabcontent">
                        <h3>Bisnis</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                </article>
            </section>
            <section className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"}>
                <article className='articleBanner'>
                    <div className="bannerImg" id="bannerContainer" style={{ width: "100%" }}>
                        <img src="../banner.jpeg" alt="Banner" className="bannerImg" />
                        <div className="banner-text">
                        <h2>NEWSLETTER</h2>
                        <h1>Mau Belajar Lebih Banyak?</h1>
                        <p>
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
                            spesial dari program-program terbaik hariesok.id
                        </p>
                        <div className="inputContainer">
                            <input
                            type="email"
                            name=""
                            id="inputEmail"
                            placeholder="Masukkan Emailmu"
                            />
                            <button id="subscribe">Subscribe</button>
                        </div>
                        <div></div>
                        </div>
                    </div>
                </article>
            </section>
            <footer className={bigScreenDevice ? "isBigScreen" : "isSmallScreen"} style={{ margin: "5px" }}>
                <div className="grid-container">
                <div className="item1">
                    <svg
                    width={194}
                    height={31}
                    viewBox="0 0 194 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M5.824 23.04L0 7.168H4.288L8.32 19.168L12.352 7.168H16.64L10.784 23.04H5.824Z"
                        fill="#F64920"
                    />
                    <path
                        d="M21.6315 4.704C20.8848 4.704 20.2662 4.48 19.7755 4.032C19.3062 3.584 19.0715 3.01867 19.0715 2.336C19.0715 1.65333 19.3062 1.09867 19.7755 0.671999C20.2662 0.224 20.8848 0 21.6315 0C22.3782 0 22.9862 0.224 23.4555 0.671999C23.9462 1.09867 24.1915 1.65333 24.1915 2.336C24.1915 3.01867 23.9462 3.584 23.4555 4.032C22.9862 4.48 22.3782 4.704 21.6315 4.704ZM19.5835 23.04V7.168H23.6795V23.04H19.5835Z"
                        fill="#F64920"
                    />
                    <path
                        d="M35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84Z"
                        fill="#F64920"
                    />
                    <path
                        d="M56.9417 23.424C55.3418 23.424 53.9231 23.0827 52.6857 22.4C51.4484 21.7173 50.4777 20.7573 49.7738 19.52C49.0698 18.2827 48.7177 16.8533 48.7177 15.232C48.7177 13.5893 49.0591 12.128 49.7417 10.848C50.4457 9.568 51.4058 8.576 52.6217 7.872C53.8591 7.14667 55.3097 6.784 56.9737 6.784C58.5311 6.784 59.9071 7.12533 61.1017 7.808C62.2964 8.49067 63.2244 9.42933 63.8857 10.624C64.5684 11.7973 64.9098 13.1093 64.9098 14.56C64.9098 14.7947 64.8991 15.04 64.8777 15.296C64.8777 15.552 64.8671 15.8187 64.8457 16.096H52.7817C52.8671 17.3333 53.2937 18.304 54.0617 19.008C54.8511 19.712 55.8004 20.064 56.9097 20.064C57.7417 20.064 58.4351 19.8827 58.9897 19.52C59.5658 19.136 59.9924 18.6453 60.2697 18.048H64.4297C64.1311 19.0507 63.6297 19.968 62.9258 20.8C62.2431 21.6107 61.3897 22.2507 60.3657 22.72C59.3631 23.1893 58.2217 23.424 56.9417 23.424ZM56.9737 10.112C55.9711 10.112 55.0858 10.4 54.3177 10.976C53.5497 11.5307 53.0591 12.384 52.8457 13.536H60.7497C60.6857 12.4907 60.3017 11.6587 59.5977 11.04C58.8937 10.4213 58.0191 10.112 56.9737 10.112Z"
                        fill="#F64920"
                    />
                    <path
                        d="M76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872Z"
                        fill="#F64920"
                    />
                    <path
                        d="M97.569 23.424C96.3743 23.424 95.329 23.2 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.036 12.1067 105.377 13.536 105.377 15.136C105.377 16.736 105.036 18.1653 104.353 19.424C103.67 20.6613 102.742 21.6427 101.569 22.368C100.396 23.072 99.0623 23.424 97.569 23.424ZM96.705 19.84C98.0063 19.84 99.0837 19.4027 99.937 18.528C100.79 17.6533 101.217 16.5227 101.217 15.136C101.217 13.7493 100.79 12.608 99.937 11.712C99.0837 10.816 98.0063 10.368 96.705 10.368C95.3823 10.368 94.2943 10.816 93.441 11.712C92.609 12.5867 92.193 13.7173 92.193 15.104C92.193 16.4907 92.609 17.632 93.441 18.528C94.2943 19.4027 95.3823 19.84 96.705 19.84Z"
                        fill="#F64920"
                    />
                    <path
                        d="M116.948 23.424C115.348 23.424 113.929 23.0827 112.692 22.4C111.455 21.7173 110.484 20.7573 109.78 19.52C109.076 18.2827 108.724 16.8533 108.724 15.232C108.724 13.5893 109.065 12.128 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C122.303 8.49067 123.231 9.42933 123.892 10.624C124.575 11.7973 124.916 13.1093 124.916 14.56C124.916 14.7947 124.905 15.04 124.884 15.296C124.884 15.552 124.873 15.8187 124.852 16.096H112.788C112.873 17.3333 113.3 18.304 114.068 19.008C114.857 19.712 115.807 20.064 116.916 20.064C117.748 20.064 118.441 19.8827 118.996 19.52C119.572 19.136 119.999 18.6453 120.276 18.048H124.436C124.137 19.0507 123.636 19.968 122.932 20.8C122.249 21.6107 121.396 22.2507 120.372 22.72C119.369 23.1893 118.228 23.424 116.948 23.424ZM116.98 10.112C115.977 10.112 115.092 10.4 114.324 10.976C113.556 11.5307 113.065 12.384 112.852 13.536H120.756C120.692 12.4907 120.308 11.6587 119.604 11.04C118.9 10.4213 118.025 10.112 116.98 10.112Z"
                        fill="#F64920"
                    />
                    <path d="M128.561 23.04V0H132.657V23.04H128.561Z" fill="#F64920" />
                    <path
                        d="M142.514 23.424C141.149 23.424 140.029 23.2107 139.154 22.784C138.28 22.336 137.629 21.7493 137.202 21.024C136.776 20.2987 136.562 19.4987 136.562 18.624C136.562 17.152 137.138 15.9573 138.29 15.04C139.442 14.1227 141.17 13.664 143.474 13.664H147.506V13.28C147.506 12.192 147.197 11.392 146.578 10.88C145.96 10.368 145.192 10.112 144.274 10.112C143.442 10.112 142.717 10.3147 142.098 10.72C141.48 11.104 141.096 11.68 140.946 12.448H136.946C137.053 11.296 137.437 10.2933 138.098 9.44C138.781 8.58667 139.656 7.936 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.952 9.61067 151.602 11.2107 151.602 13.28V23.04H148.114L147.73 20.48C147.261 21.3333 146.6 22.0373 145.746 22.592C144.914 23.1467 143.837 23.424 142.514 23.424ZM143.442 20.224C144.616 20.224 145.522 19.84 146.162 19.072C146.824 18.304 147.24 17.3547 147.41 16.224H143.922C142.834 16.224 142.056 16.4267 141.586 16.832C141.117 17.216 140.882 17.696 140.882 18.272C140.882 18.8907 141.117 19.3707 141.586 19.712C142.056 20.0533 142.674 20.224 143.442 20.224Z"
                        fill="#F64920"
                    />
                    <path
                        d="M157.983 4.704C157.236 4.704 156.618 4.48 156.127 4.032C155.658 3.584 155.423 3.01867 155.423 2.336C155.423 1.65333 155.658 1.09867 156.127 0.671999C156.618 0.224 157.236 0 157.983 0C158.73 0 159.338 0.224 159.807 0.671999C160.298 1.09867 160.543 1.65333 160.543 2.336C160.543 3.01867 160.298 3.584 159.807 4.032C159.338 4.48 158.73 4.704 157.983 4.704ZM152.703 30.08V26.592H153.951C154.655 26.592 155.156 26.4533 155.455 26.176C155.754 25.8987 155.903 25.4293 155.903 24.768V7.168H159.999V24.768C159.999 26.688 159.508 28.0533 158.527 28.864C157.567 29.6747 156.255 30.08 154.591 30.08H152.703Z"
                        fill="#F64920"
                    />
                    <path
                        d="M169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224Z"
                        fill="#F64920"
                    />
                    <path
                        d="M183.142 23.04V7.168H186.79L187.174 10.144C187.75 9.12 188.529 8.30933 189.51 7.712C190.513 7.09333 191.686 6.784 193.03 6.784V11.104H191.878C190.982 11.104 190.182 11.2427 189.478 11.52C188.774 11.7973 188.22 12.2773 187.814 12.96C187.43 13.6427 187.238 14.592 187.238 15.808V23.04H183.142Z"
                        fill="#F64920"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.7755 4.032C20.2662 4.48 20.8848 4.704 21.6315 4.704C22.3782 4.704 22.9862 4.48 23.4555 4.032C23.9462 3.584 24.1915 3.01867 24.1915 2.336C24.1915 1.65333 23.9462 1.09867 23.4555 0.671999C22.9862 0.224 22.3782 0 21.6315 0C20.8848 0 20.2662 0.224 19.7755 0.671999C19.3062 1.09867 19.0715 1.65333 19.0715 2.336C19.0715 3.01867 19.3062 3.584 19.7755 4.032ZM19.5835 7.168V23.04H23.6795V7.168H19.5835ZM0 7.168L5.824 23.04H10.784L16.64 7.168H12.352L8.32 19.168L4.288 7.168H0ZM35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84ZM52.6857 22.4C53.9231 23.0827 55.3418 23.424 56.9417 23.424C58.2217 23.424 59.3631 23.1893 60.3657 22.72C61.3897 22.2507 62.2431 21.6107 62.9258 20.8C63.6297 19.968 64.1311 19.0507 64.4297 18.048H60.2697C59.9924 18.6453 59.5658 19.136 58.9897 19.52C58.4351 19.8827 57.7417 20.064 56.9097 20.064C55.8004 20.064 54.8511 19.712 54.0617 19.008C53.2937 18.304 52.8671 17.3333 52.7817 16.096H64.8457C64.8671 15.8187 64.8777 15.552 64.8777 15.296C64.8991 15.04 64.9098 14.7947 64.9098 14.56C64.9098 13.1093 64.5684 11.7973 63.8857 10.624C63.2244 9.42933 62.2964 8.49067 61.1017 7.808C59.9071 7.12533 58.5311 6.784 56.9737 6.784C55.3097 6.784 53.8591 7.14667 52.6217 7.872C51.4058 8.576 50.4457 9.568 49.7417 10.848C49.0591 12.128 48.7177 13.5893 48.7177 15.232C48.7177 16.8533 49.0698 18.2827 49.7738 19.52C50.4777 20.7573 51.4484 21.7173 52.6857 22.4ZM54.3177 10.976C55.0858 10.4 55.9711 10.112 56.9737 10.112C58.0191 10.112 58.8937 10.4213 59.5977 11.04C60.3017 11.6587 60.6857 12.4907 60.7497 13.536H52.8457C53.0591 12.384 53.5497 11.5307 54.3177 10.976ZM76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872ZM105.377 15.1069C102.118 17.4506 99.2007 20.239 96.7134 23.3832C95.8684 23.3001 95.1083 23.0897 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.032 12.099 105.373 13.5187 105.377 15.1069ZM121.414 7.99226C116.991 8.93891 112.819 10.5659 109.015 12.7584C109.185 12.0821 109.429 11.4453 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C121.212 7.86748 121.314 7.9289 121.414 7.99226ZM132.657 7.09533C131.928 7.05858 131.194 7.03998 130.456 7.03998C129.821 7.03998 129.189 7.05374 128.561 7.08099V0H132.657V7.09533ZM151.576 12.5752C147.91 10.5042 143.91 8.95566 139.676 8.03079C140.001 7.8252 140.35 7.64427 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.8 9.47881 151.442 10.8439 151.576 12.5752ZM159.999 18.7954C158.707 17.5732 157.339 16.4303 155.903 15.3744V7.168H159.999V18.7954ZM99.937 18.528C99.0837 19.4027 98.0063 19.84 96.705 19.84C95.3823 19.84 94.2943 19.4027 93.441 18.528C92.609 17.632 92.193 16.4907 92.193 15.104C92.193 13.7173 92.609 12.5867 93.441 11.712C94.2943 10.816 95.3823 10.368 96.705 10.368C98.0063 10.368 99.0837 10.816 99.937 11.712C100.79 12.608 101.217 13.7493 101.217 15.136C101.217 16.5227 100.79 17.6533 99.937 18.528ZM156.127 4.032C156.618 4.48 157.236 4.704 157.983 4.704C158.73 4.704 159.338 4.48 159.807 4.032C160.298 3.584 160.543 3.01867 160.543 2.336C160.543 1.65333 160.298 1.09867 159.807 0.671999C159.338 0.224 158.73 0 157.983 0C157.236 0 156.618 0.224 156.127 0.671999C155.658 1.09867 155.423 1.65333 155.423 2.336C155.423 3.01867 155.658 3.584 156.127 4.032ZM169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224ZM186.79 7.168H183.142V23.04H187.238V15.808C187.238 14.592 187.43 13.6427 187.814 12.96C188.22 12.2773 188.774 11.7973 189.478 11.52C190.182 11.2427 190.982 11.104 191.878 11.104H193.03V6.784C191.686 6.784 190.513 7.09333 189.51 7.712C188.529 8.30933 187.75 9.12 187.174 10.144L186.79 7.168Z"
                        fill="#FFBD3A"
                    />
                    </svg>
                    <h3 style={{ fontFamily: "Open Sans", fontSize: "14px", fontWeight: 700, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>
                    Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                    </h3>
                    <h5 style={{ fontFamily: "Open Sans", fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>Jl. Usman Effendi No. 50 Lowokwaru, Malang</h5>
                    <h5 style={{ fontFamily: "Open Sans", fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>+62-877-7123-1234</h5>
                </div>
                <div className="item2 dropdown">
                    {/* <h4 className="dropbtn" style="width: 100%;"><strong>Kategori</strong><span style="margin-top: auto; margin-bottom: auto; float: right;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#3A3541" fill-opacity="0.54"/>
                        </svg>
                        </span></h4> */}
                    <h4 className="dropbtn" style={{ width: "100%" }}>
                    <strong style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 700, lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>Kategori</strong>
                    <span
                        className="material-symbols-outlined arrowRight"
                        style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
                    >
                        keyboard_arrow_right
                    </span>
                    </h4>
                    <div className="dropdown-content">
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Digital &amp; Teknologi
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Pemasaran
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Manajemen Bisnis
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Pengembangan Diri
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Desain
                    </h5>
                    </div>
                </div>
                <div className="item3">
                    <h4 className="dropbtn" style={{ width: "100%" }}>
                    <strong style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 700, lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>Perusahaan</strong>
                    <span
                        className="material-symbols-outlined arrowRight"
                        style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
                    >
                        keyboard_arrow_right
                    </span>
                    </h4>
                    <div className="dropdown-content">
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Tentang Kami
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        FAQ
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Kebijakan Privasi
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Ketentuan Layanan
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Bantuan
                    </h5>
                    </div>
                </div>
                <div className="item4">
                    <h4 className="dropbtn" style={{ width: "100%" }}>
                    <strong style={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: 700, lineHeight: "22.4px", letterSpacing: "0.20000000298023224px", textAlign: "left",  }}>Komunitas</strong>
                    <span
                        className="material-symbols-outlined arrowRight"
                        style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
                    >
                        keyboard_arrow_right
                    </span>
                    </h4>
                    <div className="dropdown-content">
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Tips Sukses
                    </h5>
                    <h5
                        style={{
                        fontFamily: "DM Sans",
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "22.4px",
                        letterSpacing: "0.20000000298023224px",
                        textAlign: "left",
                        marginBottom: 2,
                        marginTop: 5
                        }}
                    >
                        Blog
                    </h5>
                    </div>
                </div>
                </div>
                <div className="copyright">
                <ul style={{ paddingLeft: 0 }}>
                    <li className="socialMedia showOnMobile">
                    <svg
                        width={187}
                        height={37}
                        viewBox="0 0 187 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <path
                        d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
                        fill="#222325"
                        />
                        <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
                        <path
                        d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
                        fill="#222325"
                        />
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.5 36C78.165 36 86 28.165 86 18.5C86 8.83502 78.165 1 68.5 1C58.835 1 51 8.83502 51 18.5C51 28.165 58.835 36 68.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <path
                        d="M74.0007 9.6665H71.5007C70.3956 9.6665 69.3358 10.1055 68.5544 10.8869C67.773 11.6683 67.334 12.7281 67.334 13.8332V16.3332H64.834V19.6665H67.334V26.3332H70.6673V19.6665H73.1673L74.0007 16.3332H70.6673V13.8332C70.6673 13.6122 70.7551 13.4002 70.9114 13.2439C71.0677 13.0876 71.2796 12.9998 71.5007 12.9998H74.0007V9.6665Z"
                        fill="#222325"
                        />
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M118.5 36C128.165 36 136 28.165 136 18.5C136 8.83502 128.165 1 118.5 1C108.835 1 101 8.83502 101 18.5C101 28.165 108.835 36 118.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <g clipPath="url(#clip0_4461_1649)">
                        <path
                            d="M123.166 10.6665H114.833C112.531 10.6665 110.666 12.532 110.666 14.8332V23.1665C110.666 25.4677 112.531 27.3332 114.833 27.3332H123.166C125.467 27.3332 127.333 25.4677 127.333 23.1665V14.8332C127.333 12.532 125.467 10.6665 123.166 10.6665Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M122.334 18.4748C122.437 19.1683 122.318 19.8766 121.995 20.4989C121.672 21.1213 121.161 21.6259 120.535 21.9412C119.909 22.2564 119.199 22.3661 118.507 22.2547C117.815 22.1433 117.175 21.8165 116.679 21.3207C116.184 20.825 115.857 20.1855 115.745 19.4933C115.634 18.8011 115.744 18.0913 116.059 17.4651C116.374 16.8388 116.879 16.3279 117.501 16.005C118.124 15.682 118.832 15.5636 119.525 15.6664C120.233 15.7713 120.888 16.101 121.393 16.6067C121.899 17.1124 122.229 17.7673 122.334 18.4748Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M123.584 14.4165H123.592"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M168.5 36C178.165 36 186 28.165 186 18.5C186 8.83502 178.165 1 168.5 1C158.835 1 151 8.83502 151 18.5C151 28.165 158.835 36 168.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <g clipPath="url(#clip1_4461_1649)">
                        <path
                            d="M178.165 11.5001C177.367 12.063 176.484 12.4935 175.549 12.7751C175.047 12.198 174.38 11.789 173.638 11.6034C172.896 11.4177 172.115 11.4644 171.4 11.7371C170.686 12.0098 170.072 12.4954 169.643 13.1282C169.213 13.7609 168.988 14.5104 168.999 15.2751V16.1084C167.534 16.1464 166.083 15.8216 164.775 15.163C163.466 14.5043 162.341 13.5323 161.499 12.3334C161.499 12.3334 158.165 19.8334 165.665 23.1667C163.949 24.3317 161.905 24.9159 159.832 24.8334C167.332 29.0001 176.499 24.8334 176.499 15.2501C176.498 15.018 176.476 14.7864 176.432 14.5584C177.283 13.7197 177.883 12.6607 178.165 11.5001V11.5001Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_4461_1649">
                            <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(109 9)"
                            />
                        </clipPath>
                        <clipPath id="clip1_4461_1649">
                            <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(159 9)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    </li>
                    <li className="company">@2023 Gerobak Sayur All Rights Reserved.</li>
                    <li className="socialMedia showOnDesktop">
                    <svg
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <path
                        d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
                        fill="#222325"
                        />
                        <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
                        <path
                        d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
                        fill="#222325"
                        />
                    </svg>
                    <svg
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <path
                        d="M24.0007 9.6665H21.5007C20.3956 9.6665 19.3358 10.1055 18.5544 10.8869C17.773 11.6683 17.334 12.7281 17.334 13.8332V16.3332H14.834V19.6665H17.334V26.3332H20.6673V19.6665H23.1673L24.0007 16.3332H20.6673V13.8332C20.6673 13.6122 20.7551 13.4002 20.9114 13.2439C21.0677 13.0876 21.2796 12.9998 21.5007 12.9998H24.0007V9.6665Z"
                        fill="#222325"
                        />
                    </svg>
                    <svg
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <g clipPath="url(#clip0_3869_424)">
                        <path
                            d="M23.166 10.6665H14.8327C12.5315 10.6665 10.666 12.532 10.666 14.8332V23.1665C10.666 25.4677 12.5315 27.3332 14.8327 27.3332H23.166C25.4672 27.3332 27.3327 25.4677 27.3327 23.1665V14.8332C27.3327 12.532 25.4672 10.6665 23.166 10.6665Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22.3337 18.4748C22.4366 19.1683 22.3181 19.8766 21.9952 20.4989C21.6723 21.1213 21.1614 21.6259 20.5351 21.9412C19.9088 22.2564 19.1991 22.3661 18.5069 22.2547C17.8147 22.1433 17.1752 21.8165 16.6794 21.3207C16.1837 20.825 15.8569 20.1855 15.7455 19.4933C15.6341 18.8011 15.7438 18.0913 16.059 17.4651C16.3742 16.8388 16.8789 16.3279 17.5012 16.005C18.1236 15.682 18.8319 15.5636 19.5254 15.6664C20.2328 15.7713 20.8878 16.101 21.3935 16.6067C21.8992 17.1124 22.2288 17.7673 22.3337 18.4748Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23.584 14.4165H23.5923"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_3869_424">
                            <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(9 9)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    <svg
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        opacity="0.35"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                        stroke="#222325"
                        strokeWidth="1.5"
                        />
                        <g clipPath="url(#clip0_3869_430)">
                        <path
                            d="M28.1654 11.5001C27.3674 12.063 26.4838 12.4935 25.5487 12.7751C25.0468 12.198 24.3798 11.789 23.6379 11.6034C22.896 11.4177 22.1149 11.4644 21.4004 11.7371C20.6859 12.0098 20.0724 12.4954 19.6429 13.1282C19.2133 13.7609 18.9884 14.5104 18.9987 15.2751V16.1084C17.5342 16.1464 16.0831 15.8216 14.7745 15.163C13.466 14.5043 12.3406 13.5323 11.4987 12.3334C11.4987 12.3334 8.16536 19.8334 15.6654 23.1667C13.9491 24.3317 11.9047 24.9159 9.83203 24.8334C17.332 29.0001 26.4987 24.8334 26.4987 15.2501C26.4979 15.018 26.4756 14.7864 26.432 14.5584C27.2825 13.7197 27.8827 12.6607 28.1654 11.5001V11.5001Z"
                            stroke="#222325"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_3869_430">
                            <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(9 9)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    </li>
                </ul>
                </div>
            </footer>
        </>
    )
    // render() {
    //     return (
    //         <>
    //             <section>
    //                 <article>
    //                     <div className="hero" id="heroContainer">
    //                         <img src="../hero.jpeg" alt="Hero" className="heroImg" />
    //                         <div className="hero-text">
    //                             <h1 className="h1Hero">
    //                                 Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
    //                             </h1>
    //                             <p className="pHero">
    //                                 Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
    //                                 pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
    //                                 berpartisipasi dalam latihan interaktif yang akan meningkatkan
    //                                 pemahaman Anda.
    //                             </p>
    //                             <button className="buttonHero" style={{ margin: "auto" }}>
    //                                 <span>Temukan Video Course untuk Dipelajari!</span>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </article>
    //                 <article>
    //                 <h1>Koleksi Video Pembelajaran Unggulan</h1>
    //                 <h5>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h5>
    //                 <div className="tab">
    //                     <button id="tab1" className="tablinks active" onClick={() => this.openCategory(event, 'semuaKelas', 'tab1')}>Semua Kelas</button>
    //                     <button id="tab2" className="tablinks" onClick={() => this.openCategory(event, 'pemasaran', 'tab2')}>Pemasaran</button>
    //                     <button id="tab3" className="tablinks" onClick={() => this.openCategory(event, 'desain', 'tab3')}>Desain</button>
    //                     <button id="tab4" className="tablinks" onClick={() => this.openCategory(event, 'pengembanganDiri', 'tab4')} >Pengembangan Diri</button>
    //                     <button id="tab5" className="tablinks" onClick={() => this.openCategory(event, 'bisnis', 'tab5')}>Bisnis</button>
    //                 </div>
    //                 <div id="semuaKelas" className="tabcontent" style={{ marginBottom: 50, display:'block' }}>
    //                     <div className="row">
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2><b>Big 4 Auditor Financial Analyst</b></h2>
    //                             <h3>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker"><b>Jenna Ortega</b></span>
    //                             <br />
    //                             <span className="positionSpeaker">Senior Accountant di <b>Gojek</b></span>
    //                         </div>
    //                             <div className="review">
    //                                 <span className="speakerPhoto">
    //                                     <svg width={151} height={21} viewBox="0 0 151 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
    //                                         <path d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z" fill="#FCE91B" />
    //                                         <path d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z" fill="#FCE91B" />
    //                                         <mask id="mask0_3814_814" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={36} y={1} width={18} height={19} >
    //                                         <path d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z" fill="black"
    //                                         />
    //                                         </mask>
    //                                         <g mask="url(#mask0_3814_814)">
    //                                         <rect x={36} y="1.5" width={9} height={18} fill="#FCE91B"
    //                                         />
    //                                         <rect x={45} y="1.5" width={9} height={18} fill="#3A3541" fillOpacity="0.12"
    //                                         />
    //                                         </g>
    //                                         <path d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z" fill="#3A3541" fillOpacity="0.12" />
    //                                         <path d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z" fill="#3A3541" fillOpacity="0.12" />
    //                                         <path d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z" fill="#333333" fillOpacity="0.68" />
    //                                         <path d="M98 17.25H150.167V17.95H98V17.25Z" fill="#333333" fillOpacity="0.68" />
    //                                     </svg>
    //                                 </span>
    //                                 <span className="price">Rp 300K</span>
    //                             </div>
    //                         </div>
    //                     </div>
                        
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2>
    //                                 <b>Big 4 Auditor Financial Analyst</b>
    //                             </h2>
    //                             <h3>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker"><b>Jenna Ortega</b></span>
    //                             <br />
    //                             <span className="positionSpeaker">Senior Accountant di <b>Gojek</b></span>
    //                         </div>
    //                         <div className="review">
    //                             <span className="speakerPhoto">
    //                                 <svg width={151} height={21} viewBox="0 0 151 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                     <path d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z" fill="#FCE91B" /> <path d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z" fill="#FCE91B" /> <mask id="mask0_3814_814" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={36} y={1} width={18} height={19} >
    //                                     <path d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z" fill="black"
    //                                     />
    //                                     </mask>
    //                                     <g mask="url(#mask0_3814_814)">
    //                                     <rect x={36} y="1.5" width={9} height={18} fill="#FCE91B"/>
    //                                     <rect x={45} y="1.5" width={9} height={18} fill="#3A3541" fillOpacity="0.12"/>
    //                                     </g>
    //                                     <path d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z" fill="#3A3541" fillOpacity="0.12" />
    //                                     <path d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z" fill="#3A3541" fillOpacity="0.12" />
    //                                     <path d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z" fill="#333333" fillOpacity="0.68" />
    //                                     <path d="M98 17.25H150.167V17.95H98V17.25Z" fill="#333333" fillOpacity="0.68" />
    //                                 </svg>
    //                             </span>
    //                             <span className="price">Rp 300K</span>
    //                         </div>
    //                         </div>
    //                     </div>
                        
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2>
    //                             <b>Big 4 Auditor Financial Analyst</b>
    //                             </h2>
    //                             <h3>
    //                             Mulai transformasi dengan instruktur profesional, harga yang
    //                             terjangkau, dan kurikulum terbaik
    //                             </h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker">
    //                             <b>Jenna Ortega</b>
    //                             </span>
    //                             <br />
    //                             <span className="positionSpeaker">
    //                             Senior Accountant di <b>Gojek</b>
    //                             </span>
    //                         </div>
    //                         <div className="review">
    //                             <span className="speakerPhoto">
    //                             <svg
    //                                 width={151}
    //                                 height={21}
    //                                 viewBox="0 0 151 21"
    //                                 fill="none"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                             >
    //                                 <path
    //                                 d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <path
    //                                 d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <mask
    //                                 id="mask0_3814_814"
    //                                 style={{ maskType: "alpha" }}
    //                                 maskUnits="userSpaceOnUse"
    //                                 x={36}
    //                                 y={1}
    //                                 width={18}
    //                                 height={19}
    //                                 >
    //                                 <path
    //                                     d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z"
    //                                     fill="black"
    //                                 />
    //                                 </mask>
    //                                 <g mask="url(#mask0_3814_814)">
    //                                 <rect
    //                                     x={36}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#FCE91B"
    //                                 />
    //                                 <rect
    //                                     x={45}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#3A3541"
    //                                     fillOpacity="0.12"
    //                                 />
    //                                 </g>
    //                                 <path
    //                                 d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                                 <path
    //                                 d="M98 17.25H150.167V17.95H98V17.25Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                             </svg>
    //                             </span>
    //                             <span className="price">Rp 300K</span>
    //                         </div>
    //                         </div>
                            
    //                     </div>
    //                     </div>
    //                     {/* Baris 2 */}
    //                     <div className="row">
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2>
    //                             <b>Big 4 Auditor Financial Analyst</b>
    //                             </h2>
    //                             <h3>
    //                             Mulai transformasi dengan instruktur profesional, harga yang
    //                             terjangkau, dan kurikulum terbaik
    //                             </h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker">
    //                             <b>Jenna Ortega</b>
    //                             </span>
    //                             <br />
    //                             <span className="positionSpeaker">
    //                             Senior Accountant di <b>Gojek</b>
    //                             </span>
    //                         </div>
    //                         <div className="review">
    //                             <span className="speakerPhoto">
    //                             <svg
    //                                 width={151}
    //                                 height={21}
    //                                 viewBox="0 0 151 21"
    //                                 fill="none"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                             >
    //                                 <path
    //                                 d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <path
    //                                 d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <mask
    //                                 id="mask0_3814_814"
    //                                 style={{ maskType: "alpha" }}
    //                                 maskUnits="userSpaceOnUse"
    //                                 x={36}
    //                                 y={1}
    //                                 width={18}
    //                                 height={19}
    //                                 >
    //                                 <path
    //                                     d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z"
    //                                     fill="black"
    //                                 />
    //                                 </mask>
    //                                 <g mask="url(#mask0_3814_814)">
    //                                 <rect
    //                                     x={36}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#FCE91B"
    //                                 />
    //                                 <rect
    //                                     x={45}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#3A3541"
    //                                     fillOpacity="0.12"
    //                                 />
    //                                 </g>
    //                                 <path
    //                                 d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                                 <path
    //                                 d="M98 17.25H150.167V17.95H98V17.25Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                             </svg>
    //                             </span>
    //                             <span className="price">Rp 300K</span>
    //                         </div>
    //                         </div>
    //                     </div>
                        
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2>
    //                             <b>Big 4 Auditor Financial Analyst</b>
    //                             </h2>
    //                             <h3>
    //                             Mulai transformasi dengan instruktur profesional, harga yang
    //                             terjangkau, dan kurikulum terbaik
    //                             </h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker">
    //                             <b>Jenna Ortega</b>
    //                             </span>
    //                             <br />
    //                             <span className="positionSpeaker">
    //                             Senior Accountant di <b>Gojek</b>
    //                             </span>
    //                         </div>
    //                         <div className="review">
    //                             <span className="speakerPhoto">
    //                             <svg
    //                                 width={151}
    //                                 height={21}
    //                                 viewBox="0 0 151 21"
    //                                 fill="none"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                             >
    //                                 <path
    //                                 d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <path
    //                                 d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <mask
    //                                 id="mask0_3814_814"
    //                                 style={{ maskType: "alpha" }}
    //                                 maskUnits="userSpaceOnUse"
    //                                 x={36}
    //                                 y={1}
    //                                 width={18}
    //                                 height={19}
    //                                 >
    //                                 <path
    //                                     d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z"
    //                                     fill="black"
    //                                 />
    //                                 </mask>
    //                                 <g mask="url(#mask0_3814_814)">
    //                                 <rect
    //                                     x={36}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#FCE91B"
    //                                 />
    //                                 <rect
    //                                     x={45}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#3A3541"
    //                                     fillOpacity="0.12"
    //                                 />
    //                                 </g>
    //                                 <path
    //                                 d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                                 <path
    //                                 d="M98 17.25H150.167V17.95H98V17.25Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                             </svg>
    //                             </span>
    //                             <span className="price">Rp 300K</span>
    //                         </div>
    //                         </div>
    //                     </div>
                        
    //                     <div className="column">
    //                         <div className="card">
    //                         <img src="../digital marketing.jpg" alt="Avatar" />
    //                         <div className="container">
    //                             <h2>
    //                             <b>Big 4 Auditor Financial Analyst</b>
    //                             </h2>
    //                             <h3>
    //                             Mulai transformasi dengan instruktur profesional, harga yang
    //                             terjangkau, dan kurikulum terbaik
    //                             </h3>
    //                         </div>
    //                         <div className="speaker-container">
    //                             <img src="../image.png" alt="" srcSet="" />
    //                             <span className="speaker">
    //                             <b>Jenna Ortega</b>
    //                             </span>
    //                             <br />
    //                             <span className="positionSpeaker">
    //                             Senior Accountant di <b>Gojek</b>
    //                             </span>
    //                         </div>
    //                         <div className="review">
    //                             <span className="speakerPhoto">
    //                             <svg
    //                                 width={151}
    //                                 height={21}
    //                                 viewBox="0 0 151 21"
    //                                 fill="none"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                             >
    //                                 <path
    //                                 d="M9 14.4525L13.635 17.25L12.405 11.9775L16.5 8.43L11.1075 7.9725L9 3L6.8925 7.9725L1.5 8.43L5.595 11.9775L4.365 17.25L9 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <path
    //                                 d="M27 14.4525L31.635 17.25L30.405 11.9775L34.5 8.43L29.1075 7.9725L27 3L24.8925 7.9725L19.5 8.43L23.595 11.9775L22.365 17.25L27 14.4525Z"
    //                                 fill="#FCE91B"
    //                                 />
    //                                 <mask
    //                                 id="mask0_3814_814"
    //                                 style={{ maskType: "alpha" }}
    //                                 maskUnits="userSpaceOnUse"
    //                                 x={36}
    //                                 y={1}
    //                                 width={18}
    //                                 height={19}
    //                                 >
    //                                 <path
    //                                     d="M45 14.4525L49.635 17.25L48.405 11.9775L52.5 8.43L47.1075 7.9725L45 3L42.8925 7.9725L37.5 8.43L41.595 11.9775L40.365 17.25L45 14.4525Z"
    //                                     fill="black"
    //                                 />
    //                                 </mask>
    //                                 <g mask="url(#mask0_3814_814)">
    //                                 <rect
    //                                     x={36}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#FCE91B"
    //                                 />
    //                                 <rect
    //                                     x={45}
    //                                     y="1.5"
    //                                     width={9}
    //                                     height={18}
    //                                     fill="#3A3541"
    //                                     fillOpacity="0.12"
    //                                 />
    //                                 </g>
    //                                 <path
    //                                 d="M63 14.4525L67.635 17.25L66.405 11.9775L70.5 8.43L65.1075 7.9725L63 3L60.8925 7.9725L55.5 8.43L59.595 11.9775L58.365 17.25L63 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M81 14.4525L85.635 17.25L84.405 11.9775L88.5 8.43L83.1075 7.9725L81 3L78.8925 7.9725L73.5 8.43L77.595 11.9775L76.365 17.25L81 14.4525Z"
    //                                 fill="#3A3541"
    //                                 fillOpacity="0.12"
    //                                 />
    //                                 <path
    //                                 d="M102.13 15.668C101.495 15.668 100.917 15.556 100.394 15.332C99.8807 15.0987 99.47 14.7487 99.162 14.282C98.854 13.8153 98.6907 13.232 98.672 12.532H100.142C100.161 13.0547 100.338 13.498 100.674 13.862C101.019 14.2167 101.505 14.394 102.13 14.394C102.727 14.394 103.185 14.2307 103.502 13.904C103.819 13.568 103.978 13.1527 103.978 12.658C103.978 12.0607 103.763 11.6173 103.334 11.328C102.914 11.0387 102.396 10.894 101.78 10.894H101.052V9.662H101.794C102.345 9.662 102.788 9.53133 103.124 9.27C103.469 9.00867 103.642 8.64 103.642 8.164C103.642 7.76267 103.507 7.436 103.236 7.184C102.975 6.932 102.601 6.806 102.116 6.806C101.612 6.806 101.215 6.95533 100.926 7.254C100.637 7.54333 100.478 7.90733 100.45 8.346H98.98C98.9987 7.77667 99.1387 7.282 99.4 6.862C99.6707 6.442 100.039 6.11533 100.506 5.882C100.973 5.64867 101.509 5.532 102.116 5.532C102.769 5.532 103.315 5.64867 103.754 5.882C104.202 6.106 104.538 6.414 104.762 6.806C104.995 7.18867 105.112 7.60867 105.112 8.066C105.112 8.58867 104.967 9.046 104.678 9.438C104.389 9.83 104.001 10.0913 103.516 10.222C104.076 10.3433 104.538 10.6187 104.902 11.048C105.266 11.468 105.448 12.014 105.448 12.686C105.448 13.2273 105.322 13.7267 105.07 14.184C104.818 14.632 104.445 14.9913 103.95 15.262C103.455 15.5327 102.849 15.668 102.13 15.668ZM108.011 15.584C107.731 15.584 107.498 15.4953 107.311 15.318C107.134 15.1313 107.045 14.912 107.045 14.66C107.045 14.3987 107.134 14.1793 107.311 14.002C107.498 13.8153 107.731 13.722 108.011 13.722C108.291 13.722 108.52 13.8153 108.697 14.002C108.874 14.1793 108.963 14.3987 108.963 14.66C108.963 14.912 108.874 15.1313 108.697 15.318C108.52 15.4953 108.291 15.584 108.011 15.584ZM114.13 15.668C113.44 15.668 112.842 15.5467 112.338 15.304C111.834 15.052 111.433 14.7113 111.134 14.282C110.845 13.8433 110.668 13.3487 110.602 12.798H112.058C112.152 13.2647 112.385 13.652 112.758 13.96C113.132 14.2587 113.594 14.408 114.144 14.408C114.555 14.408 114.91 14.31 115.208 14.114C115.507 13.9087 115.74 13.638 115.908 13.302C116.076 12.966 116.16 12.588 116.16 12.168C116.16 11.5053 115.974 10.978 115.6 10.586C115.227 10.1847 114.756 9.984 114.186 9.984C113.701 9.984 113.286 10.1007 112.94 10.334C112.595 10.558 112.343 10.8427 112.184 11.188H110.77L111.61 5.7H116.902V7.002H112.73L112.226 9.62C112.441 9.37733 112.735 9.17667 113.108 9.018C113.491 8.85 113.92 8.766 114.396 8.766C115.059 8.766 115.628 8.92 116.104 9.228C116.58 9.52667 116.944 9.93267 117.196 10.446C117.458 10.9593 117.588 11.5287 117.588 12.154C117.588 12.8073 117.448 13.4 117.168 13.932C116.888 14.464 116.487 14.8887 115.964 15.206C115.451 15.514 114.84 15.668 114.13 15.668ZM125.691 17.53C125.168 17.026 124.697 16.4333 124.277 15.752C123.866 15.08 123.535 14.3333 123.283 13.512C123.04 12.6813 122.919 11.79 122.919 10.838C122.919 9.886 123.04 8.99933 123.283 8.178C123.535 7.34733 123.866 6.596 124.277 5.924C124.697 5.24267 125.168 4.65 125.691 4.146H127.175V4.286C126.335 5.154 125.658 6.148 125.145 7.268C124.641 8.388 124.389 9.578 124.389 10.838C124.389 12.098 124.641 13.288 125.145 14.408C125.658 15.528 126.339 16.522 127.189 17.39V17.53H125.691ZM131.6 15.668C130.946 15.668 130.354 15.5513 129.822 15.318C129.299 15.0753 128.879 14.7393 128.562 14.31C128.254 13.8807 128.1 13.3767 128.1 12.798C128.1 12.21 128.263 11.6827 128.59 11.216C128.926 10.7493 129.369 10.432 129.92 10.264C129.425 10.068 129.042 9.78333 128.772 9.41C128.501 9.02733 128.366 8.60733 128.366 8.15C128.366 7.674 128.492 7.24 128.744 6.848C128.996 6.44667 129.36 6.12933 129.836 5.896C130.321 5.65333 130.909 5.532 131.6 5.532C132.29 5.532 132.874 5.65333 133.35 5.896C133.835 6.12933 134.204 6.44667 134.456 6.848C134.708 7.24 134.834 7.674 134.834 8.15C134.834 8.598 134.694 9.018 134.414 9.41C134.143 9.79267 133.76 10.0773 133.266 10.264C133.816 10.4413 134.255 10.7633 134.582 11.23C134.918 11.6873 135.086 12.21 135.086 12.798C135.086 13.3767 134.932 13.8807 134.624 14.31C134.316 14.7393 133.896 15.0753 133.364 15.318C132.841 15.5513 132.253 15.668 131.6 15.668ZM131.6 9.788C132.141 9.788 132.566 9.648 132.874 9.368C133.191 9.088 133.35 8.72867 133.35 8.29C133.35 7.79533 133.196 7.41733 132.888 7.156C132.58 6.89467 132.15 6.764 131.6 6.764C131.049 6.764 130.62 6.89467 130.312 7.156C130.004 7.41733 129.85 7.79533 129.85 8.29C129.85 8.72867 130.004 9.088 130.312 9.368C130.62 9.648 131.049 9.788 131.6 9.788ZM131.6 14.408C132.272 14.408 132.776 14.2493 133.112 13.932C133.448 13.6053 133.616 13.19 133.616 12.686C133.616 12.126 133.434 11.6967 133.07 11.398C132.715 11.09 132.225 10.936 131.6 10.936C130.974 10.936 130.48 11.09 130.116 11.398C129.752 11.6967 129.57 12.126 129.57 12.686C129.57 13.19 129.738 13.6053 130.074 13.932C130.419 14.2493 130.928 14.408 131.6 14.408ZM140.733 15.668C140.015 15.668 139.408 15.5327 138.913 15.262C138.419 14.9913 138.017 14.632 137.709 14.184C137.411 13.736 137.196 13.232 137.065 12.672C136.935 12.112 136.869 11.538 136.869 10.95C136.869 9.86733 137.019 8.92 137.317 8.108C137.625 7.296 138.064 6.666 138.633 6.218C139.203 5.76067 139.893 5.532 140.705 5.532C141.349 5.532 141.9 5.658 142.357 5.91C142.815 6.162 143.169 6.498 143.421 6.918C143.683 7.338 143.841 7.79533 143.897 8.29H142.511C142.427 7.80467 142.227 7.43133 141.909 7.17C141.592 6.90867 141.186 6.778 140.691 6.778C140.01 6.778 139.445 7.1 138.997 7.744C138.559 8.37867 138.325 9.35867 138.297 10.684C138.521 10.2733 138.867 9.92333 139.333 9.634C139.809 9.34467 140.355 9.2 140.971 9.2C141.522 9.2 142.035 9.33067 142.511 9.592C142.997 9.85333 143.389 10.222 143.687 10.698C143.995 11.1647 144.149 11.72 144.149 12.364C144.149 12.9333 144.009 13.47 143.729 13.974C143.449 14.478 143.053 14.8887 142.539 15.206C142.035 15.514 141.433 15.668 140.733 15.668ZM140.649 14.38C141.041 14.38 141.391 14.296 141.699 14.128C142.007 13.96 142.25 13.7313 142.427 13.442C142.605 13.1433 142.693 12.8073 142.693 12.434C142.693 11.8367 142.497 11.3607 142.105 11.006C141.723 10.6513 141.233 10.474 140.635 10.474C140.243 10.474 139.889 10.5627 139.571 10.74C139.263 10.9173 139.021 11.1553 138.843 11.454C138.666 11.7433 138.577 12.0653 138.577 12.42C138.577 12.8027 138.666 13.1433 138.843 13.442C139.03 13.7313 139.277 13.96 139.585 14.128C139.903 14.296 140.257 14.38 140.649 14.38ZM145.253 17.53V17.39C146.093 16.522 146.77 15.528 147.283 14.408C147.797 13.288 148.053 12.098 148.053 10.838C148.053 9.578 147.797 8.388 147.283 7.268C146.779 6.148 146.107 5.154 145.267 4.286V4.146H146.751C147.265 4.65 147.731 5.24267 148.151 5.924C148.571 6.596 148.903 7.34733 149.145 8.178C149.397 8.99933 149.523 9.886 149.523 10.838C149.523 11.79 149.397 12.6813 149.145 13.512C148.903 14.3333 148.571 15.08 148.151 15.752C147.731 16.4333 147.265 17.026 146.751 17.53H145.253Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                                 <path
    //                                 d="M98 17.25H150.167V17.95H98V17.25Z"
    //                                 fill="#333333"
    //                                 fillOpacity="0.68"
    //                                 />
    //                             </svg>
    //                             </span>
    //                             <span className="price">Rp 300K</span>
    //                         </div>
    //                         </div>
    //                     </div>
                        
    //                     </div>
    //                 </div>
    //                 <div id="pemasaran" className="tabcontent">
    //                     <h3>Pemasaran</h3>
    //                     <p>Paris is the capital of France.</p>
    //                 </div>
    //                 <div id="desain" className="tabcontent">
    //                     <h3>Desain</h3>
    //                     <p>Tokyo is the capital of Japan.</p>
    //                 </div>
    //                 <div id="pengembanganDiri" className="tabcontent">
    //                     <h3>Pengembangan Diri</h3>
    //                     <p>Tokyo is the capital of Japan.</p>
    //                 </div>
    //                 <div id="bisnis" className="tabcontent">
    //                     <h3>Bisnis</h3>
    //                     <p>Tokyo is the capital of Japan.</p>
    //                 </div>
    //                 </article>
    //             </section>
    //             <section>
    //                 <article>
    //                 <div className="bannerImg" id="bannerContainer">
    //                     <img src="../banner.jpeg" alt="Banner" className="bannerImg" />
    //                     <div className="banner-text">
    //                     <h2>NEWSLETTER</h2>
    //                     <h1>Mau Belajar Lebih Banyak?</h1>
    //                     <p>
    //                         Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
    //                         spesial dari program-program terbaik hariesok.id
    //                     </p>
    //                     <div className="inputContainer">
    //                         <input
    //                         type="email"
    //                         name=""
    //                         id="inputEmail"
    //                         placeholder="Masukkan Emailmu"
    //                         />
    //                         <button id="subscribe">Subscribe</button>
    //                     </div>
    //                     <div></div>
    //                     </div>
    //                 </div>
    //                 </article>
    //             </section>
    //             <footer>
    //                 <div className="grid-container">
    //                 <div className="item1">
    //                     <svg
    //                     width={194}
    //                     height={31}
    //                     viewBox="0 0 194 31"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                     <path
    //                         d="M5.824 23.04L0 7.168H4.288L8.32 19.168L12.352 7.168H16.64L10.784 23.04H5.824Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M21.6315 4.704C20.8848 4.704 20.2662 4.48 19.7755 4.032C19.3062 3.584 19.0715 3.01867 19.0715 2.336C19.0715 1.65333 19.3062 1.09867 19.7755 0.671999C20.2662 0.224 20.8848 0 21.6315 0C22.3782 0 22.9862 0.224 23.4555 0.671999C23.9462 1.09867 24.1915 1.65333 24.1915 2.336C24.1915 3.01867 23.9462 3.584 23.4555 4.032C22.9862 4.48 22.3782 4.704 21.6315 4.704ZM19.5835 23.04V7.168H23.6795V23.04H19.5835Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M56.9417 23.424C55.3418 23.424 53.9231 23.0827 52.6857 22.4C51.4484 21.7173 50.4777 20.7573 49.7738 19.52C49.0698 18.2827 48.7177 16.8533 48.7177 15.232C48.7177 13.5893 49.0591 12.128 49.7417 10.848C50.4457 9.568 51.4058 8.576 52.6217 7.872C53.8591 7.14667 55.3097 6.784 56.9737 6.784C58.5311 6.784 59.9071 7.12533 61.1017 7.808C62.2964 8.49067 63.2244 9.42933 63.8857 10.624C64.5684 11.7973 64.9098 13.1093 64.9098 14.56C64.9098 14.7947 64.8991 15.04 64.8777 15.296C64.8777 15.552 64.8671 15.8187 64.8457 16.096H52.7817C52.8671 17.3333 53.2937 18.304 54.0617 19.008C54.8511 19.712 55.8004 20.064 56.9097 20.064C57.7417 20.064 58.4351 19.8827 58.9897 19.52C59.5658 19.136 59.9924 18.6453 60.2697 18.048H64.4297C64.1311 19.0507 63.6297 19.968 62.9258 20.8C62.2431 21.6107 61.3897 22.2507 60.3657 22.72C59.3631 23.1893 58.2217 23.424 56.9417 23.424ZM56.9737 10.112C55.9711 10.112 55.0858 10.4 54.3177 10.976C53.5497 11.5307 53.0591 12.384 52.8457 13.536H60.7497C60.6857 12.4907 60.3017 11.6587 59.5977 11.04C58.8937 10.4213 58.0191 10.112 56.9737 10.112Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M97.569 23.424C96.3743 23.424 95.329 23.2 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.036 12.1067 105.377 13.536 105.377 15.136C105.377 16.736 105.036 18.1653 104.353 19.424C103.67 20.6613 102.742 21.6427 101.569 22.368C100.396 23.072 99.0623 23.424 97.569 23.424ZM96.705 19.84C98.0063 19.84 99.0837 19.4027 99.937 18.528C100.79 17.6533 101.217 16.5227 101.217 15.136C101.217 13.7493 100.79 12.608 99.937 11.712C99.0837 10.816 98.0063 10.368 96.705 10.368C95.3823 10.368 94.2943 10.816 93.441 11.712C92.609 12.5867 92.193 13.7173 92.193 15.104C92.193 16.4907 92.609 17.632 93.441 18.528C94.2943 19.4027 95.3823 19.84 96.705 19.84Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M116.948 23.424C115.348 23.424 113.929 23.0827 112.692 22.4C111.455 21.7173 110.484 20.7573 109.78 19.52C109.076 18.2827 108.724 16.8533 108.724 15.232C108.724 13.5893 109.065 12.128 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C122.303 8.49067 123.231 9.42933 123.892 10.624C124.575 11.7973 124.916 13.1093 124.916 14.56C124.916 14.7947 124.905 15.04 124.884 15.296C124.884 15.552 124.873 15.8187 124.852 16.096H112.788C112.873 17.3333 113.3 18.304 114.068 19.008C114.857 19.712 115.807 20.064 116.916 20.064C117.748 20.064 118.441 19.8827 118.996 19.52C119.572 19.136 119.999 18.6453 120.276 18.048H124.436C124.137 19.0507 123.636 19.968 122.932 20.8C122.249 21.6107 121.396 22.2507 120.372 22.72C119.369 23.1893 118.228 23.424 116.948 23.424ZM116.98 10.112C115.977 10.112 115.092 10.4 114.324 10.976C113.556 11.5307 113.065 12.384 112.852 13.536H120.756C120.692 12.4907 120.308 11.6587 119.604 11.04C118.9 10.4213 118.025 10.112 116.98 10.112Z"
    //                         fill="#F64920"
    //                     />
    //                     <path d="M128.561 23.04V0H132.657V23.04H128.561Z" fill="#F64920" />
    //                     <path
    //                         d="M142.514 23.424C141.149 23.424 140.029 23.2107 139.154 22.784C138.28 22.336 137.629 21.7493 137.202 21.024C136.776 20.2987 136.562 19.4987 136.562 18.624C136.562 17.152 137.138 15.9573 138.29 15.04C139.442 14.1227 141.17 13.664 143.474 13.664H147.506V13.28C147.506 12.192 147.197 11.392 146.578 10.88C145.96 10.368 145.192 10.112 144.274 10.112C143.442 10.112 142.717 10.3147 142.098 10.72C141.48 11.104 141.096 11.68 140.946 12.448H136.946C137.053 11.296 137.437 10.2933 138.098 9.44C138.781 8.58667 139.656 7.936 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.952 9.61067 151.602 11.2107 151.602 13.28V23.04H148.114L147.73 20.48C147.261 21.3333 146.6 22.0373 145.746 22.592C144.914 23.1467 143.837 23.424 142.514 23.424ZM143.442 20.224C144.616 20.224 145.522 19.84 146.162 19.072C146.824 18.304 147.24 17.3547 147.41 16.224H143.922C142.834 16.224 142.056 16.4267 141.586 16.832C141.117 17.216 140.882 17.696 140.882 18.272C140.882 18.8907 141.117 19.3707 141.586 19.712C142.056 20.0533 142.674 20.224 143.442 20.224Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M157.983 4.704C157.236 4.704 156.618 4.48 156.127 4.032C155.658 3.584 155.423 3.01867 155.423 2.336C155.423 1.65333 155.658 1.09867 156.127 0.671999C156.618 0.224 157.236 0 157.983 0C158.73 0 159.338 0.224 159.807 0.671999C160.298 1.09867 160.543 1.65333 160.543 2.336C160.543 3.01867 160.298 3.584 159.807 4.032C159.338 4.48 158.73 4.704 157.983 4.704ZM152.703 30.08V26.592H153.951C154.655 26.592 155.156 26.4533 155.455 26.176C155.754 25.8987 155.903 25.4293 155.903 24.768V7.168H159.999V24.768C159.999 26.688 159.508 28.0533 158.527 28.864C157.567 29.6747 156.255 30.08 154.591 30.08H152.703Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         d="M183.142 23.04V7.168H186.79L187.174 10.144C187.75 9.12 188.529 8.30933 189.51 7.712C190.513 7.09333 191.686 6.784 193.03 6.784V11.104H191.878C190.982 11.104 190.182 11.2427 189.478 11.52C188.774 11.7973 188.22 12.2773 187.814 12.96C187.43 13.6427 187.238 14.592 187.238 15.808V23.04H183.142Z"
    //                         fill="#F64920"
    //                     />
    //                     <path
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M19.7755 4.032C20.2662 4.48 20.8848 4.704 21.6315 4.704C22.3782 4.704 22.9862 4.48 23.4555 4.032C23.9462 3.584 24.1915 3.01867 24.1915 2.336C24.1915 1.65333 23.9462 1.09867 23.4555 0.671999C22.9862 0.224 22.3782 0 21.6315 0C20.8848 0 20.2662 0.224 19.7755 0.671999C19.3062 1.09867 19.0715 1.65333 19.0715 2.336C19.0715 3.01867 19.3062 3.584 19.7755 4.032ZM19.5835 7.168V23.04H23.6795V7.168H19.5835ZM0 7.168L5.824 23.04H10.784L16.64 7.168H12.352L8.32 19.168L4.288 7.168H0ZM35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84ZM52.6857 22.4C53.9231 23.0827 55.3418 23.424 56.9417 23.424C58.2217 23.424 59.3631 23.1893 60.3657 22.72C61.3897 22.2507 62.2431 21.6107 62.9258 20.8C63.6297 19.968 64.1311 19.0507 64.4297 18.048H60.2697C59.9924 18.6453 59.5658 19.136 58.9897 19.52C58.4351 19.8827 57.7417 20.064 56.9097 20.064C55.8004 20.064 54.8511 19.712 54.0617 19.008C53.2937 18.304 52.8671 17.3333 52.7817 16.096H64.8457C64.8671 15.8187 64.8777 15.552 64.8777 15.296C64.8991 15.04 64.9098 14.7947 64.9098 14.56C64.9098 13.1093 64.5684 11.7973 63.8857 10.624C63.2244 9.42933 62.2964 8.49067 61.1017 7.808C59.9071 7.12533 58.5311 6.784 56.9737 6.784C55.3097 6.784 53.8591 7.14667 52.6217 7.872C51.4058 8.576 50.4457 9.568 49.7417 10.848C49.0591 12.128 48.7177 13.5893 48.7177 15.232C48.7177 16.8533 49.0698 18.2827 49.7738 19.52C50.4777 20.7573 51.4484 21.7173 52.6857 22.4ZM54.3177 10.976C55.0858 10.4 55.9711 10.112 56.9737 10.112C58.0191 10.112 58.8937 10.4213 59.5977 11.04C60.3017 11.6587 60.6857 12.4907 60.7497 13.536H52.8457C53.0591 12.384 53.5497 11.5307 54.3177 10.976ZM76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872ZM105.377 15.1069C102.118 17.4506 99.2007 20.239 96.7134 23.3832C95.8684 23.3001 95.1083 23.0897 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.032 12.099 105.373 13.5187 105.377 15.1069ZM121.414 7.99226C116.991 8.93891 112.819 10.5659 109.015 12.7584C109.185 12.0821 109.429 11.4453 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C121.212 7.86748 121.314 7.9289 121.414 7.99226ZM132.657 7.09533C131.928 7.05858 131.194 7.03998 130.456 7.03998C129.821 7.03998 129.189 7.05374 128.561 7.08099V0H132.657V7.09533ZM151.576 12.5752C147.91 10.5042 143.91 8.95566 139.676 8.03079C140.001 7.8252 140.35 7.64427 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.8 9.47881 151.442 10.8439 151.576 12.5752ZM159.999 18.7954C158.707 17.5732 157.339 16.4303 155.903 15.3744V7.168H159.999V18.7954ZM99.937 18.528C99.0837 19.4027 98.0063 19.84 96.705 19.84C95.3823 19.84 94.2943 19.4027 93.441 18.528C92.609 17.632 92.193 16.4907 92.193 15.104C92.193 13.7173 92.609 12.5867 93.441 11.712C94.2943 10.816 95.3823 10.368 96.705 10.368C98.0063 10.368 99.0837 10.816 99.937 11.712C100.79 12.608 101.217 13.7493 101.217 15.136C101.217 16.5227 100.79 17.6533 99.937 18.528ZM156.127 4.032C156.618 4.48 157.236 4.704 157.983 4.704C158.73 4.704 159.338 4.48 159.807 4.032C160.298 3.584 160.543 3.01867 160.543 2.336C160.543 1.65333 160.298 1.09867 159.807 0.671999C159.338 0.224 158.73 0 157.983 0C157.236 0 156.618 0.224 156.127 0.671999C155.658 1.09867 155.423 1.65333 155.423 2.336C155.423 3.01867 155.658 3.584 156.127 4.032ZM169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224ZM186.79 7.168H183.142V23.04H187.238V15.808C187.238 14.592 187.43 13.6427 187.814 12.96C188.22 12.2773 188.774 11.7973 189.478 11.52C190.182 11.2427 190.982 11.104 191.878 11.104H193.03V6.784C191.686 6.784 190.513 7.09333 189.51 7.712C188.529 8.30933 187.75 9.12 187.174 10.144L186.79 7.168Z"
    //                         fill="#FFBD3A"
    //                     />
    //                     </svg>
    //                     <h3>
    //                     Gali Potensi Anda Melalui Pembelajaran
    //                     <br /> Video di hariesok.id!
    //                     </h3>
    //                     <h5>Jl. Usman Effendi No. 50 Lowokwaru, Malang</h5>
    //                     <h5>+62-877-7123-1234</h5>
    //                 </div>
    //                 <div className="item2 dropdown">
    //                     {/* <h4 className="dropbtn" style="width: 100%;"><strong>Kategori</strong><span style="margin-top: auto; margin-bottom: auto; float: right;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#3A3541" fill-opacity="0.54"/>
    //                         </svg>
    //                         </span></h4> */}
    //                     <h4 className="dropbtn" style={{ width: "100%" }}>
    //                     <strong>Kategori</strong>
    //                     <span
    //                         className="material-symbols-outlined arrowRight"
    //                         style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
    //                     >
    //                         keyboard_arrow_right
    //                     </span>
    //                     </h4>
    //                     <div className="dropdown-content">
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Digital &amp; Teknologi
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Pemasaran
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Manajemen Bisnis
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Pengembangan Diri
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Desain
    //                     </h5>
    //                     </div>
    //                 </div>
    //                 <div className="item3">
    //                     <h4 className="dropbtn" style={{ width: "100%" }}>
    //                     <strong>Perusahaan</strong>
    //                     <span
    //                         className="material-symbols-outlined arrowRight"
    //                         style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
    //                     >
    //                         keyboard_arrow_right
    //                     </span>
    //                     </h4>
    //                     <div className="dropdown-content">
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Tentang Kami
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         FAQ
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Kebijakan Privasi
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Ketentuan Layanan
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Bantuan
    //                     </h5>
    //                     </div>
    //                 </div>
    //                 <div className="item4">
    //                     <h4 className="dropbtn" style={{ width: "100%" }}>
    //                     <strong>Komunitas</strong>
    //                     <span
    //                         className="material-symbols-outlined arrowRight"
    //                         style={{ marginTop: "auto", marginBottom: "auto", float: "right" }}
    //                     >
    //                         keyboard_arrow_right
    //                     </span>
    //                     </h4>
    //                     <div className="dropdown-content">
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Tips Sukses
    //                     </h5>
    //                     <h5
    //                         style={{
    //                         fontFamily: "DM Sans",
    //                         fontSize: 16,
    //                         fontWeight: 500,
    //                         lineHeight: "22.4px",
    //                         letterSpacing: "0.20000000298023224px",
    //                         textAlign: "left",
    //                         marginBottom: 2,
    //                         marginTop: 5
    //                         }}
    //                     >
    //                         Blog
    //                     </h5>
    //                     </div>
    //                 </div>
    //                 </div>
    //                 <div className="copyright">
    //                 <ul style={{ paddingLeft: 0 }}>
    //                     <li className="socialMedia showOnMobile">
    //                     <svg
    //                         width={187}
    //                         height={37}
    //                         viewBox="0 0 187 37"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <path
    //                         d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
    //                         fill="#222325"
    //                         />
    //                         <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
    //                         <path
    //                         d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
    //                         fill="#222325"
    //                         />
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M68.5 36C78.165 36 86 28.165 86 18.5C86 8.83502 78.165 1 68.5 1C58.835 1 51 8.83502 51 18.5C51 28.165 58.835 36 68.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <path
    //                         d="M74.0007 9.6665H71.5007C70.3956 9.6665 69.3358 10.1055 68.5544 10.8869C67.773 11.6683 67.334 12.7281 67.334 13.8332V16.3332H64.834V19.6665H67.334V26.3332H70.6673V19.6665H73.1673L74.0007 16.3332H70.6673V13.8332C70.6673 13.6122 70.7551 13.4002 70.9114 13.2439C71.0677 13.0876 71.2796 12.9998 71.5007 12.9998H74.0007V9.6665Z"
    //                         fill="#222325"
    //                         />
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M118.5 36C128.165 36 136 28.165 136 18.5C136 8.83502 128.165 1 118.5 1C108.835 1 101 8.83502 101 18.5C101 28.165 108.835 36 118.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <g clipPath="url(#clip0_4461_1649)">
    //                         <path
    //                             d="M123.166 10.6665H114.833C112.531 10.6665 110.666 12.532 110.666 14.8332V23.1665C110.666 25.4677 112.531 27.3332 114.833 27.3332H123.166C125.467 27.3332 127.333 25.4677 127.333 23.1665V14.8332C127.333 12.532 125.467 10.6665 123.166 10.6665Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         <path
    //                             d="M122.334 18.4748C122.437 19.1683 122.318 19.8766 121.995 20.4989C121.672 21.1213 121.161 21.6259 120.535 21.9412C119.909 22.2564 119.199 22.3661 118.507 22.2547C117.815 22.1433 117.175 21.8165 116.679 21.3207C116.184 20.825 115.857 20.1855 115.745 19.4933C115.634 18.8011 115.744 18.0913 116.059 17.4651C116.374 16.8388 116.879 16.3279 117.501 16.005C118.124 15.682 118.832 15.5636 119.525 15.6664C120.233 15.7713 120.888 16.101 121.393 16.6067C121.899 17.1124 122.229 17.7673 122.334 18.4748Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         <path
    //                             d="M123.584 14.4165H123.592"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         </g>
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M168.5 36C178.165 36 186 28.165 186 18.5C186 8.83502 178.165 1 168.5 1C158.835 1 151 8.83502 151 18.5C151 28.165 158.835 36 168.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <g clipPath="url(#clip1_4461_1649)">
    //                         <path
    //                             d="M178.165 11.5001C177.367 12.063 176.484 12.4935 175.549 12.7751C175.047 12.198 174.38 11.789 173.638 11.6034C172.896 11.4177 172.115 11.4644 171.4 11.7371C170.686 12.0098 170.072 12.4954 169.643 13.1282C169.213 13.7609 168.988 14.5104 168.999 15.2751V16.1084C167.534 16.1464 166.083 15.8216 164.775 15.163C163.466 14.5043 162.341 13.5323 161.499 12.3334C161.499 12.3334 158.165 19.8334 165.665 23.1667C163.949 24.3317 161.905 24.9159 159.832 24.8334C167.332 29.0001 176.499 24.8334 176.499 15.2501C176.498 15.018 176.476 14.7864 176.432 14.5584C177.283 13.7197 177.883 12.6607 178.165 11.5001V11.5001Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         </g>
    //                         <defs>
    //                         <clipPath id="clip0_4461_1649">
    //                             <rect
    //                             width={20}
    //                             height={20}
    //                             fill="white"
    //                             transform="translate(109 9)"
    //                             />
    //                         </clipPath>
    //                         <clipPath id="clip1_4461_1649">
    //                             <rect
    //                             width={20}
    //                             height={20}
    //                             fill="white"
    //                             transform="translate(159 9)"
    //                             />
    //                         </clipPath>
    //                         </defs>
    //                     </svg>
    //                     </li>
    //                     <li className="company">@2023 Gerobak Sayur All Rights Reserved.</li>
    //                     <li className="socialMedia">
    //                     <svg
    //                         width={37}
    //                         height={37}
    //                         viewBox="0 0 37 37"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <path
    //                         d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
    //                         fill="#222325"
    //                         />
    //                         <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
    //                         <path
    //                         d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
    //                         fill="#222325"
    //                         />
    //                     </svg>
    //                     <svg
    //                         width={37}
    //                         height={37}
    //                         viewBox="0 0 37 37"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <path
    //                         d="M24.0007 9.6665H21.5007C20.3956 9.6665 19.3358 10.1055 18.5544 10.8869C17.773 11.6683 17.334 12.7281 17.334 13.8332V16.3332H14.834V19.6665H17.334V26.3332H20.6673V19.6665H23.1673L24.0007 16.3332H20.6673V13.8332C20.6673 13.6122 20.7551 13.4002 20.9114 13.2439C21.0677 13.0876 21.2796 12.9998 21.5007 12.9998H24.0007V9.6665Z"
    //                         fill="#222325"
    //                         />
    //                     </svg>
    //                     <svg
    //                         width={37}
    //                         height={37}
    //                         viewBox="0 0 37 37"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <g clipPath="url(#clip0_3869_424)">
    //                         <path
    //                             d="M23.166 10.6665H14.8327C12.5315 10.6665 10.666 12.532 10.666 14.8332V23.1665C10.666 25.4677 12.5315 27.3332 14.8327 27.3332H23.166C25.4672 27.3332 27.3327 25.4677 27.3327 23.1665V14.8332C27.3327 12.532 25.4672 10.6665 23.166 10.6665Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         <path
    //                             d="M22.3337 18.4748C22.4366 19.1683 22.3181 19.8766 21.9952 20.4989C21.6723 21.1213 21.1614 21.6259 20.5351 21.9412C19.9088 22.2564 19.1991 22.3661 18.5069 22.2547C17.8147 22.1433 17.1752 21.8165 16.6794 21.3207C16.1837 20.825 15.8569 20.1855 15.7455 19.4933C15.6341 18.8011 15.7438 18.0913 16.059 17.4651C16.3742 16.8388 16.8789 16.3279 17.5012 16.005C18.1236 15.682 18.8319 15.5636 19.5254 15.6664C20.2328 15.7713 20.8878 16.101 21.3935 16.6067C21.8992 17.1124 22.2288 17.7673 22.3337 18.4748Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         <path
    //                             d="M23.584 14.4165H23.5923"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         </g>
    //                         <defs>
    //                         <clipPath id="clip0_3869_424">
    //                             <rect
    //                             width={20}
    //                             height={20}
    //                             fill="white"
    //                             transform="translate(9 9)"
    //                             />
    //                         </clipPath>
    //                         </defs>
    //                     </svg>
    //                     <svg
    //                         width={37}
    //                         height={37}
    //                         viewBox="0 0 37 37"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                         opacity="0.35"
    //                         fillRule="evenodd"
    //                         clipRule="evenodd"
    //                         d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
    //                         stroke="#222325"
    //                         strokeWidth="1.5"
    //                         />
    //                         <g clipPath="url(#clip0_3869_430)">
    //                         <path
    //                             d="M28.1654 11.5001C27.3674 12.063 26.4838 12.4935 25.5487 12.7751C25.0468 12.198 24.3798 11.789 23.6379 11.6034C22.896 11.4177 22.1149 11.4644 21.4004 11.7371C20.6859 12.0098 20.0724 12.4954 19.6429 13.1282C19.2133 13.7609 18.9884 14.5104 18.9987 15.2751V16.1084C17.5342 16.1464 16.0831 15.8216 14.7745 15.163C13.466 14.5043 12.3406 13.5323 11.4987 12.3334C11.4987 12.3334 8.16536 19.8334 15.6654 23.1667C13.9491 24.3317 11.9047 24.9159 9.83203 24.8334C17.332 29.0001 26.4987 24.8334 26.4987 15.2501C26.4979 15.018 26.4756 14.7864 26.432 14.5584C27.2825 13.7197 27.8827 12.6607 28.1654 11.5001V11.5001Z"
    //                             stroke="#222325"
    //                             strokeWidth={2}
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                         />
    //                         </g>
    //                         <defs>
    //                         <clipPath id="clip0_3869_430">
    //                             <rect
    //                             width={20}
    //                             height={20}
    //                             fill="white"
    //                             transform="translate(9 9)"
    //                             />
    //                         </clipPath>
    //                         </defs>
    //                     </svg>
    //                     </li>
    //                 </ul>
    //                 </div>
    //             </footer>
    //         </>
    //     )
    // }
    
}