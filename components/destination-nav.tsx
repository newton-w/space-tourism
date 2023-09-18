// "use client"

import classNames from 'classnames'

import useStore from '@/zustand/index-store'
// import { useEffect, useState } from 'react'

const MiniNav = () => {

    const index = useStore(state => state.index)

    // const [url, setUrl] = useState("moon")

    // useEffect(()=>{
    //     if(index === 0){
    //         setUrl("moon")
    //     }else if(index === 1){
    //         setUrl("mars")
    //     }else if(index === 2){
    //         setUrl("europa")
    //     }else if(index === 3){
    //         setUrl("titan")
    //     }

    // },[index, url])

    // useEffect(()=>{
    //     window.history.pushState(
    //         null,
    //         "",
    //         `destination=${url}`
    //     )

        

    // },[index, url])


    return (
        <ul className=" flex items-center justify-center w-full py-6 gap-6 md:py-12 lg:justify-start">
            <li onClick={() => useStore.setState({ index: 0 })} className={classNames(" py-2 text-cream cursor-pointer", { "border-b-[3px] text-white border-white ": index === 0 })}>MOON</li>
            <li onClick={() => useStore.setState({ index: 1 })} className={classNames(" py-2 text-cream cursor-pointer", { "border-b-[3px] text-white border-white ": index === 1 })}>MARS</li>
            <li onClick={() => useStore.setState({ index: 2 })} className={classNames(" py-2 text-cream cursor-pointer", { "border-b-[3px] text-white border-white ": index === 2 })}>EUROPA</li>
            <li onClick={() => useStore.setState({ index: 3 })} className={classNames(" py-2 text-cream cursor-pointer", { "border-b-[3px] text-white border-white ": index === 3 })}>TITAN</li>
        </ul>
    );
}

export default MiniNav;