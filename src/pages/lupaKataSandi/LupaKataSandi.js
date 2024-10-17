import React, { useState, useEffect } from 'react';
// import useUser from '../../data/UseUser';
import useLink from '../../data/UseLink';
import { useNavigate } from 'react-router-dom';
// import { event } from 'jquery';
// import { create } from 'zustand';

const LupaKataSandi = () => {
    const navigate = useNavigate();
    // const items = useUser((state) => state.items);
    // const selectedUser = useUser((state) => state.selectedUser);
    // const updateItems = useUser((state) => state.updateItems);
    // const selectUserByEmail = useUser((state) => state.selectUserByEmail);
    const selectedUser = useLink((state) => state.selectedUser);
    const selectUserByEmail = useLink((state) => state.selectUserByEmail);
    const linkGet = useLink((state) => state.linkGet);
    const linkUpdate = useLink((state) => state.linkUpdate);
    const [ users, setUsers ] = useState([]);
    const [ email, setEmail ] = useState('');
    const [ kataSandi, setKataSandi ] = useState('');
    const [ konfirmasiKataSandi, setKonfirmasiKataSandi ] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                linkGet,
            );
            const data = await response.json();
            setUsers(data);
        };
        fetchPost();
    }, []);
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleKataSandi = (event) => {
        setKataSandi(event.target.value);
    }

    const handleKonfirmasiKataSandi = (event) => {
        setKonfirmasiKataSandi(event.target.value);
    }

    const updateKataSandi = async () => {
        const findItem = users.find(item => item.email === email);
        console.log("FindItem ID: ", findItem.id);
        const ids = findItem.id;
        selectUserByEmail(findItem);

        await fetch(`https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/${ids}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                kataSandi,
                konfirmasiKataSandi
            }),
        })
        // .then(response => {
        //     if (!response.ok) {
        //         // throw new Error(HTTP error! Status: ${response.status});
        //         console.log("Error disini");
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
            // .then(resp => resp.json())
            // .then(updatedCustomer => {
            //     handleCustomerUpdate(updatedCustomer)})
        
        // updateItems([{ id: findId, kataSandi, konfirmasiKataSandi }]);
        // handleSelectedEmail(email);
        navigate('/beranda');
    }


    // console.log("Selected User 2: ", selectedUser);

    // console.log('Selecting: ', selectedUser);

    // const handleSelectedEmail = (index) => {
    //     selectUserByEmail(index);
    // };
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
            {/* <button onClick={() => handleSelectedEmail(email)}>Select Email</button> */}
            {/* <h1>Selected email : {selectedUser[0].id}</h1> */}
        </div>
    );
};
 
export default LupaKataSandi;