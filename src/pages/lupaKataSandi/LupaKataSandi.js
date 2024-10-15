import React, { useState } from 'react';
import useUser from '../../data/UseUser';
import { useNavigate } from 'react-router-dom';
// import { event } from 'jquery';
// import { create } from 'zustand';

const LupaKataSandi = () => {
    const navigate = useNavigate();
    const items = useUser((state) => state.items);
    const selectedUser = useUser((state) => state.selectedUser);
    const updateItems = useUser((state) => state.updateItems);
    const selectUserByEmail = useUser((state) => state.selectUserByEmail);
    const [ email, setEmail ] = useState('');
    const [ kataSandi, setKataSandi ] = useState('');
    const [ konfirmasiKataSandi, setKonfirmasiKataSandi ] = useState('');
    
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
        const findId = items.find(item => item.email === email).id;
        updateItems([{ id: findId, kataSandi, konfirmasiKataSandi }]);
        handleSelectedEmail(email);
        navigate('/beranda');
    }

    // console.log('Selecting: ', selectedUser);

    const handleSelectedEmail = (index) => {
        selectUserByEmail(index);
    };
    return (
        <div>
            <h1>Kata Sandi</h1>
            <label htmlFor="email">Email</label><br />
            <input type="email" name="" id="email" value={email} onChange={handleEmail}/><br />
            <label htmlFor="kataSandi">Kata Sandi Baru</label><br />
            <input type="password" name="kata sandi baru" id="kataSandi" value={kataSandi} onChange={handleKataSandi} /><br />
            <label htmlFor="konfirmasiKataSandi">Konfirmasi Kata Sandi Baru</label><br />
            <input type="password" name="konfirmasi kata sandi baru" id="konfirmasiKataSandi" value={konfirmasiKataSandi} onChange={handleKonfirmasiKataSandi} /><br />
            <button onClick={updateKataSandi}>Submit</button><br />
            <button onClick={() => handleSelectedEmail(email)}>Select Email</button>
            {/* <h1>Selected email : {selectedUser[0].id}</h1> */}
        </div>
    );
};
 
export default LupaKataSandi;