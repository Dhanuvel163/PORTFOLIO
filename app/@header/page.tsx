'use client'
import React, { useContext } from 'react';
import Image from 'next/legacy/image'
import { Link as ScrollLink } from 'react-scroll'
import Button from '@/components/button/button';
import {MdLightMode,MdNightlight} from 'react-icons/md';
import { ThemeContext } from '../@darkmode/darkmode';

function Header(){
    const theme = useContext(ThemeContext);
    return(
        <header className="fixed flex justify-between top-0 z-40 w-full border-[#e5e7eb] border-solid border-b backdrop-blur px-1 350:px-3 750:px-10">
            <div className='p-1 280:p-2'>
                <div className="relative h-[2.8rem] w-[2.8rem] 280:h-[3.125rem] 280:w-[3.125rem]">
                    <Image src={'/images/logo/logo100x100.webp'} layout='fill' objectFit='cover' alt='logo'/>
                </div>
            </div>
            <div className='hidden 200:flex dark:text-[white]'>
                <ScrollLink className='cursor-pointer items-center text-xs 280:text-base hidden 330:flex' activeClass="text-primary border-b border-primary border-solid font-bold" to="intro" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Home
                    </div>
                </ScrollLink>
                <ScrollLink className='ml-2 280:ml-4 cursor-pointer items-center text-xs 280:text-base hidden 330:flex' activeClass="text-primary border-b border-primary border-solid font-bold" to="skills" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Skills
                    </div>
                </ScrollLink>
                <ScrollLink className='ml-2 280:ml-4 cursor-pointer items-center text-xs 280:text-base hidden 330:flex' activeClass="text-primary border-b border-primary border-solid font-bold" to="projects" spy={true} smooth={true} offset={0} duration={100}>
                    <div>
                        Projects
                    </div>
                </ScrollLink>
                <div className='m-auto ml-2 280:ml-4'>
                    {
                        theme?.theme 
                        ? <Button className="dark:hover:!bg-darkprimary/30 font-bold"
                            icon={<MdNightlight/>} label='Dark' onClick={()=>theme.toggleTheme()}/>
                        : <Button className="dark:hover:!bg-darkprimary/30 font-bold"
                        icon={<MdLightMode/>} label='Light' onClick={()=>theme?.toggleTheme()}/>
                    }
                </div>
            </div>
        </header>
    )    
}

export default Header;