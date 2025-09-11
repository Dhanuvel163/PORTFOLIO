"use client"
import { useEffect, useRef } from 'react';
import Skillscard from '@/components/skillscard/Skillscard';
import {frontend,backend,tools,ai,database} from './data';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {RiLightbulbFlashFill} from 'react-icons/ri';
import {SiFastapi} from 'react-icons/si';
import Iconcard from '@/components/iconcard/iconcard';
import { animateAbout } from './animate';
import { BiSolidMobileVibration } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import AnimatedGrid from '@/components/grid/AnimatedGrid';
import ParticleBackground from '@/components/particles/ParticleBackground';

function About(){
    const containerRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        if(window.innerWidth < 600) return;
        gsap.registerPlugin(ScrollTrigger)
        const tweens : gsap.core.Tween[] = [];
        const viewportWidth = window.innerWidth;
        animateAbout(gsap,tweens,containerRef,skillsRef,iconsRef,viewportWidth)
        return () => {
            if(window.innerWidth < 600) return;
            tweens.forEach((tween)=>tween.kill())
        }
    },[])
    return(
        <section className="relative min-h-[100vh] py-20 flex justify-center items-center px-[5%] border-t border-[#eaeaea] border-solid max-w-[100vw] overflow-hidden dark:border-[#E5E7EB6E]" id='skills'>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary to-white dark:from-primary/10 dark:via-darkprimary dark:to-darksecondary"></div>
            {/* Grid background */}
            <AnimatedGrid />
            {/* Particle system */}
            <ParticleBackground 
                particleCount={25} 
                colors={['#9004ef', '#f9f9f940', '#00000020']}
                scrollMultiplier={0.6}/>
            <div ref={containerRef} className='600:invisible'>
                <h2 className="relative z-10 text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold text-center text-[black] dark:text-[white]">Skills</h2>
                
                <div className='relative z-10 block mt-6 600:flex'>
                    <div className='flex items-center'>
                        <div ref={skillsRef}>
                            <Skillscard title='Frontend' skills={frontend}/>
                            <Skillscard title='Backend' skills={backend}/>
                            <Skillscard title='Database' skills={database}/>
                            <Skillscard title='AI' skills={ai}/>
                            <Skillscard title='Tools' skills={tools}/>
                        </div>
                    </div>
                    <div className='w-[1px] mx-[5vw] bg-[black]/[0.05]'>
                    </div>
                    <div className='flex flex-col max-w-[15.25rem] text-center m-auto mt-10 600:m-0' ref={iconsRef}>
                        <Iconcard 
                            title='Intuitive' 
                            description='Effortlessly navigable, instinctively user-friendly UX/UI.' 
                            icon={<RiLightbulbFlashFill className="text-[2.75rem]"/>}
                        />
                        <Iconcard 
                            title='Scale' 
                            description='Easily scalable and high performant products.' 
                            icon={<SiFastapi className="text-[2rem]"/>}
                        />
                        <Iconcard 
                            title='Adaptable' 
                            description='Adapt to any screen size/device, from the grandest to the tiniest.' 
                            icon={<BiSolidMobileVibration className="text-[2rem]"/>}
                        />
                        <Iconcard 
                            title='Futuristic'
                            description='Designing with tomorrow’s technology in mind, ready to evolve with innovation.' 
                            icon={<GrTechnology className="text-[2rem]"/>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;