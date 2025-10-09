"use client"
import { useEffect, useRef } from 'react';
import Skillscard from '@/components/skillscard/Skillscard';
import {frontend,backend,tools,ai,database,language} from './data';
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {RiLightbulbFlashFill} from 'react-icons/ri';
import {SiFastapi} from 'react-icons/si';
import Iconcard from '@/components/iconcard/iconcard';
// import { animateAbout } from './animate';
import { BiSolidMobileVibration } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import AnimatedGrid from '@/components/grid/AnimatedGrid';
import ParticleBackground from '@/components/particles/ParticleBackground';

function About(){
    const containerRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        // if(window.innerWidth < 600) return;
        // gsap.registerPlugin(ScrollTrigger)
        // const tweens : gsap.core.Tween[] = [];
        // const viewportWidth = window.innerWidth;
        // animateAbout(gsap,tweens,containerRef,skillsRef,iconsRef,viewportWidth)
        // return () => {
        //     if(window.innerWidth < 600) return;
        //     tweens.forEach((tween)=>tween.kill())
        // }
    },[])
    return(
        <section className="relative min-h-[100vh] py-20 flex justify-center items-center px-[5%] border-t border-[#eaeaea] border-solid max-w-[100vw] overflow-hidden dark:border-[#E5E7EB6E]" id='skills'>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary to-white dark:from-primary/10 dark:via-darkprimary dark:to-darksecondary"></div>

            {/* Decorative background elements */}
            <div className="absolute top-10 left-[-10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl opacity-50 dark:from-primary/30 dark:to-darkprimary/20"></div>
            <div className="absolute bottom-10 right-[-10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tl from-secondary/15 to-primary/5 blur-3xl opacity-40 dark:from-darkprimary/25 dark:to-primary/15"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-primary/5 blur-2xl opacity-30 dark:bg-primary/10"></div>

            {/* Grid background */}
            <AnimatedGrid />
            {/* Particle system */}
            <ParticleBackground
                particleCount={25}
                colors={['#9004ef', '#f9f9f940', '#00000020']}
                scrollMultiplier={0.6}/>

            <div ref={containerRef} className='w-full max-w-[75rem]'>
                <h2 className="relative z-10 text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold text-center text-[black] dark:text-[white] mb-12">Skills & Expertise</h2>
                <div className='relative z-10 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-6 mt-8'>
                    <Skillscard title='Language' skills={language}/>
                    <Skillscard title='Frontend' skills={frontend}/>
                    <Skillscard title='Backend' skills={backend}/>
                    <Skillscard title='Database' skills={database}/>
                    <Skillscard title='AI' skills={ai}/>
                    <Skillscard title='Tools' skills={tools}/>
                    <Iconcard
                        title='Intuitive'
                        description='Effortlessly navigable, instinctively user-friendly UX/UI.'
                        icon={<RiLightbulbFlashFill className="text-[2rem]"/>}
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
                        className='block min-[1024px]:hidden'
                        title='Futuristic'
                        description='Designing with tomorrow technology in mind, ready to evolve with innovation.'
                        icon={<GrTechnology className="text-[2rem]"/>}
                    />
                </div>
            </div>
        </section>
    )
}

export default About;
