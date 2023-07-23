'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import Typer from './components/typer'

export default function Home() {
    const [scrolled, setScrolled] = useState(false)

    const setScroll = () => {
        window.scrollY == 0 ? setScrolled(false) : setScrolled(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", setScroll)
        return () => {
            window.removeEventListener("scroll", setScroll)
        }
    }, [])


    return (
        <div className="h-full flex flex-col items-center gap-14">
            <Header scrolled={scrolled}/>
            <Typer />
            <p className="text-xl text-gray-500">Easily organize, plan, and share</p>
            <div className="flex gap-2 mb-80">
                <a href="#">
                    <div className="text-red-600 border border-red-600 py-4 px-8 rounded shadow hover:bg-red-600 hover:text-white transition-all duration-300">Live demo</div>
                </a>
                <a href="#">
                    <div className="text-sky-700 border border-sky-700 py-4 px-8 rounded shadow hover:bg-sky-700 hover:text-white transition-all duration-300">Create calender</div>
                </a>
            </div>
            <Signup />
        </div>
    )
}

const Header = ({scrolled}) => {
    return (
        <div 
            className={clsx("sticky top-0 w-full flex justify-between items-center py-8 px-80 transition-all duration-300 mb-28", scrolled && "bg-white shadow py-4")}
        >
            <h1 className="font-bold text-2xl">Calender.online</h1>
            <div className="flex items-center gap-8">
                <ul className="flex justify-center [&>*]:px-4 [&>*]:font-bold">
                    <li className="hover:underline"><a href="#">START</a></li>
                    <li className="hover:underline"><a href="#">FEATURES</a></li>
                    <li className="hover:underline"><a href="#">PRICING</a></li>
                    <li className="hover:underline"><a href="#">FAQS</a></li>
                    <li className="hover:underline"><a href="/login">login</a></li>
                </ul>
                <a href="/calender">
                    <div
                        className="text-cyan-700 border border-cyan-700 py-2 px-4 rounded shadow hover:bg-cyan-700 hover:text-white transition-all duration-300"
                    >Create calender</div>
                </a>
            </div>
        </div>
    )
}

const Signup = () => {
    return (
        <div className="w-full flex justify-center bg-sky-900 py-16">
            <div className="flex gap-2 [&>*]:text-sky-900/70">
                <input className="block px-4 rounded outline-none focus:ring" type="text" placeholder="E-mail address"/>
                <button className="bg-white py-2 px-4 rounded hover:text-white hover:bg-sky-100/70 transition-all duration-300">Create a free calender</button>
            </div>
        </div>
    )
}
