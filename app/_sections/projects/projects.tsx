"use client"
import Button from "@/components/button/button";
import Image from "next/legacy/image";
import { FaEye } from "react-icons/fa";
import projectsData from './data.json';
import Link from "next/link";
import {useRef,useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { animateProjects } from "./animate";
import GeometricShapes from "@/components/geometric/GeometricShapes";
import ParticleBackground from "@/components/particles/ParticleBackground";

function Projects(){
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tweens : gsap.core.Tween[] = [];
        animateProjects(gsap,tweens,containerRef)
        return () => {
            tweens.forEach((tween)=>tween.kill())
        }
    },[])
    return(
        <section className="relative min-h-[100vh] py-20 flex justify-center items-center px-[5%] border-t border-[#eaeaea] border-solid dark:border-[#E5E7EB6E] overflow-hidden" id="projects">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-primary/5 to-secondary dark:from-darksecondary dark:via-primary/10 dark:to-darkprimary"></div>
            {/* Geometric shapes */}
            <GeometricShapes />
            {/* Particle system */}
            <ParticleBackground 
                particleCount={20} 
                colors={['#9004ef', '#ffffff60', '#f9f9f960']}
                scrollMultiplier={0.4}/>
            <div ref={containerRef}>
                <h2 className="relative z-10 text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold text-center text-[black] dark:text-[white]">Projects</h2>
                <div className="relative z-10 mt-6">
                    {
                        projectsData.map((project)=>(
                            <div className="flex justify-center" key={project.title}>
                                <div className="block 750:flex bg-[white]/80 backdrop-blur-sm rounded-xl ring-1 ring-[rgb(51,65,85)]/[0.1] mt-3 shadow-lg relative hover:z-20 overflow-hidden max-w-none 1100:max-w-[80%] dark:bg-darksecondary/80 dark:text-[white] dark:ring-[rgb(255,255,255)]/[0.3] transition-all duration-300 hover:shadow-2xl hover:scale-[1.0075]">
                                    <div className="relative w-full 750:w-80 ring-1 ring-[rgb(51,65,85)]/[0.1] 750:hidden">
                                        <Image src={project.image} height={project.height} width={project.weight} layout='responsive' objectFit='contain' alt="project image"/>
                                    </div>
                                    <div className="relative w-full 750:w-80 ring-1 ring-[rgb(51,65,85)]/[0.1] hidden 750:block">
                                        <Image src={project.image} layout='fill' objectFit='contain' alt="project image"/>
                                    </div>
                                    <div className="px-5 500:px-10 py-5 750:flex-[0%] grid">
                                        <div>
                                            <h3 className="text-xl 500:text-3xl font-bold">{project.title}</h3>
                                            <p className="text-xs 500:text-sm mt-3">
                                                {project.description}
                                            </p>
                                            {
                                                (project.skills.length > 0) &&
                                                <>
                                                    <h2 className="text-1xl font-bold mt-3">Skills</h2>
                                                    <div className="flex flex-wrap gap-3 mt-1">
                                                        {
                                                            project.skills.map((skill)=>(
                                                                <div className="rounded-2xl bg-primary/10 backdrop-blur-sm ring-1 ring-primary/20 px-2 py-1 text-xs 500:text-sm transition-all duration-300 hover:bg-primary/20" key={`${skill} ${project.title}`}>
                                                                    {skill}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <div className="mt-auto pt-5">
                                            {
                                                project.actions.map((action)=>(
                                                    <Link href={action.link} target="_blank" key={action.label}>
                                                        <Button className="bg-primary/10 hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105" label={action.label} icon={<FaEye/>} title={action.action}/>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;