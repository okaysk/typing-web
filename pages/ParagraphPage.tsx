import React, { useRef, useState } from 'react'

let sentences: any
function ParagraphPage() {
    const [words, setWords] = useState([''])
    const [userInput, setUserInput] = useState('')
    const [answerIndex, setAnswerIndex] = useState(0)
    const [correct, setCorrect] = useState([''])
    const inputRef = useRef<any>()

    console.log(`-------------------3 RE-RENDERING------------------`)

    const answer = [
        words.map((word, index) => (
            <span className={`${correct[index]} text-3xl leading-loose`} key={index}>
                {word}
            </span>
        )),
    ]

    async function getParagraph() {
        console.log(`getParagraph()`)

        reset()

        // (Re)set - answerIndex, correct, userInput

        await fetch('http://metaphorpsum.com/paragraphs/1/1')
            .then(response => response.blob())
            .then(data => data.text())
            .then(text => {
                sentences = text
                const word_raw = text.split('')

                console.log(`text : ${text}`)
                console.log(`word_raw : ${word_raw}`)
                // setWords({ ...word_raw })
                setWords(word_raw)
                console.log(`wordState: ${words}`) // batch Update때문에 값이 없는 것처럼 보임.
            })
            .catch(error => {
                console.log(`errorRRRR: ${error}`)
            })
    }

    const keyboardFocus = () => {
        inputRef.current?.focus()
    }

    keyboardFocus()

    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`-------------------2 OnCange()------------------`)

        // Input
        const inputValue = e.target.value
        const lastChar = inputValue.charAt(inputValue.length - 1)
        console.log(`input: ${inputValue}`)
        console.log(`last: ${lastChar}`)
        console.log(`userInput State : ${userInput}`)

        if (e.target.accessKey == 'Backspace') {
            console.log('backspace!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }

        console.log(`\t111  userinput length : ${userInput.length} && answerIndex : ${answerIndex}`)

        setUserInput(inputValue)

        // ReStart when the last word entered.
        if (answerIndex == sentences?.length - 1) {
            // reset & getNewParagraph
            return getParagraph()
        }

        // Input Check
        // 1. 맞으면
        if (lastChar == words[answerIndex]) {
            setCorrect({ ...correct, [answerIndex]: 'correct' })
            setAnswerIndex(answerIndex + 1)
        }
        // 2. 틀리면
        else {
            // 2-1 틀리면
            if (inputValue.length >= answerIndex) {
                setCorrect({ ...correct, [answerIndex]: 'incorrect' })
                setAnswerIndex(answerIndex + 1)
            }
            // 2-2 backspace라면
            else {
                setAnswerIndex(answerIndex - 1)
                setCorrect({ ...correct, [answerIndex - 1]: '' })
            }
        }
    }

    const reset = () => {
        setCorrect([''])
        setAnswerIndex(0)
        setUserInput('')
    }

    // const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(`-------------------1 KEYDOWN()------------------`)
    // console.log(`keydown : ${e.key}`)
    // if (e.key === 'Backspace') {
    //     console.log(`\t\tkeydown: ${answerIndex}`)
    //     // setAnswerIndex(answerIndex - 1)
    //     // setCorrect({ ...correct, [answerIndex]: '' })
    // }
    // }

    return (
        <div className="page" onClick={keyboardFocus}>
            <div>
                <div className="text-4xl text-blue-300">Quotes Master v1.4</div>
                <div>
                    Index : {answerIndex} & senteces.length : {sentences?.length}
                </div>
                <div>Input length : {userInput.length}</div>
            </div>
            <div className="w-2/3 relative">
                {answer}
                <input
                    className="paragraph-input text-3xl w-full text-left align-text-top border-blue-800 text-blue-400 leading-loose focus:outline-none"
                    type="text"
                    value={userInput}
                    onChange={e => inputCheck(e)}
                    // onKeyDown={e => keyDown(e)}
                    ref={el => (inputRef.current = el)}
                ></input>

                {/* <textarea
                    // value={userInput}
                    className="paragraph-input text-4xl w-full h-full text-left align-text-top border-2 border-blue-200 absolute leading-loose opacity-80"
                    onChange={e => setUserInput(e.target.value)}
                ></textarea> */}

                {/* <div className="paragraph-sample text-4xl text-gray-400 leading-loose">{paragraph}</div> */}
            </div>
            <img src="https://i.gifer.com/1uUh.gif" className="rounded-xl h-40 w-40" />
            <button className="border-2 bg-gray-200 text-blue-400 py-3 px-6 rounded-lg mt-4" onClick={getParagraph}>
                Get Paragraph!
            </button>
        </div>
    )
}

export default ParagraphPage
