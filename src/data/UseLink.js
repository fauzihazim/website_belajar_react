import { create } from 'zustand';

const useLink = create((set) => ({
    linkCreate: 'https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/',
    linkGet: 'https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/',
    linkUpdate: 'https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/',
    linkDelete: 'https://670e8a943e7151861654fb21.mockapi.io/web_belajar/v1/users/',
    selectedUser: [],
    selectUserByEmail: (index) => set(state => ({
        selectedUser: index
    })),
    deleteSelectedUser: () => set(state => ({
        selectedUser: [],
    }))
}));

export default useLink;