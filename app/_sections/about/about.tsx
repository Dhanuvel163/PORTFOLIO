"use client"
import { useEffect, useRef } from 'react';
import Skillscard from '@/components/skillscard/Skillscard';
import {frontend,backend,tools} from './data';
import {gsap,Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

function About(){
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tweens : gsap.core.Tween[] = [];

        tweens.push(
            gsap.to(containerRef.current,{css:{visibility:'visible'},duration:0})        
        )

        //Title animation
        tweens.push(
            gsap.from(
                [containerRef.current?.children[0]],
                {
                    x:'-100',
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%",
                        end: "bottom 95%",
                    },
                    duration: 0.8,
                    ease: Power3.easeOut,
                }
            )
        )

        //Skill card animation
        const children:number = containerRef.current?.children[1].children.length || 0;
        for (let i = 0; i < children; i++) {
            const child = containerRef.current?.children[1].children[i];
            tweens.push(
                gsap.from(
                    [child],
                    {
                        x:'-300px',
                        opacity: 0,
                        scrollTrigger: {
                            trigger: child,
                            start: "top 98%",
                            end: "bottom 98%",
                        },
                        duration: 0.8,
                        ease: Power3.easeOut,
                    }
                )
            )
        }
        return () => {
            tweens.forEach((tween)=>tween.kill())
        }
    },[])
    return(
        <section className="h-[calc(100vh-4.175rem)] flex justify-center items-center mt-10 px-[5%] bg-secondary"
            ref={sectionRef}>
            <div ref={containerRef} className='invisible'>
                <h2 className="text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold  text-center text-[white]">Skills</h2>
                <div className='mt-6'>
                    <Skillscard title='Frontend' skills={frontend}/>
                    <Skillscard title='Backend' skills={backend}/>
                    <Skillscard title='Tools' skills={tools}/>
                </div>
            </div>
        </section>
    )
}

export default About;