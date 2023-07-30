import Image from 'next/image'
function Header(){
    return(
        <header className="sticky top-0 z-40 w-full border-[#e5e7eb] border-solid border-b backdrop-blur px-1 350:px-3 750:px-10">
            <div className="p-2">
                <Image src={'/images/logo/logo100x100.webp'} height={50} width={50} alt='logo'/>
            </div>
        </header>
    )    
}

export default Header;