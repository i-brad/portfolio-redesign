import Navbar from './Navbar'
import Image from "next/image";
import { facebook, circle, twitter, linkedin, email, github } from "../assets/svg"

function Layout({ children }) {
    return (
        <main className="relative w-screen h-screen overflow-x-hidden transition-all bg-black scroll-smooth">
            <div className="fixed hidden -translate-y-1/2 top-1/2 -left-32 lg:block">
                <Image src={circle} alt="circle" width={200} height={200} />
            </div>
            <Navbar />
            <div className='relative pt-16 w-screen min-h-screen md:w-[75%] mx-auto p-5 md:px-10 before:absolute before:h-full before:z-0 before:w-screen before:bg-white/5 before:blur-md before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2'>
                {children}
                <span className="block my-16 space-x-5 md:space-x-7 group" rel="noreferrer">
                    {/* <a href="https://web.facebook.com/Braimah-Destiny-105694525474749" target="_blank" title="Facebook" rel="noreferrer">
                        <Image src={facebook} alt="facebook" width={20} height={20} className="transition-all duration-200 hover:scale-110 active:scale-110" />
                    </a> */}
                    <a href="https://twitter.com/_techd" target="_blank" title="Twitter" rel="noreferrer">
                        <Image src={twitter} alt="twitter" width={20} height={20} className="transition-all duration-200 hover:scale-110 active:scale-110" />
                    </a>
                    {/* <a href="https://www.linkedin.com/in/destiny-braimah-073178238/" target="_blank" title="LinkedIn" rel="noreferrer">
                        <Image src={linkedin} alt="linkedin" width={20} height={20} className="transition-all duration-200 hover:scale-110 active:scale-110" />
                    </a> */}
                    <a href="mailto: braimahaboy@gmail.com" target="_blank" title="Email" rel="noreferrer">
                        <Image src={email} alt="email" width={20} height={20} className="transition-all duration-200 hover:scale-110 active:scale-110" />
                    </a>
                    <a href="https://github.com/i-brad/" target="_blank" title="Github" rel="noreferrer">
                        <Image src={github} alt="github" width={20} height={20} className="transition-all duration-200 hover:scale-110 active:scale-110" />
                    </a>
                </span>
            </div>
            <div className="fixed hidden -translate-y-1/2 top-1/2 -right-32 lg:block">
                <Image src={circle} alt="circle" width={200} height={200} />
            </div>
        </main>
    )
}

export default Layout
