import { create } from 'zustand';

const useNavBarItemStore = create((set) => ({
    selectedItem: 0,
    setSelectedItem: (data) => set({ selectedItem: data }),
}));

export default useNavBarItemStore;