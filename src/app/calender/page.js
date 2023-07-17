'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import Calender from '../components/calender'
import { CiSettings, CiSearch, CiLink, CiMenuBurger } from 'react-icons/ci'

export default function Home() {
    const [username, setUsername] = useState("Lewis")

    const [ year, setYear ] = useState(2023)
    return (
        <div className="space-y-2 bg-gray-100">

            <div className="flex justify-between items-center p-4 px-36 bg-white border-b border-gray">
                <h1 className="font-bold text-2xl">Calender.online</h1>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <CiLink className="text-gray-400 text-2xl -rotate-45"/>
                        <p>{username}</p>
                    </div>
                    <CiSettings className="text-gray-400 text-2xl hover:text-gray-600 cursor-pointer"/>
                    <CiSearch className="text-gray-400 text-2xl hover:text-gray-600 cursor-pointer"/>
                    <CiMenuBurger className="text-gray-400 text-2xl hover:text-gray-600 cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col items-center space-y-1">
                <YearSelector year={year} setYear={setYear}/>
                <Calender year={year}/>
            </div>

        </div>
    )
}

import { BiChevronLeft, BiChevronRight, BiRefresh } from 'react-icons/bi'

const YearSelector = ({year, setYear}) => {
    return (
        <div className="w-3/4 flex items-center justify-between gap-2">
            <div className="flex items-center border border-stone-400 p-1 rounded text-stone-400">
                <button>
                    <BiRefresh 
                        className="text-xl text-stone-700"
                    />
                </button>
            </div>
            <div className="flex justify-center gap-1">
                <button
                    className="flex items-center border border-stone-400 p-1 rounded text-stone-400"
                    onClick={() => setYear(prev => prev - 1)}
                >
                    <BiChevronLeft />
                </button>
                <div
                    className="flex items-center border border-stone-400 p-1 rounded text-stone-400 px-4 text-stone-700"
                >
                    {year}
                </div>
                <button
                    className="flex items-center border border-stone-400 p-1 rounded text-stone-400"
                    onClick={() => setYear(prev => prev + 1)}
                >
                    <BiChevronRight />
                </button>
            </div>
            <div className="flex items-center gap-1 [&>*]:border [&>*]:border-stone-400 [&>*]:text-stone-700 [&>*]:px-2 [&>*]:rounded">
                <button>Day</button>
                <button>Week</button>
                <button>Month</button>
                <button className="bg-cyan-700 !text-white font-semibold">Year</button>
                <button>List</button>
            </div>
        </div>
    )
}
