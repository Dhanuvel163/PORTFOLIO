"use client"
import { useEffect, useRef } from "react";

function DarkMode({
    children
}:{
    children: React.ReactNode
}){
    const htmlRef = useRef<HTMLHtmlElement>(null)
    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlRef.current?.classList.add('dark')
        } else {
            htmlRef.current?.classList.remove('dark')
        }
    },[])
    return(
        <html lang="en" className='scroll-smooth' ref={htmlRef}>
            {children}
        </html>
    );
}

export default DarkMode;