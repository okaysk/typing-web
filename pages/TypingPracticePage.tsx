import React, { useEffect, useState } from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let text = ['']

function TypingPracticePage() {
    const [input, setInput] = useState('')
    const [word, setWord] = useState([''])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(input)
        setInput(e.target.value)
    }

    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>, answer: string) => {
        if (e.target.value == answer) {
            // 해당 element className에 correct 추가
        } else {
            // 해당 element className에 incorrect 추가? 잠깐 보였다 사라지기 어케 하지.
        }
    }

    const updateType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: value } = e
        // setInput(value);
    }

    useEffect(() => {
        console.log(`mounting..`)
        for (let i = 0; i < 5; ++i) {
            text.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
            setWord(text)
            // word.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
        }
    }, [])

    console.log(`out text: ${word}`)

    return (
        <div className="page">
            {/* <input type="text" value={input} onChange={handleInput} className="word__input focus:outline-none border-2 border-blue-400 rounded-md px-4 py-6 text-3xl text-transparent " autoFocus /> */}
            <div className="header pt-10 text-center text-5xl">
                <span className="font-bold text-blue-500 underline">Typing Master</span>
            </div>
            <div>{word}</div>
            <div className="flex gap-14 mt-10">
                <div className="word-box">
                    <div className="word-box-check text-green-400 flex justify-center mb-1 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className="word-box-input text-gray-400 border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute"
                        onChange={() => inputCheck}
                        // onChange={updateType}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[1]}</div>
                    <div className="word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg"></div>
                </div>
                <div className="word-box">
                    <div className="word-box-check text-green-400 flex justify-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="word-box-input text-gray-400 border-2 w-32 h-32 rounded-md flex justify-center items-center correct">
                        <span className="text-7xl">{word[2]}</span>
                    </div>
                    <div className="word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg"></div>
                </div>
                <div className="word-box">
                    <div className="word-box-check text-green-400 flex justify-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="word-box-input text-gray-400 border-2 w-32 h-32 rounded-md flex justify-center items-center incorrect">
                        <span className="text-7xl">{word[3]}</span>
                    </div>
                    <div className="word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default TypingPracticePage
