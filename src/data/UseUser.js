import { create } from 'zustand';

const items = [{ id: 1, namaLengkap: 'namaLengkap1', email: 'user1@gmail.com', kataSandi: '1234', konfirmasiKataSandi: '1234' }, { id: 2, namaLengkap: 'namaLengkap2', email: 'user2@gmail.com', kataSandi: '12345', konfirmasiKataSandi: '1234' }];

const useUser = create((set) => ({
    namaLengkap: '',
    email: '',
    noHp: '',
    kataSandi: '',
    konfirmasiKataSandi: '',
    items,
    selectedUser: [],
    addItem: (newItem) => set((state) => ({
        items: [...state.items, newItem]
    })),
    updateItems: updates => set(state => ({
        items: state.items.map(item => {
            const update = updates.find(u => u.id === item.id)
            return update ? { ...item, ...update } : item
        })
    })),
    selectUserByEmail: (index) => set(state => ({
        selectedUser: state.items.filter(item => item.email === index)
    })),
    deleteItem: (index) => set(state => ({
        // items: state.items.filter(item => !index.includes(item.id))
        items: state.items.filter(item => item.email != index)
    })),
    // selectItem: () => set(state => ({
    //     item: state.item
    // }))
}));

export default useUser;