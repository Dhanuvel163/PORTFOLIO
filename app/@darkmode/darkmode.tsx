"use client"
import { useEffect, useRef, createContext, useState } from "react";

export const ThemeContext = createContext<{ theme: boolean; toggleTheme:Function; } | null>(null)

function DarkMode({
    children
}:{
    children: React.ReactNode
}){
    const htmlRef = useRef<HTMLHtmlElement>(null)
    const [theme,setTheme]:[boolean,Function] = useState<boolean>(false);
    const toggleTheme = () => {
        setTheme((curTheme:boolean)=>{
            if(curTheme) {
                htmlRef.current?.classList.remove('dark')
                localStorage.theme = 'light'
            }
            else {
                htmlRef.current?.classList.add('dark')
                localStorage.theme = 'dark'
            }
            return !curTheme
        })
    }
    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true)
            htmlRef.current?.classList.add('dark')
        } else {
            setTheme(false)
            htmlRef.current?.classList.remove('dark')
        }
    },[])
    return(
        <html lang="en" className='scroll-smooth' ref={htmlRef}>
            <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </html>
    );
}

export default DarkMode;