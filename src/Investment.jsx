import img1 from './assets/colorado-pera-logo-768x197.png'
import img2 from './assets/eastern-shore-capital-management-768x217.png'
import img3 from './assets/pilot-house.svg'
import img4 from './assets/triodos.svg'
import img5 from './assets/WashU-Reverse_web-400x97.png'
import Image6 from './assets/for-asset-managers.jpg'
import Image7 from './assets/for-asset-owners.jpg'
import Image8 from './assets/for-consultants.jpg'
import icon1 from './assets/capture-centralize.svg'
import icon2 from './assets/structure-collaborate.svg'
import icon3 from './assets/analyze-decide.svg'
import Video1 from './assets/homepage-main-product-viz-mobile-compressed2.mp4'
import Arrow from './assets/arrow-narrow-circle-broken-down-svgrepo-com.svg'
import Paper from './assets/paper.svg'
import Time from './assets/time.svg'
import Woman from './assets/testimonial-1.jpg'
import Man from './assets/triodos.png'

const Investment = () => {
    return(
        <div id='Info' className="bg-black pt-15 text-white flex flex-col text-center items-ceter justify-center px-6 overflow-hidden">
            <h1 className='font-semibold tracking-[-0.02em] md:text-[1.1rem]'>Trusted by the investment management industry</h1>
            <div className='flex gap-10 mt-10 animate-scroll whitespace-nowrap'>
                {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map((img, i) => (
                <img key={i} src={img} className="h-8" />
                ))}
                {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map((img, i) => (
                <img key={i} src={img} className="h-8" />
                ))}
            </div>
            <div className='text-container pt-15 text-white text-[1.1rem] font-semibold tracking-[-0.01em] md:text-2xl'>
            <p className='p px-8'>
                Your investment research is scattered across spreadsheets, documents, emails, and <br className='hidden lg:flex'/> fragmented systems.
            </p>
            <p className='p pt-7 px-4'>
                You’re dealing with operational inefficiencies, data silos, compliance headaches, and <br className='hidden lg:flex'/> unprotected institutional knowledge.
            </p>
            <p className='p pt-7 text-green-400'>
                This is where Bipsync comes in.
            </p>
            </div>
            <div className='lg:flex lg:justify-between lg:gap-14'>
            <div className='pt-10 lg:pt-25 flex flex-col gap-4 items-start text-start lg:w-120'>
                <div className='flex flex-col gap-4 border border-green-400 bg-gray-950 p-6 rounded-lg set-width'>
                    <div className='flex justify-between'>
                    <p className='p inline-flex font-semibold text-[1.3rem] md:text-[1.6rem]'>Capture & Centralize</p>
                    <img src={icon1} className='h-6' alt="" />
                    </div>
                    <p className='p font-semibold'>Automatically ingest research from emails, documents, and third-party providers.</p>
                </div>
                <div className='flex flex-col gap-4 border border-green-400 bg-gray-950 p-6 rounded-lg set-width'>
                    <div className='flex justify-between'>
                    <p className='p inline-flex font-semibold text-[1.3rem] md:text-[1.6rem]'>Structure & Collaborate</p>
                    <img src={icon2} className='h-6' alt="" />
                    </div>
                    <p className='p font-semibold'>Organize data intuitively across teams, with optional AI-assisted tagging.</p>
                </div>
                <div className='flex flex-col gap-4 border border-green-400 bg-gray-950 p-6 rounded-lg set-width'>
                    <div className='flex justify-between'>
                    <p className='p inline-flex font-semibold text-[1.3rem] md:text-[1.6rem]'>Analyze & Decide</p>
                    <img src={icon3} className='h-6' alt="" />
                    </div>
                    <p className='p font-semibold'>Leverage your team's collective intelligence at scale to surface insights and track workflows.</p>
                </div>
            </div>
            <div className='-mx-6 pt-10 pb-10'>
                <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/fallback.jpg"    
                className="rounded-lg object-cover lg:w-150"
                >
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            </div>
            <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl lg:mt-14'>Tailored for <span className='text-green-400'>your business</span></h1>
            <div className='flex overflow-x-auto lg:justify-center items-center gap-2 no-scrollbar pb-20'>
            <div className='pt-4'>
                <div className='xss:w-60 xs:w-70 lg:w-90 pt-3 mt-5 flex flex-col text-start gap-4 border-t border-l border-r-0 border-gray-500 border-l-gray-900 rounded-2xl px-3 cards transition-all'>
                    <img className='xss:w-50 xs:w-70 lg:w-90 rounded-lg' src={Image6} alt="" />
                    <div className='xss:w-50 xs:w-65 lg:w-80 flex flex-row justify-between'>
                    <p className='text-2xl font-semibold text-purple-300 tracking-[-0.05em]'>For Asset <br /> Managers</p>
                    <img src={Arrow} className='w-8 invert-75' alt="" />
                    </div>
                    <p className='font-bold tracking-[-0.02em]'>Focus on alpha, not admin, with automated research workflows.</p>
                </div>
            </div>
            <div className='pt-4'>
                <div className='xss:w-60 xs:w-70 lg:w-90 pt-3 mt-5 flex flex-col text-start gap-4 border-t border-l border-r-0 border-gray-500 border-l-gray-900 rounded-2xl px-3 cards transition-all'>
                    <img className='xss:w-50 xs:w-70 lg:w-90 rounded-lg' src={Image7} alt="" />
                    <div className='xss:w-50 xs:w-65 lg:w-80 flex flex-row justify-between'>
                    <p className='text-2xl font-semibold text-blue-300 tracking-[-0.05em]'>For Asset <br /> Owners</p>
                    <img src={Arrow} className='w-8 invert-75' alt="" />
                    </div>
                    <p className='font-bold tracking-[-0.02em]'>All of your manager research, just a few clicks <span className='opacity-0'>away.bawllllgithtttttt</span></p>
                </div>
            </div>
            <div className='pt-4'>
                <div className='xss:w-60 xs:w-70 lg:w-90 pt-3 mt-5 flex flex-col text-start gap-4 border-t border-l border-r-0 border-gray-500 border-l-gray-900 rounded-2xl px-3 cards transition-all'>
                    <img className='xss:w-50 xs:w-70 lg:w-90 rounded-lg' src={Image8} alt="" />
                    <div className='xss:w-50 xs:w-65 lg:w-80 flex flex-row justify-between'>
                    <p className='text-2xl font-semibold text-blue-200 tracking-[-0.05em]'>For Consultants <br /> & Advisors</p>
                    <img src={Arrow} className='w-8 invert-75' alt="" />
                    </div>
                    <p className='font-bold tracking-[-0.02em]'>Unify research, scale advice, and bring clarity to every mandate.</p>
                </div>
            </div>
            </div>
            <div id='News' className='pt-20 pb-20 bg-white -mx-6 text-black text-start px-6'>
                <div className='flex flex-col gap-2 font-semibold'>
                <p className='md:font-bold'>Case Studies</p>
                <h1 className='text-3xl md:text-4xl'>Research in. <br className='md:hidden' />Results out.</h1>
                </div>
                <div className='md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-x-2'>
                <div className='pt-6 h-45 md:h-80 bg-blue-200 rounded-2xl px-6 mt-6'>
                    <h1 className='text-2xl md:text-3xl font-semibold flex gap-4'><img src={Paper} className='h-8 inline-flex' alt="" />40TB+</h1>
                    <p className='font-bold text-gray-900 pt-4'>of institutional knowledge stored. Secure, siloed, and instantly accessible by the right teams.</p>
                </div>
                <div className='pt-6 md:h-80 md:mt-6 grid grid-cols-8 grid-rows-8 h-40 bg-purple-300 rounded-2xl px-6 mt-2'>
                    <h1 className='text-2xl md:text-3xl font-semibold flex gap-4'><img src={Time} className='h-8 inline-flex' alt="" />2,200+</h1>
                    <p className='font-bold text-gray-900 pt-2 row-start-3 whitespace-nowrap md:row-start-2'>hours saved</p>
                    <p className='h-8 w-8 lg:h-10 lg:w-10 col-start-9 row-start-6 bg-green-400 rounded-lg invert-10 font-bold p-1 pl-3 lg:p-2 lg:pl-4 lg:font-extrabold small-btn hover:bg-green-500 transition-all hover:text-gray-900'> {">"} </p>
                </div>
                <div className='pt-6 md:h-80 grid grid-cols-8 grid-rows-8 h-30 bg-purple-300 rounded-2xl px-6 mt-2 lg:mt-6'>
                    <h1 className='text-2xl md:text-3xl font-semibold text-gray-900 flex gap-4'>$4T</h1>
                    <p className='font-bold text-gray-900 pt-5 row-start-3 whitespace-nowrap md:row-start-2'>Assets managed by Bipsync clients</p>
                </div>
                <div className='pt-6 h-80 bg-blue-200 rounded-2xl px-6 mt-2'>
                    <h1 className='font-bold text-gray-900 tracking-tight'>"I’d say we’ve more than doubled in efficiencies just with the addition of Bipsync. And I’m probably grossly understating it."</h1>
                    <div className='flex flex-row pt-6 gap-6'>
                    <img src={Woman} className='h-40 rounded-lg' alt="" />
                    <p className='font-semibold pt-5'>April Robinson, <br />
                        Vice President of Investment <br /> Operations</p>
                    </div>
                </div>
                <div className='pt-6 h-80 bg-blue-200 rounded-2xl px-6 mt-2'>
                    <h1 className='font-bold text-gray-900 tracking-tight'>"The response that we get from Bipsync is fast and always helpful – so it’s more than just the system, it’s been a good partnership."</h1>
                    <div className='flex flex-row pt-6 gap-6'>
                    <img src={Man} className='h-40 rounded-lg' alt="" />
                    <p className='font-semibold pt-5'>Henk Jonker, <br />Head of <br /> Research and <br /> Operations</p>
                    </div>
                </div>
                <div className='pt-6 h-50 md:h-80 bg-gray-100 rounded-2xl px-6 mt-2
                 border border-blue-300'>   
                    <h1 className='font-bold text-gray-900 flex gap-4'>Explore what other modern investors are leveraging for their research management processes.</h1>
                    <button className='pl-4 pr-4 pt-3 pb-3 font-bold text-gray-900 bg-green-400 rounded-lg mt-6 other-btn hover:bg-green-300 transition-all hover:text-gray-900'>View our Case Studies</button>
                </div>
                </div>
            </div>
            <div className='pt-2 h-130 lg:h-220 bg-blue-100 -mx-6 text-gray-900 z-20'>
                <p className='font-bold tracking-tighter'>Resources</p>
                <h1 className='pt-2 font-semibold text-3xl tracking-tight'>News & Insights</h1>
                <div className='flex no-scrollbar overflow-x-auto whitespace-nowrap lg:grid lg:grid-cols-3 lg:grid-rows-2 mx-4'>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 md:ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-22 bg-green-300 mt-4 p-2 rounded-lg text-[0.7rem]'>TECHNOLOGY</a>
                    <p className='lg:text-[1.3rem] whitespace-normal'>
                        What we learned building AI for investment teams
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>
                        Key takeaways from a conversation between Bipsync CTO Craig Marvelley and UVIMCO’s Blake Fischer...
                    </p>
                    </div>
                </div>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-26 bg-cyan-200 mt-4 p-2 rounded-lg text-[0.7rem]'>ANNOUCEMENTS</a>
                    <p className='lg:text-[1.3rem] whitespace-normal lg:w-70 pr-2'>
                        Arch and Bipsync integrate to automate private markets and data management.
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>               
                        Integration organizes and delivers private investment documents from Arch into Bipsync, reducing manual workflows and...  
                    </p>
                    </div>
                </div>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-37 bg-blue-200 mt-4 p-2 rounded-lg text-[0.7rem]'>RESEARCH MANAGEMENT</a>
                    <p className='lg:text-[1.3rem] whitespace-normal lg:w-70 pr-2'>
                        Why Endowments & Foundations are modernizing their research systems
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>
                        6 reasons why 6 of the 8 Ivy League endowments chose Bipsync to modernize their end‑to‑end research process.
                    </p>
                    </div>
                </div>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-37 bg-blue-200 mt-4 p-2 rounded-lg text-[0.7rem]'>RESEARCH MANAGEMENT</a>
                    <p className='lg:text-[1.3rem] whitespace-normal lg:w-70'>
                        The hedge fund maturity curve: From idea storage to institutional intelligence
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>
                        The Investment Maturity Curve helps firms assess how well they preserve investment context and whether their research process can scale.
                    </p>
                    </div>
                </div>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-37 bg-cyan-300 mt-4 p-2 rounded-lg text-[0.7rem]'>RESEARCH & WHITEPAPER</a>
                    <p className='lg:text-[1.3rem] whitespace-normal lg:w-70'>
                        How rising institutional complexity is reshaping family office operations
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>
                        Family offices today are in the middle of a profound transformation. No longer focused solely on legacy wealth preservation, family offices.
                    </p>
                    </div>
                </div>
                <div className='h-75 tracking-tight font-bold flex flex-col justify-between text-start px-6 border-2 border-blue-300 rounded-2xl mt-6 bg-blue-50 ml-6'>
                    <div className='flex flex-col gap-2 xss:w-45'>
                    <a  href="" className='w-44 bg-purple-200 mt-4 p-2 rounded-lg text-[0.7rem]'>PRODUCT NEWS AND UPDATES</a>
                    <p className='lg:text-[1.3rem] whitespace-normal lg:w-70 pr-2'>
                          2025 Bipsync Product Review
                    </p>
                    </div>
                    <div>
                    <p className='text-[0.8rem] pb-6 lg:text-[1rem] whitespace-normal font-semibold'>                      
                         Discover how Bipsync’s 2025 product enhancements help investment teams turn research into decision-ready insights   
                    </p>
                    </div>
                </div>           
            </div>
            <button className='font-bold mt-10 p-3 rounded-lg bg-green-400 border-green-900 other-btn hover:bg-green-300 transition-all hover:text-gray-900'>All News & Insights</button>
            </div>
        </div>
    )
}

export default Investment