import { create } from 'zustand';

interface UserState {
    image: string;
    setImage: (data: any) => void;
}

const useUserState = create<UserState>((set) => ({
    image: '806d6f70-056b-4f8d-8f3e-261abeacf4b0kenny.png',

    setImage: (image) => set(() => ({ image: image })),
}));

export default useUserState;
