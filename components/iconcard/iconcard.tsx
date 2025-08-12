function Iconcard({
    title, description, icon
}:{
    title:string, description:string, icon:JSX.Element

}){
    return(
        <div className="bg-[white]/80 backdrop-blur-sm dark:bg-darksecondary/80 dark:text-[white] dark:ring-[rgb(255,255,255)]/[0.3] rounded-xl p-4 py-7 mt-3 shadow-lg ring-1 ring-[rgb(51,65,85)]/[0.1] transition-all duration-300 hover:shadow-xl hover:scale-[1.05] group cursor-pointer">
            <div className="flex justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h4 className='text-base font-bold mt-2 group-hover:text-primary transition-colors duration-300'>
                {title}
            </h4>
            <p className='text-xs mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                {description}
            </p>
        </div>
    );
}

export default Iconcard;