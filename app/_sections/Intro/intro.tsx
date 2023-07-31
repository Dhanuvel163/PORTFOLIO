import Button from '@/components/button/button';
import classes from './intro.module.css';
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {BiMailSend} from 'react-icons/bi';
import Link from 'next/link';

function Intro(){
    return(
        <section className="h-[calc(100vh-4.175rem)] flex justify-center items-center">
            <div className="max-w-[90%] 750:max-w-[50%]">
                <div className='flex justify-center items-center'>
                    <h1 className={classes.hi}>
                        Hello, I&apos;m Dhanavel R
                    </h1>
                </div>
                <h2 className="mt-6 text-base 300:text-xl text-center">
                    A <span className="text-primary">Full Stack Developer</span> who is passionate, creative, and driven to produce outstanding digital experiences. Connect with me to create seamless, user-friendly, and cutting-edge apps.
                </h2>
                <div className='flex flex-wrap justify-center items-center mt-6 text-2xl gap-2 350:gap-3'>
                    <Link href="https://github.com/Dhanuvel163" target='_blank' aria-label='View github profile'>
                        <Button icon={<AiFillGithub/>} label='View github profile'/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/dhanavel-ramachandran-721802193/" target='_blank' aria-label='View linkedin profile'>
                        <Button icon={<AiFillLinkedin/>} label='View linkedin profile'/>
                    </Link>
                    <Link href="https://www.instagram.com/dhanavel_____/?hl=en" target='_blank' aria-label='View instagram profile'>
                        <Button icon={<AiFillInstagram/>} label='View instagram profile'/>
                    </Link>
                    <Link href="mailto:dhanuram99@gmail.com" target='_blank' aria-label='Send mail'>
                        <Button icon={<BiMailSend/>} label='Send mail'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Intro;