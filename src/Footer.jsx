import Image from './assets/pexels-mart-production-75778477.jpg'
import Logo1 from './assets/Bipsync_Logo-01.png'
import Logo2 from './/assets/logo-linkedin.svg'
import Logo3 from './/assets/logo-x.svg'
import Image2 from './assets/SPIk6DC01.svg'
import { ArrowRightIcon } from 'lucide-react'

const Footer = () => {
    return(
        <div id='About' className="pt-20 bg-black text-white px-6">
            <div className='lg:flex lg:justify-evenly lg:gap-8'>
            <div className="font-semibold pb-30 text-container lg:w-150">
            <h1 className="text-3xl md:text-4xl">Where industry compliance <span className="text-green-400">comes as standard</span></h1>
            <p className="mt-6 md:text-[1.1rem]">Bipsync’s data storage solution was designed to keep our clients’ data safe through adherence to security best practices and standards, like SOC 2 and ISO 27001. Data is encrypted at rest and segregated from other clients’ data via dedicated instances that ensure no information can be shared. Data remains within the private network and never reaches the public internet, and is encrypted end-to-end. Data is not commingled with other clients’ data.</p>
            </div>
            <div>
                <img src={Image2} className='xss:hidden lg:flex h-120' alt="" />
            </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center font-semibold bg-cover bg-center bg-no-repeat -mx-6 pb-80">
                <p className="font-bold lg:text-[1.2rem]">Collective intelligence at scale</p>
                <p className="text-4xl md:text-5xl lg:text-6xl">See Bipsync <br className='md:hidden' /> <span className="text-green-400">in action</span></p>
                <button className='mt-4 lg:mt-6 p-3 pl-6 pr-6 bg-green-400/70 whitespace-nowrap rounded lg:text-[1.1rem] fancy-btn transition-colors inline-flex'>Request a demo <ArrowRightIcon className='mt-[0.2rem] pl-2 text-green-700'/></button>
                <div className='bg-black mt-30 w-[90vw] rounded-2xl pt-8 -mb-80'>
                    <div className='flex px-4 justify-between'>
                    <div>
                        <img src={Logo1} className='h-10 lg:h-12' alt="" />
                    </div>
                    <div className='flex gap-4'>
                        <img src={Logo3} className='h-8 cursor-pointer' alt="" />
                        <img src={Logo2} className='h-8 cursor-pointer' alt="" />
                    </div>
                    </div>
                    <div className='text-start px-4 flex flex-col gap-4 tracking-tighter
                     text-[0.9rem] lg:text-[1rem] font-bold'>
                       <p className='pt-4'>25 broadway <br />Floor 10 <br />New York, NY 10004</p>
                       <p className='text-green-400'>Contact Us <br /> Request A Demo <br /> (646) 661-5710</p>
                       <div className='pb-10 text-gray-400/70 space-y-2 font-bold'>
                            <p>© 2026 Bipsync. All rights reserved.</p>
                            <p>Copyright & IP<span className='word-space'> Policy Legal Privacy</span></p>
                            <p>Cookie Policy</p>
                       </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Footer