import { create } from "zustand";

interface UserState {
  image: string;
  setImage: (data: any) => void;
}

const useUserState = create<UserState>((set) => ({
  image: "",

  setImage: (image) => {
    set(() => ({ image: image }));
  },
}));

export default useUserState;
