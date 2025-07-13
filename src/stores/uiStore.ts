import { create } from 'zustand';

type UIState = {
    isNavbarOpen: boolean;
    toggleNavbar: (isOpen: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
    isNavbarOpen: false,
    toggleNavbar: (isOpen: boolean) => set((state) => ({ ...state, isNavbarOpen: isOpen })),
}));