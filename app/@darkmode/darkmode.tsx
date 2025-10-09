"use client"
import { useEffect, createContext, useState } from "react";

export const ThemeContext = createContext<{ theme: boolean; toggleTheme:Function; } | null>(null)

function DarkMode({
    children
}:{
    children: React.ReactNode
}){
    const [theme,setTheme]:[boolean,Function] = useState<boolean>(false);
    const toggleTheme = () => {
        setTheme((curTheme:boolean)=>{
            if(curTheme) {
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
            }
            else {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
            }
            return !curTheme
        })
    }
    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true)
            document.documentElement.classList.add('dark')
        } else {
            setTheme(false)
            document.documentElement.classList.remove('dark')
        }
    },[])
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default DarkMode;