'use client'
import React from 'react';
import Image from 'next/legacy/image'
import { Link as ScrollLink } from 'react-scroll'

function Header(){
    return(
        <header className="fixed flex justify-between top-0 z-40 w-full border-[#e5e7eb] border-solid border-b backdrop-blur px-1 350:px-3 750:px-10">
            <div className='p-1 280:p-2'>
                <div className="relative h-[2.8rem] w-[2.8rem] 280:h-[3.125rem] 280:w-[3.125rem]">
                    <Image src={'/images/logo/logo100x100.webp'} layout='fill' objectFit='cover' alt='logo'/>
                </div>
            </div>
            <div className='hidden 200:flex'>
                <ScrollLink className='cursor-pointer flex items-center text-xs 280:text-base' activeClass="text-primary border-b border-primary border-solid" to="intro" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Home
                    </div>
                </ScrollLink>
                <ScrollLink className='ml-2 280:ml-4 cursor-pointer flex items-center text-xs 280:text-base' activeClass="text-primary border-b border-primary border-solid" to="skills" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Skills
                    </div>
                </ScrollLink>
                <ScrollLink className='ml-2 280:ml-4 cursor-pointer flex items-center text-xs 280:text-base' activeClass="text-primary border-b border-primary border-solid" to="projects" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Projects
                    </div>
                </ScrollLink>
            </div>
        </header>
    )    
}

export default Header;