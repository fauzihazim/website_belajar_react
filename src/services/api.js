import { useState, useEffect } from 'react';
import useLink from '../data/UseLink';
export function GetData() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
            'https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/', { method: 'GET' }
            );
            const data = await response.json();
            // console.log("data: ", data);
            setPosts(data);
        };
        fetchPost();
        // return data;
    }, []);
    // console.log("Post: ", posts);
    return posts;
}
export const AddData = async (namaLengkap, email, noHp, kataSandi, konfirmasiKataSandi) => {
    const res = await fetch('https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/', {
        method: 'POST',
        body: JSON.stringify({
            namaLengkap,
            email,
            noHp,
            kataSandi,
            konfirmasiKataSandi
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const response = await res.json();
    console.log("Respon ", response);
    return response;
}
export const DeleteData = async (deletedId, dataUsers) => {
    // console.log("Deleting Email: ", email);
    // console.log("The global data is ", dataUsers);
    const findId = dataUsers.find(user => user.id === deletedId);
    console.log("Find id is ", findId);
    
    if (findId == null) {
      console.log("User didnt find");
      return;
    }
    // console.log("The ID is ", findId.id);
    let response = await fetch(
        `https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/${deletedId}`,
        {
            method: 'DELETE',
        }
    );
    // console.log("Status reponse ", response.status);
    
    if (response.status === 200) {
        dataUsers = dataUsers.filter(user => user.id !== deletedId);
        console.log("The user after deleting ", dataUsers);
        return dataUsers;
    } else {
        console.log("Failed to delete");
        return;
    };
};

export const UpdatePassword = async (updateId, dataUsers, kataSandi, konfirmasiKataSandi) => {
    const res = await fetch('https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/'+updateId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            kataSandi,
            konfirmasiKataSandi
        }),
    })
    // console.log("The ID is: ", updateId);
    // console.log("The data user: ", dataUsers);

    if (res.status === 200) {
        // dataUsers = dataUsers.filter(user => user.id !== updateId);
        console.log("Succesfully update");
        return dataUsers;
    } else {
        console.log("Failed to update");
        return;
    };
    
    
}