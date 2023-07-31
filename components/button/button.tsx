function Button({
    className, icon, title, label
}:{
    className?: string, icon?: JSX.Element, title?: string, label:string
}){
    return(
        <button className={`flex items-center pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm hover:shadow ring-1 ring-[rgb(51,65,85)]/[0.1] hover:bg-[hsl(240,4.8%,95.9%)] ${className}`} aria-label="">
            {icon}
            {
                title && 
                <span className="ml-2">{title}</span>
            }
        </button>
    )
}

export default Button;