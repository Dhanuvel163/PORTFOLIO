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

function About(){
    const containerRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tweens : gsap.core.Tween[] = [];
        animateAbout(gsap,tweens,containerRef,skillsRef,iconsRef)
        return () => {
            tweens.forEach((tween)=>tween.kill())
        }
    },[])
    return(
        <section className="min-h-[100vh] py-20 flex justify-center items-center px-[5%] bg-secondary border-t border-[#eaeaea] border-solid max-w-[100vw] overflow-hidden dark:bg-darkprimary dark:border-[#E5E7EB6E]" id='skills'>
            <div ref={containerRef} className='invisible'>
                <h2 className="text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold  text-center text-[black] dark:text-[white]">Skills</h2>
                
                <div className='block mt-6 600:flex'>
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