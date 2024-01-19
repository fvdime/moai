import { create } from 'zustand';

interface UserState {
    image: string;
    setImage: (data: any) => void;
}

const useUserState = create<UserState>((set) => ({
    image: '',

    setImage: (image) => {
        console.log(image);
        set(() => ({ image: image }));
    },
}));

export default useUserState;
