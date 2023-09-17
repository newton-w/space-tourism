import { create } from "zustand";

interface indexState{
    index : number
}

const useStore = create<indexState>((set) => ({
    index: 0,
    
}))

export default useStore;

