'use client'
import React, { useContext } from 'react';
import Image from 'next/legacy/image'
import Button from '@/components/button/button';
import {MdLightMode} from 'react-icons/md';
import { ThemeContext } from '../@darkmode/darkmode';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNightlight } from "react-icons/md";

interface HeaderProps {
  isOpen: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

function Header({ isOpen, onClose = ()=>{}, onOpen = ()=>{} }: HeaderProps){
    const theme = useContext(ThemeContext);
    return(
        <header className="fixed flex justify-between top-0 z-40 w-full border-[#e5e7eb] dark:border-[#E5E7EB6E] border-solid border-b backdrop-blur px-1 350:px-3 750:px-10 bg-[#ffffff6E] dark:bg-[#0000006E]">
            <div className='p-1 280:p-2'>
                <div className="relative h-[2.8rem] w-[2.8rem] 280:h-[3.125rem] 280:w-[3.125rem]">
                    <Image src={'/images/logo/logo100x100.webp'} layout='fill' objectFit='cover' alt='logo'/>
                </div>
            </div>
            <div className='hidden 200:flex dark:text-[white]'>
                <div className='m-auto ml-2 280:ml-4'>
                    {
                        theme?.theme 
                        ? <Button className="dark:hover:!bg-darkprimary/30 font-bold"
                            icon={<MdLightMode/>} label='Dark' onClick={()=>theme.toggleTheme()}/>
                        : <Button className="dark:hover:!bg-darkprimary/30 font-bold"
                        icon={<MdOutlineNightlight className='-rotate-[30deg]'/>} label='Light' onClick={()=>theme?.toggleTheme()}/>
                    }
                </div>
                <div className='m-auto ml-2 280:ml-4'>
                    <Button className="dark:hover:!bg-darkprimary/30 font-bold"
                        icon={<GiHamburgerMenu/>} label='Dark' onClick={isOpen ? onClose : onOpen}/>
                </div>
            </div>
        </header>
    )    
}

export default Header;