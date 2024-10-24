import React, { useState, useEffect } from 'react';
// import useLink from '../../data/UseLink';
import useLink from '../../store/zustand/Store';
import { useNavigate } from 'react-router-dom';
import { GetData, UpdatePassword } from '../../services/api';

const LupaKataSandi = () => {
    const navigate = useNavigate();
    const users = useLink((state) => state.users);
    const getAllUsers = useLink((state) => state.getAllUsers);

    const selectedUser = useLink((state) => state.selectedUser);
    const selectUserByEmail = useLink((state) => state.selectUserByEmail);
    const linkGet = useLink((state) => state.linkGet);
    const linkUpdate = useLink((state) => state.linkUpdate);
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
        </div>
    );
};
 
export default LupaKataSandi;