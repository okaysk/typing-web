import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import WordGamePage from './WordGamePage'
import Link from 'next/link'
import Script from 'next/script'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Typing Practice</title>
                <meta name="description" content="You can type anything." />
                <link rel="icon" href="/favicon.ico" />
                {/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" strategy="beforeInteractive" />

            <main className="flex justify-center items-center h-screen">
                <div>
                    <div className="header pt-10 text-center text-5xl">
                        <span>Welcome to </span>
                        <span className="font-bold text-blue-500">Typing!</span>
                    </div>
                    <div className="menu-items m-20 flex gap-10">
                        <Link href="/WordGamePage">
                            <button className="menu-item__column border-2 border-blue-400 p-10 hover:bg-blue-400 hover:text-white rounded-md">
                                <span>Word Game</span>
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="menu-item__column border-2 border-blue-400 p-10 hover:bg-blue-400 hover:text-white rounded-md">
                                <span>Pick a picture</span>
                            </button>
                        </Link>
                        <Link href="/ParagraphPage">
                            <button className="menu-item__column border-2 border-blue-400 p-10 hover:bg-blue-400 hover:text-white rounded-md">
                                <span>Paragraph Typing</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
