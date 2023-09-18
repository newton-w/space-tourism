import useStore from "@/zustand/index-store";

const CrewNav = () => {

    const crew = useStore(state => state.crew)

    return (
        <div className="flex gap-4">
            <div onClick={() => useStore.setState({ crew: 0 })} className="cursor-pointer bg-white h-2 w-2 rounded-full"></div>
            <div onClick={() => useStore.setState({ crew: 1 })} className="cursor-pointer bg-white h-2 w-2 rounded-full"></div>
            <div onClick={() => useStore.setState({ crew: 2 })} className="cursor-pointer bg-white h-2 w-2 rounded-full"></div>
            <div onClick={() => useStore.setState({ crew: 3 })} className="cursor-pointer bg-white h-2 w-2 rounded-full"></div>
        </div>
    );
}

export default CrewNav;