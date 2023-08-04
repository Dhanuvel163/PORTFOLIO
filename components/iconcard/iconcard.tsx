function Iconcard({
    title, description, icon
}:{
    title:string, description:string, icon:JSX.Element

}){
    return(
        <div className="bg-[white] rounded-xl p-4 mt-3 shadow-sm ring-1 ring-[rgb(51,65,85)]/[0.1]">
            <div className="flex justify-center">
                {icon}
            </div>
            <div className='text-base font-bold'>
                {title}
            </div>
            <div className='text-xs'>
                {description}
            </div>
        </div>
    );
}

export default Iconcard;