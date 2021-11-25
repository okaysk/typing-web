import { useEffect, useState } from 'react'

let count: any
let words: string[] = []
let maxScore = 0

let koreanWords = [
    '맥북',
    '초코칩',
    '안경닦이',
    '스타트업',
    '다짐',
    '종이컵',
    '말차쿠키',
    '마늘바게트',
    '팔만대장경',
    '대들보',
    '메타버스',
    '와신상담',
    '결초보은',
    '오비이락',
    '이심전심',
    '종합부동산세',
    '주택청약',
    '손흥민',
    '김연아',
    '크리스마스',
    '엘레베이터',
    '백화점',
    '책상',
    '대장내시경',
    '이비인후과',
    '법무부장관',
    '기획재정부',
    '서울특별시',
    '타요버스',
    '따릉이',
    '자몽에이드',
    '사과쥬스',
    '보드마카',
    '동대문역사문화공원',
    '성수 수제화거리',
    '아이스아메리카노',
    '블루투스 스피커',
    '휴양지',
    '제너시스',
    '페라리',
    '박하사탕',
]

function WordGamePage() {
    const GAME_TIME = 3
    const [word, setWord] = useState('HaLo')
    const [form, setForm] = useState('')
    const [score, setScore] = useState(-1)
    const [time, setTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [language, setLanguage] = useState('Korean')

    console.log(`(re) RENDERING isplaying: ${isPlaying}`)

    function shuffleArray(inputArray: any) {
        inputArray.sort(() => Math.random() - 0.5)
    }

    async function getWords() {
        console.log('getWords() called')
        words = []
        if (language === 'Korean') {
            words.push(...koreanWords)
            shuffleArray(words)
        } else {
            await fetch('https://random-word-api.herokuapp.com/word?number=100')
                .then(response => response.json())
                .then(data => {
                    data.forEach((word: string) => {
                        // console.log(word)
                        if (word.length < 10) {
                            words.push(word)
                        }
                    })
                })
        }
    }

    // Game Start
    const gameStart = () =>
        getWords().then(() => {
            console.log('game start()')
            console.log('\tgggggggggggg')
            setScore(0)
            setIsPlaying(true)
            setTime(GAME_TIME)

            console.log(`\tisPlaying: ${isPlaying}`)
            console.log(`\ttime: ${time}`)
            // console.log(`gamestart word : ${words}`)
            setWord(words[0])
        })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        if (isPlaying && input === word) {
            setForm('')
            setTime(prevTime => prevTime + 1)
            setScore(score + 1)
            console.log('Correct Answer')
            // const randomIndex = Math.random() * words.length

            // setWord(words[score])
        } else {
            setForm(input)
        }
    }

    const onCheckEnter = (e: any) => {
        if (e.key === 'Enter') {
            setForm('')
        }
    }

    useEffect(() => {
        console.log(`countDown() - time Effect`)
        console.log(`\ttime: ${time}`)
        console.log(`\tisPlaying: ${isPlaying}`)

        if (!count && isPlaying) {
            console.log(`\t setInterval()()()`)
            count = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000)
        }
        if (time < 1) {
            clearInterval(count)
            setIsPlaying(false)
            count = 0
        }
    }, [time])

    // 제시어 바꿔주기.
    useEffect(() => {
        console.log('Score 변하니까 제시어 변경해주기')
        console.log(`\twords : ${words}`)
        console.log(`\twords[0]: ${words[0]}`)
        setWord(words[score])

        if (maxScore < score) maxScore = score
    }, [score])

    return (
        <div className="page">
            <div className="header pt-10 text-center text-5xl">
                <span className="font-bold text-blue-500">Typing Master</span>
            </div>

            <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex mt-10">
                <button
                    data-tooltip-tagrget="tooltip-default"
                    // className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white focus:bg-blue-300 rounded-l-full px-4 py-2 active "
                    className={`${
                        language == 'Korean' && 'text-white bg-blue-300'
                    } " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-l-full px-4 py-2 active"`}
                    id="grid"
                    onClick={() => setLanguage('Korean')}
                >
                    <span>🇰🇷 Korean</span>
                </button>
                <button
                    // className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-white focus:bg-blue-300 rounded-r-full px-4 py-2"
                    className={`${
                        language == 'English' && 'text-white bg-blue-300'
                    } " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-r-full px-4 py-2 active"`}
                    id="list"
                    onClick={() => setLanguage('English')}
                >
                    <span>🇺🇸 English</span>
                </button>
            </div>

            <div className="content mt-10">
                <div className="m-10 text-center text-2xl border-b-2 border-blue-400 pb-2">{word || 'Ready!'}</div>
                <div className="word-input-box mt-10">
                    <div>
                        <div className="text-gray-600">정답</div>
                        <input
                            className="word__input focus:outline-none border-2 border-blue-400 rounded-md px-4 py-6 text-3xl"
                            type="text"
                            value={form}
                            name="name"
                            required
                            autoComplete="off"
                            onChange={onChange}
                            onKeyPress={onCheckEnter}
                        ></input>
                    </div>
                </div>
                <div className="word__stat flex flex-col justify-center items-center mt-10">
                    <div className="word__time">
                        남은시간 : <span className="time text-blue-500 text-2xl">{time}</span> 초
                    </div>
                    <div className="word__time">
                        획득점수 : <span className="score text-blue-500 text-2xl">{score < 0 ? 0 : score}</span> 점
                    </div>
                    <div className="word__time">
                        최고점수 : <span className="score text-blue-500 text-2xl">{maxScore}</span> 점
                    </div>
                    <button className={`${isPlaying && ' bg-gray-400 cursor-not-allowed '} " mt-8 bg-black text-white px-10 py-4 rounded-md border-2"`} onClick={gameStart} disabled={isPlaying}>
                        게임 시작
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WordGamePage
