import { animateChildren } from "@/utils/tweens"
import { RefObject } from "react"
import { Power3 } from "gsap"

export function animateProjects(
    gsap:GSAP,tweens:gsap.core.Tween[],containerRef:RefObject<HTMLDivElement>
){
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
                duration: 0.2,
                ease: Power3.easeOut,
            }
        )
    )

    //Skill card animation
    animateChildren(
        containerRef.current?.children[1], tweens,
        {
            x:'-100px',
            opacity: 0,
            scrollTrigger: {
                start: "top 90%",
                end: "bottom 98%",
            },
            duration: 1.1,
            ease: Power3.easeInOut,
        },
        true
    )
}