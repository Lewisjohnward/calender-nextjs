'use client'
import { useState, useEffect } from 'react'

const words = [ "Familes", "Teams", "Companies", "Groups"]

const Typer = () => {
    const [wordPos, setWordPos] = useState(0)
    const [word, setWord] = useState(words[wordPos])
    const [letter, setLetter] = useState(0)
    const [string, setString] = useState("")
    const [writing, setWriting] = useState(true)
    const [time, setTime] = useState(200)

    const writeLetter = () => {
        setString(prev => prev + word[letter])
        setLetter(letter + 1)
    }

    const deleteLetter = () => {
        const newWord = string.slice(0, -1)
        setString(newWord)
        setLetter(prev => prev - 1)
    }

    useEffect(() => {
        setTimeout(() => {
            if (letter + 1 > word.length - 1){  
                setWriting(false) 
                setTime(1000)
            }
            if(time == 1000 && !writing) setTime(200)

            if (letter - 1 <= 0 && !writing) {
                const newWordPos = wordPos + 1 > words.length - 1 ? wordPos - 1 : wordPos + 1
                setWriting(true)
                setWordPos(newWordPos)
                setWord(words[newWordPos])
            }
            writing ? writeLetter() : deleteLetter()
        }
            , time)
    }, [string])

    return (
        <p className="text-6xl">Calender for <span className="text-sky-700">{string}</span><Cursor/></p>
    )
}

const Cursor = () => {
    return (
        <span className="inline-block bg-sky-700 w-1 h-16"/>
    )
}

export default Typer
