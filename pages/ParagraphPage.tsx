import { useRef, useState } from 'react'

let someWords: any
function ParagraphPage() {
    const [words, setWords] = useState([''])
    const [userInput, setUserInput] = useState('')
    const [answerIndex, setAnswerIndex] = useState(0)
    const [correct, setCorrect] = useState([false, ''])
    const inputRef = useRef<any>()

    const answer = [
        words.map((word, index) => (
            <span className={`${correct[index]} text-3xl leading-loose`} key={index}>
                {word}
            </span>
        )),
    ]

    async function getParagraph() {
        console.log(`getParagraph()`)

        // (Re)set - answerIndex, correct, userInput

        await fetch('http://metaphorpsum.com/paragraphs/1/1')
            .then(response => response.blob())
            .then(data => data.text())
            .then(text => {
                const word_raw = text.split('')
                console.log(`text : ${text}`)
                console.log(`word_raw : ${word_raw}`)
                // setWords({ ...word_raw })
                setWords(word_raw)
                console.log(`wordState: ${words}`) // batch Update때문에 값이 없는 것처럼 보임.
                someWords = text.split(' ')
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
        // Input
        const inputValue = e.target.value
        const lastChar = inputValue.charAt(inputValue.length - 1)
        console.log(`input: ${inputValue}`)
        console.log(`last: ${lastChar}`)
        console.log(`userInput State : ${userInput}`)

        setUserInput(inputValue)

        if (lastChar == words[answerIndex]) {
            console.log(`input is : ${inputValue}`)
            setCorrect({ ...correct, [answerIndex]: 'correct' })
            setAnswerIndex(answerIndex + 1)
        } else {
            // setUserInput(inputValue)
            setCorrect({ ...correct, [answerIndex]: 'incorrect' })
            setTimeout(() => {
                // setUserInput('')
                setCorrect({ ...correct, [answerIndex]: '' })
            }, 900)
        }
    }

    const keyDown = (e: any) => {
        if (e.keyCode === 8) {
            setAnswerIndex(answerIndex - 1)
        }
    }

    return (
        <div className="page">
            <div>
                <div>Test</div>
            </div>
            <div className="w-2/3 relative">
                {answer}
                <input
                    className="paragraph-input text-3xl w-full text-left align-text-top border-blue-800 text-blue-400 leading-loose focus:outline-none"
                    type="text"
                    value={userInput}
                    onChange={e => inputCheck(e)}
                    onKeyDown={e => keyDown(e)}
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
            <button className="border-2 bg-gray-200 py-3 px-6 rounded-lg mt-4" onClick={getParagraph}>
                Get Paragraph!
            </button>
        </div>
    )
}

export default ParagraphPage
