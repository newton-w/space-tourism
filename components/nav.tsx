"use client"

import Image from "next/image";
import { useState } from "react"
import classNames from "classnames"

import logo from "@/app/images/logo.webp"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {

    const [menu, setMenu] = useState(true)

    const HandleMenu = () => {
        setMenu((prev) => !prev)
    }

    const path = usePathname()

    const navLink = [
        {
            "id": "00",
            "name": "home",
            "link": "/"
        },
        {
            "id": "01",
            "name": "destination",
            "link": "/destination"
        },
        {
            "id": "02",
            "name": "crew",
            "link": "/crew"
        },
        {
            "id": "03",
            "name": "technology",
            "link": "/technology"
        }
    ]

    return (
        <div className=" 2xl:container 2xl:mx-auto ">
            <nav className="fixed w-full flex items-center justify-between p-6 md:px-11 lg:p-14 ">
                <Link href="/">
                    <Image src={logo} width={48} height={46} alt="logo" className=" w-10 h-10 object-cover" />
                </Link>

                <div className={classNames('z-50 lg:hidden mr-4 flex flex-col gap-2 cursor-pointer duration-300  md:hidden', { '-rotate-45': menu === false })} onClick={HandleMenu}>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'translate-y-[9px]': menu === false })}> </div>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'opacity-0': menu === false })}> </div>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'rotate-90 -translate-y-[10px]': menu === false })}> </div>
                </div>

                <div className={classNames(`z-40 absolute top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur translate-x-0 opacity-0 duration-300  md:hidden`, { 'translate-x-0 opacity-100': menu === false })}>
                    <ul className=" pt-[7.5rem] pl-8 flex flex-col gap-8">

                        {
                            navLink.map((item) => (

                               <li>
                                    <Link onClick={HandleMenu} href={item.link} className={`${path === item.link ? 'active' : ''} flex gap-3 text-base text-white`} key={item.id}>
                                        <p className="hidden lg:block font-bold">{item.id}</p>
                                        <p className="uppercase">{item.name}</p>
                                    </Link>
                               </li>

                            ))}
                    </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center w-[27.125rem] bg-white/50 h-[0.063rem] z-50 translate-x-16 mr-auto xl:translate-x-28 ">
                   
                </div>

                <ul className={`hidden w-[28.125rem] h-24 bg-white/5 backdrop-blur absolute right-0 md:flex items-center justify-center text-white gap-10 text-sm lg:w-[790px] xl:w-[890px] 2xl:left-[507px]`}>
                    {
                        navLink.map((item) => (

                            <Link href={item.link} className={`${path === item.link ? 'active' : ''} flex gap-3 text-base text-white lg:gap-4`} key={item.id}>
                                <p className="hidden lg:block font-bold">{item.id}</p>
                                <p className="uppercase">{item.name}</p>
                            </Link>

                        ))}
                </ul>

            </nav>
        </div>
    );
}

export default Nav;
