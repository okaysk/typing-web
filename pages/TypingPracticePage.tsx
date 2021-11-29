import React, { useEffect, useState, useRef } from 'react'

const alphabet = 'abcdefghijklmnopqrstuvwxyz '
const kor_word = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ '
let text = ['']

function TypingPracticePage() {
    const [input, setInput] = useState([''])
    const [word, setWord] = useState([''])
    const [index, setIndex] = useState(1)
    const [correct, setCorrect] = useState([false, ''])
    const [language, setLanguage] = useState('eng')

    const [reset, setReset] = useState(true)

    const inputRef = useRef<any>([])

    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const lastChar = inputValue.substr(inputValue.length - 1)
        if (inputValue == word[index]) {
            // index가 5일때 정답을 맞추면, Reset
            if (index == 5) {
                return setReset(true)
            }
            // index가 6일 땐 포커스 맞출 인풋블록이 없으므로 조건문 처리.
            inputRef.current[index].focus()

            // input값 저장 & correct 상태 변경 & 다음 인풋
            setInput({ ...input, [index]: lastChar })
            setCorrect({ ...correct, [index]: 'correct' })
            setIndex(index + 1)
        } else {
            setInput({ ...input, [index]: lastChar })
            setCorrect({ ...correct, [index]: 'incorrect' })
            setTimeout(() => {
                setInput({ ...input, [index]: '' })
                setCorrect({ ...correct, [index]: '' })
            }, 900)

            // setInput([inputValue])
            // 해당 element className에 incorrect 추가? 잠깐 보였다 사라지기 어케 하지.
        }
    }

    useEffect(() => {
        console.log(`mounting..`)
        if (reset) {
            console.log(`\tReset the words....`)
            text = ['']
            setCorrect([false, false])
            setInput([''])
            setWord([''])
            setIndex(1)
            const words = language == 'kor' ? kor_word : alphabet

            for (let i = 0; i < 5; ++i) {
                text.push(words.charAt(Math.floor(Math.random() * words.length)))
                setWord(text)
                // word.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
            }
            setReset(false)
        }
        console.log(`\tNo Reset`)
        inputRef.current[0].focus()
    }, [reset])

    useEffect(() => {
        text = ['']
        setCorrect([false, false])
        setInput([''])
        setWord([''])
        setIndex(1)

        console.log(`language: ${language}`)
        const words = language == 'kor' ? kor_word : alphabet
        console.log(`words: ${words}`)

        for (let i = 0; i < 5; ++i) {
            text.push(words.charAt(Math.floor(Math.random() * words.length)))
            setWord(text)
        }

        console.log(`text: ${text}`)
    }, [language])

    const keyboardFocus = () => {
        if (index != 6) inputRef.current[index - 1].focus()
    }

    // Test input
    useEffect(() => {
        console.log(`THIS IS THE INPUT USE EFFECT --- 0: ${input[0]} 1: ${input[1]} 2: ${input[2]}`)
    }, [input])

    return (
        <div className="page" onClick={keyboardFocus}>
            {/* <input type="text" value={input} onChange={handleInput} className="word__input focus:outline-none border-2 border-blue-400 rounded-md px-4 py-6 text-3xl text-transparent " autoFocus /> */}
            <div className="header pt-10 text-center text-5xl">
                <span className="font-bold text-blue-500 underline">Typing Master</span>
                <div>index : {index}</div>
            </div>
            <div>{word}</div>
            <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex mt-10">
                <button
                    data-tooltip-tagrget="tooltip-default"
                    // className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white focus:bg-blue-300 rounded-l-full px-4 py-2 active "
                    className={`${
                        language == 'kor' && 'text-white bg-blue-300'
                    } " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-l-full px-4 py-2 active"`}
                    id="grid"
                    onClick={() => setLanguage('kor')}
                >
                    <span>🇰🇷 Korean</span>
                </button>
                <button
                    // className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white focus:bg-blue-300 rounded-r-full px-4 py-2"
                    className={`${
                        language == 'eng' && 'text-white bg-blue-300'
                    } " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-r-full px-4 py-2 active"`}
                    id="list"
                    onClick={() => setLanguage('eng')}
                >
                    <span>🇺🇸 English</span>
                </button>
            </div>

            <button className="text-red-300 py-2 px-4">Sound Check</button>

            <div className="flex gap-14 mt-10">
                {/* First */}
                <div className="word-box">
                    <div className={`${index > 1 ? 'visible' : 'invisible'} word-box-check text-green-400 flex justify-center mb-1 relative `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className={`${correct[1]} word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent`}
                        value={input[1] || ''}
                        onChange={inputCheck}
                        ref={el => (inputRef.current[0] = el)}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[1]}</div>
                    <div className={`${index == 1 ? 'visible' : 'invisible'} ${correct[1] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div>
                    {/* <div className={`${correct[1] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div> */}
                </div>

                {/* Second */}
                <div className="word-box">
                    <div className={`${index > 2 ? 'visible' : 'invisible'} word-box-check text-green-400 flex justify-center mb-1 relative `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className={`${correct[2]} word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent`}
                        value={input[2] || ''}
                        onChange={inputCheck}
                        ref={el => (inputRef.current[1] = el)}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[2]}</div>
                    <div className={`${index == 2 ? 'visible' : 'invisible'} ${correct[2] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div>
                </div>

                {/* Third */}
                <div className="word-box">
                    <div className={`${index > 3 ? 'visible' : 'invisible'} word-box-check text-green-400 flex justify-center mb-1 relative `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className={`${correct[3]} word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent`}
                        value={input[3] || ''}
                        onChange={inputCheck}
                        ref={el => (inputRef.current[2] = el)}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[3]}</div>
                    <div className={`${index == 3 ? 'visible' : 'invisible'} ${correct[3] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div>
                </div>

                {/* Fourth */}
                <div className="word-box">
                    <div className={`${index > 4 ? 'visible' : 'invisible'} word-box-check text-green-400 flex justify-center mb-1 relative `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className={`${correct[4]} word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent`}
                        value={input[4] || ''}
                        onChange={inputCheck}
                        ref={el => (inputRef.current[3] = el)}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[4]}</div>
                    <div className={`${index == 4 ? 'visible' : 'invisible'} ${correct[4] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div>
                </div>

                {/* Fifth */}
                <div className="word-box">
                    <div className={`${index > 5 ? 'visible' : 'invisible'} word-box-check text-green-400 flex justify-center mb-1 relative `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <input
                        className={`${correct[5]} word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent`}
                        value={input[5] || ''}
                        onChange={inputCheck}
                        ref={el => (inputRef.current[4] = el)}
                    ></input>
                    <div className="word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400">{word[5]}</div>
                    <div className={`${index == 5 ? 'visible' : 'invisible'} ${correct[5] == 'incorrect' ? 'bg-[#ff7f97]' : ''} word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg`}></div>
                </div>
            </div>
        </div>
    )
}

export default TypingPracticePage
