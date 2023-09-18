import { create } from "zustand";

interface indexState{
    index : number
    crew : number
}

const useStore = create<indexState>((set) => ({
    index: 0,
    crew: 0
    
}))

export default useStore;

