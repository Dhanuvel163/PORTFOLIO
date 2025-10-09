import { MouseEventHandler, ReactNode } from "react";

function Button({
    className, icon, title, label, onClick=()=>{}
}:{
    className?: string, icon?: ReactNode, title?: string, label:string, onClick?:MouseEventHandler<HTMLButtonElement>
}){
    return(
        <button className={`flex items-center pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm hover:shadow ring-1 ring-[rgb(51,65,85)]/[0.1] dark:ring-[rgb(255,255,255)]/[0.3] hover:bg-[hsl(240,4.8%,95.9%)] dark:hover:!bg-darkprimary/30 dark:hover:opacity-70 ${className}`} aria-label={label} onClick={onClick}>
            {icon}
            {
                title && 
                <span className="ml-2">{title}</span>
            }
        </button>
    )
}

export default Button;