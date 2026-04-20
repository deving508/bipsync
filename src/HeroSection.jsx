import { useEffect, useState } from 'react'
import Image from './assets/360_F_624996636_sOUwJwdMKGh31AckbFlVznNM0NyEkGQF.jpg'
import Image2 from './assets/Bipsync_Logo-01.png'
import {ArrowDown, ArrowDown01, ArrowRight, X} from 'lucide-react'
import {Menu} from 'lucide-react'

const HeroSection = () => {

    const [click, setClick] = useState(false)

    function Clicked () {
        setClick(!click)
    }

    useEffect(() => {
        if (click) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [click])

    return(
        <>
        <div id='Home' style={{backgroundImage: `url(${Image})`}} className='bg-cover bg-center bg-no-repeat flex items-center flex-col'>
        <div className='flex fixed w-[90vw] top-0 z-50 justify-between px-3 h-15 md:h-17 items-center bg-black/85 m-2 rounded-lg lg:font-bold'>
                <img src={Image2} className='w-30 h-10 lg:h-13 lg:w-38' alt="" />
                <button className='lg:hidden' onClick={Clicked}>{click ? <X className=''/> : <Menu/>}</button>  
                <a href="#Home" className='xss:hidden lg:flex hover:text-gray-300 transition-colors'>Home <ArrowDown className='mt-[0.3em] h-4'/></a>
                <a href="#Info" className='xss:hidden lg:flex hover:text-gray-300 transition-colors'>Info <ArrowDown className='mt-[0.3em] h-4'/></a>
                <a href="#News" className='xss:hidden lg:flex hover:text-gray-300 transition-colors'>News & Insights <ArrowDown className='mt-[0.3em] h-4'/></a>
                <a href="#About" className='xss:hidden lg:flex hover:text-gray-300 transition-colors'>About Us <ArrowDown className='mt-[0.3em] h-4'/></a>
                <button className='xss:hidden lg:flex bg-green-400 p-3 pl-5 pr-5 rounded-lg text-black font-medium other-btn hover:bg-green-300 transition-all'>Book a demo</button>
        </div>
        {click && (
            <div className='lg:hidden fixed h-screen w-full bg-black z-30 flex justify-center items-start flex-col text-start'>
                <div className='flex flex-col items-start text-start justify-start gap-4 text-2xl font-semibold pl-6 mt-20'>
                <a href="" className='xss:flex justify-between w-[85vw] lg:hidden border-b border-b-gray-100/15 hover:border-gray-600 hover:text-gray-300 transition-colors pb-4'>Platforms <ArrowDown className='mt-[0.4rem]'/></a>
                <a href="" className='xss:flex justify-between w-[85vw] lg:hidden border-b border-b-gray-100/15 hover:border-gray-600 hover:text-gray-300 transition-colors pb-4'>Solutions <ArrowDown className='mt-[0.4rem]'/></a>
                <a href="" className='xss:flex justify-between w-[85vw] lg:hidden border-b border-b-gray-100/15 hover:border-gray-600 hover:text-gray-300 transition-colors pb-4'>News & Insights <ArrowDown className='mt-[0.4rem]'/></a>
                <a href="" className='xss:flex justify-between w-[85vw] lg:hidden border-b border-b-gray-100/15 hover:border-gray-600 hover:text-gray-300 transition-colors pb-4'>About Us <ArrowDown className='mt-[0.4rem]'/></a>
                </div>
                <div className='flex justify-center items-center w-full mt-16'>
                <button className='xss:flex lg:hidden bg-black p-3 pl-6 pr-6 rounded-lg text-white font-semibold border-2 border-green-700 other-btn hover:bg-green-300 transition-all hover:text-gray-900'>Book a demo <ArrowRight className='pl-2 pt-[0.2rem]'/> </button>
                </div>
                <p className='w-full flex justify-center items-center text-center text-green-400 mt-20 font-bold'>(646) 661 5710</p>
            </div>
            )
            }
        <div className='w-full h-screen flex items-center justify-center px-2'>
            <div className='text-center mb-10'>
                <button className='border border-gray-400 font-bold p-2 pl-4 pr-4 rounded-full mb-6 bg-green-400/10 text-[0.8rem] ai-btn hover:bg-green-400/20 hover:border-green-400/40 transition-all'>Now live- <span className='text-green-400'>Bipsync: AI</span></button>
                <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl'>Your investment workspace.</h1>
                <p className='m-4 font-semibold lg:text-[1.1rem]'>The power of many over the knowledge of one. Bipsync's AI-powered platform <br className='hidden lg:flex'/> ensures institutional investors capture, structure, and leverage collective intelligence <br className='hidden lg:flex'/> at scale.</p>
                <div className='flex gap-4 items-center justify-center mt-6'>
                <button className='bg-green-400 text-black font-bold p-3 rounded-md border other-btn hover:bg-green-300 hover:text-gray-900 transition-all'>Book a demo</button>
                <button className='border border-green-400 font-bold p-3 rounded-md bg-black/10 other-btn hover:bg-green-400/50 transition-all'>Find out more</button>
                </div>
            </div>        
        </div>
        </div>
        </>
    )
}

export default HeroSection