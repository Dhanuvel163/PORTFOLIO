"use client"
import Button from "@/components/button/button";
import Image from "next/legacy/image";
import { FaEye, FaArrowRight } from "react-icons/fa";
import projectsData from './data.json';
import Link from "next/link";
import {useRef,useEffect} from 'react';
// import {gsap} from "gsap";
// import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
// import { animateProjects } from "./animate";
import GeometricShapes from "@/components/geometric/GeometricShapes";
import ParticleBackground from "@/components/particles/ParticleBackground";

function Projects({ showAll = false }: { showAll?: boolean }){
    const containerRef = useRef<HTMLDivElement>(null);
    const displayProjects = showAll 
        ? projectsData 
        : projectsData.filter(project => project.starred).slice(0, 6);
    
    useEffect(()=>{
        // if(window.innerWidth < 600) return;
        // gsap.registerPlugin(ScrollTrigger)
        // const tweens : gsap.core.Tween[] = [];
        // animateProjects(gsap,tweens,containerRef,showAll)
        // return () => {
        //     if(window.innerWidth < 600) return;
        //     tweens.forEach((tween)=>tween.kill())
        // }
    },[])
    return(
        <div className="relative border-t border-[#eaeaea] border-solid dark:border-[#E5E7EB6E]">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-primary/5 to-secondary dark:from-darksecondary dark:via-primary/10 dark:to-darkprimary"></div>
            {/* Geometric shapes */}
            <GeometricShapes />
            {/* Particle system */}
            <ParticleBackground 
                particleCount={20} colors={['#9004ef', '#ffffff60', '#f9f9f960']} scrollMultiplier={0.4}/>
            <section className="m-auto max-w-[75rem] min-h-[100vh] py-20 flex justify-center items-center max-[1250px]:px-[5%]" id="projects">
                <div ref={containerRef}>
                    {
                        !showAll &&
                        <h2 className="relative z-10 text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold text-center text-[black] dark:text-[white] mb-12">Projects</h2>
                    }
                    <div className="relative z-10 mt-6 grid grid-cols-1 min-[780px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-6">
                        {
                            displayProjects.map((project)=>(
                                <div className="flex flex-col hover:scale-[1.02] bg-[white]/80 backdrop-blur-sm rounded-xl ring-1 ring-[rgb(51,65,85)]/[0.1] shadow-lg overflow-hidden dark:bg-darksecondary/80 dark:text-[white] dark:ring-[rgb(255,255,255)]/[0.3] transition-all duration-300" key={project.title}>
                                    <div className="relative w-full h-48 min-[600px]:h-64 ring-1 ring-[rgb(51,65,85)]/[0.1] dark:ring-[rgb(255,255,255)]/[0.3]">
                                        <Image src={project.image} layout='fill' objectFit='cover' alt="project image"/>
                                    </div>
                                    <div className="px-5 py-5 flex flex-col flex-1">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <p className="text-xs 500:text-sm mt-3">{project.description}</p>
                                            {
                                                (project.skills.length > 0) &&
                                                <>
                                                    <h2 className="text-sm font-bold mt-3">Skills</h2>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {
                                                            project.skills.slice(0, 4).map((skill)=>(
                                                                <div className="rounded-2xl bg-primary/10 backdrop-blur-sm ring-1 ring-primary/20 px-2 py-1 text-xs transition-all duration-300 hover:bg-primary/20" key={`${skill} ${project.title}`}>
                                                                    {skill}
                                                                </div>
                                                            ))
                                                        }
                                                        {project.skills.length > 4 && (
                                                            <div className="rounded-2xl bg-primary/10 backdrop-blur-sm ring-1 ring-primary/20 px-2 py-1 text-xs">
                                                                +{project.skills.length - 4}
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <div className="mt-4">
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
                            ))
                        }
                    </div>
                    
                    {/* View All Button - only show on home page */}
                    {!showAll && (
                        <div className="relative z-10 flex justify-center mt-12">
                            <Link href="/projects">
                                <Button
                                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-secondary font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border-0"
                                    icon={<FaArrowRight className="ml-2" />}
                                    title="View All Projects" label="View All Projects"/>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Projects;