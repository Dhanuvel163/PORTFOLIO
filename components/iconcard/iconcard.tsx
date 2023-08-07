function Iconcard({
    title, description, icon
}:{
    title:string, description:string, icon:JSX.Element

}){
    return(
        <div className="bg-[white] dark:bg-darkprimary dark:text-[white] dark:ring-[rgb(255,255,255)]/[0.3] rounded-xl p-4 mt-3 shadow-sm ring-1 ring-[rgb(51,65,85)]/[0.1]">
            <div className="flex justify-center">
                {icon}
            </div>
            <h4 className='text-base font-bold'>
                {title}
            </h4>
            <p className='text-xs'>
                {description}
            </p>
        </div>
    );
}

export default Iconcard;