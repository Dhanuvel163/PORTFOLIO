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
        <section className="min-h-[100vh] py-20 flex justify-center items-center px-[5%] bg-[white] border-t border-[#eaeaea] border-solid dark:bg-darkprimary dark:border-[#E5E7EB6E]" id="projects">
            <div ref={containerRef}>
                <h2 className="text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-[2.5rem] font-bold  text-center text-[black] dark:text-[white]">Projects</h2>
                <div className="mt-6">
                    {
                        projectsData.map((project)=>(
                            <div className="flex justify-center" key={project.title}>
                                <div className="block 750:flex bg-[white] rounded-xl ring-1 ring-[rgb(51,65,85)]/[0.1] mt-3 shadow-sm relative hover:z-10 overflow-hidden max-w-none 1100:max-w-[80%] dark:bg-darksecondary dark:text-[white] dark:ring-[rgb(255,255,255)]/[0.3]">
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
                                                                <div className="rounded-2xl bg-[#cad5e394] ring-1 ring-[rgb(51,65,85)]/[0.1] px-2 py-1 text-xs 500:text-sm" key={`${skill} ${project.title}`}>
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
                                                        <Button label={action.label} icon={<FaEye/>} title={action.action}/>
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