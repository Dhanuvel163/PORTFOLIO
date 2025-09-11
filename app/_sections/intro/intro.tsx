"use client"
import {useRef,useEffect} from 'react';
import Button from '@/components/button/button';
import classes from './intro.module.css';
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {BiMailSend} from 'react-icons/bi';
import Link from 'next/link';
import {Power3,gsap} from 'gsap';
import ParticleBackground from '@/components/particles/ParticleBackground';
import GeometricShapes from '@/components/geometric/GeometricShapes';

function Intro(){
    let containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        if(window.innerWidth < 600) return;
        const visibility = gsap.to(containerRef.current,{css:{visibility:'visible'},duration:0})
        const tl = gsap.timeline()
        tl.from([containerRef.current?.children[0]],{y:20,ease:Power3.easeOut,opacity:0,duration:0.8})
        .from([containerRef.current?.children[1].children],{opacity:0,ease:Power3.easeOut,y:20,stagger:0.2,duration:0.8})

        return ()=>{
            if(window.innerWidth < 600) return;
            tl.kill()
            visibility.kill()
        }
    },[])

    return(
        <section className="relative h-[100vh] flex justify-center items-center overflow-hidden" id='intro'>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-primary/5 dark:from-darkprimary dark:via-darkprimary dark:to-primary/10"></div>
            {/* Particle system */}
            <ParticleBackground
                particleCount={30} 
                colors={['#9004ef', '#ffffff40', '#f0f0f040']}
                scrollMultiplier={0.3}/>
            {/* Geometric shapes */}
            <GeometricShapes />
            {/* Main content */}
            <div className="max-w-[90%] 750:max-w-[50%]">
                <div className='flex justify-center items-center'>
                    <h1 className={`${classes.hi} dark:text-[white] relative z-10`}>
                        Hello, I&apos;m Dhanavel R
                    </h1>
                </div>
                <div ref={containerRef} className='600:invisible relative z-10'>
                    <h2 className="mt-6 text-base 300:text-xl text-center dark:text-[white] bg-white/10 dark:bg-black/10 rounded-lg p-4">
                        A <span className="text-primary">Full Stack Developer</span> who is passionate, creative, and driven to produce outstanding digital experiences. Connect with me to create seamless, user-friendly, and cutting-edge apps.
                    </h2>
                    <div className='flex flex-wrap justify-center items-center mt-6 text-2xl gap-2 350:gap-3 dark:text-[white] relative z-10'>
                        <Link href="https://github.com/Dhanuvel163" target='_blank' aria-label='View github profile'>
                            <Button className="backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105" icon={<AiFillGithub/>} label='View github profile'/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/dhanavel-ramachandran-721802193/" target='_blank' aria-label='View linkedin profile'>
                            <Button className="backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105" icon={<AiFillLinkedin/>} label='View linkedin profile'/>
                        </Link>
                        <Link href="https://www.instagram.com/dhanavel_____/?hl=en" target='_blank' aria-label='View instagram profile'>
                            <Button className="backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105" icon={<AiFillInstagram/>} label='View instagram profile'/>
                        </Link>
                        <Link href="mailto:dhanuram99@gmail.com" target='_blank' aria-label='Send mail'>
                            <Button className="backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105" icon={<BiMailSend/>} label='Send mail'/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;