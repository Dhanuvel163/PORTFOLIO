function Iconcard({
    title, description, icon, className=""
}:{
    title:string, description:string, icon:JSX.Element, className?:string

}){
    return(
        <div className={`
            relative bg-[white]/90 backdrop-blur-md dark:bg-darksecondary/90 dark:text-[white] 
            dark:ring-[rgb(255,255,255)]/[0.3] rounded-2xl p-5 py-6 shadow-lg ring-1 ring-[rgb(51,65,85)]/[0.1] 
            transition-all duration-500 hover:shadow-2xl hover:scale-[1.08] group cursor-pointer overflow-hidden
            ${className}
        `}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-bl from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>

            <div className="relative z-10">
                <div className="flex justify-center text-primary group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {icon}
                </div>
                <h4 className='text-lg font-bold mt-3 group-hover:text-primary transition-colors duration-300'>
                    {title}
                </h4>
                <p className='text-sm mt-2 opacity-75 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Iconcard;