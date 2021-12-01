import { useRef, useState } from 'react'

let someWords: any
function ParagraphPage() {
    const [paragraph, setParagraph] = useState('')
    const [words, setWords] = useState([''])

    // const request = new Request('http://metaphorpsum.com/paragraphs/1/4')

    async function getParagraph() {
        console.log(`getParagraph() called`)
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }

        await fetch('http://metaphorpsum.com/paragraphs/1/1', config)
            .then(response => response.blob())
            .then(data => data.text())
            .then(text => {
                setParagraph(text)
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

    console.log(`Rendering~~~~~~~`)

    console.log(`Rendering- wordState: ${words[0]} ${words[1]} ${words[2]}`)

    const arr = ['1', '2']
    const res = [arr]
    console.log(`\t\t typeof [arr]  : ${typeof res}`)
    console.log(`\t\t typeof [...arr]  : ${typeof [...arr]}`)
    console.log(`\t\t typeof {...arr]  : ${typeof { ...arr }}`)

    const sample = [
        words.map((word, index) => (
            <span className="text-3xl leading-loose" key={index}>
                {word}
            </span>
        )),
    ]

    const [userInput, setUserInput] = useState('')
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState([false, ''])
    const inputRef = useRef<any>([])

    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Input
        const inputValue = e.target.value
    }

    return (
        <div className="page">
            <div>
                <div>Test</div>
            </div>
            <div className="w-2/3 relative">
                {sample}
                <input
                    className="paragraph-input text-3xl w-full text-left align-text-top border-blue-800 text-blue-400 leading-loose focus:outline-none"
                    type="text"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                ></input>
                {/* <textarea
                    // value={userInput}
                    className="paragraph-input text-4xl w-full h-full text-left align-text-top border-2 border-blue-200 absolute leading-loose opacity-80"
                    onChange={e => setUserInput(e.target.value)}
                ></textarea> */}

                {/* <div className="paragraph-sample text-4xl text-gray-400 leading-loose">{paragraph}</div> */}
            </div>
            <img src="https://i.gifer.com/1uUh.gif" className="rounded-xl h-40 w-40" />
            <button onClick={getParagraph}>Get Paragraph!</button>
        </div>
    )
}

export default ParagraphPage
