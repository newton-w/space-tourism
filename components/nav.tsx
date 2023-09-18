"use client"

import Image from "next/image";
import { useState, useEffect } from "react"
import classNames from "classnames"

import logo from "@/app/images/logo.png"
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
                <div>
                    <Image src={logo} width={48} height={46} alt="logo" className=" w-10 h-10 object-cover" />
                </div>

                <div className={classNames('z-50 lg:hidden mr-4 flex flex-col gap-2 cursor-pointer duration-300  md:hidden', { '-rotate-45': menu === false })} onClick={HandleMenu}>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'translate-y-[9px]': menu === false })}> </div>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'opacity-0': menu === false })}> </div>
                    <div className={classNames(' w-6 h-[0.188rem] bg-white duration-300', { 'rotate-90 -translate-y-[10px]': menu === false })}> </div>
                </div>

                <div className={classNames(`z-40 absolute top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur translate-x-0 opacity-0 duration-300  md:hidden`, { 'translate-x-0 opacity-100': menu === false })}>
                    <ul className=" pt-[7.5rem] pl-8 flex flex-col gap-8">

                        {
                            navLink.map((item) => (

                                <Link onClick={HandleMenu} href={item.link} className={`${path === item.link ? 'active' : ''} flex gap-3 text-base text-white`} key={item.id}>
                                    <p className="hidden lg:block font-bold">{item.id}</p>
                                    <p className="uppercase">{item.name}</p>
                                </Link>

                            ))}

                        {/* <li className="flex gap-3 text-base text-white">
                            <p className="font-bold">01</p>
                            <p className="lg:font-light">DESTINATION</p>
                        </li>
                        <li className="flex gap-3 text-base text-white">
                            <p className="font-bold">02</p>
                            <p className="lg:font-light">CREW</p>
                        </li>
                        <li className="flex gap-3 text-base text-white">
                            <p className="font-bold">03</p>
                            <p className="lg:font-light">TECHNOLOGY</p>
                        </li> */}
                    </ul>
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

{/* <Link href="/destination" className="flex gap-3 text-base text-white lg:gap-4">
        <p className="hidden lg:block font-bold">01</p>
        <p>DESTINATION</p>
    </Link>

    <Link href="/crew" className="flex gap-3 text-base text-white lg:gap-4">
        <p className="hidden lg:block font-bold">02</p>
        <p>CREW</p>
    </Link>
    <Link href="/technology" className="flex gap-3 text-base text-white lg:gap-4">
        <p className="hidden lg:block font-bold">03</p>
        <p>TECHNOLOGY</p>
    </Link> */}