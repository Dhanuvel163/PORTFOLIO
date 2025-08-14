import { animateChildren } from "@/utils/tweens"
import { RefObject } from "react"
import { Power3 } from "gsap"

export function animateAbout(
    gsap:GSAP,tweens:gsap.core.Tween[],containerRef:RefObject<HTMLDivElement>,
    skillsRef:RefObject<HTMLDivElement>,iconsRef:RefObject<HTMLDivElement>
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
                duration: 0.5,
                ease: Power3.easeOut,
            }
        )
    )

    //Skill card animation
    animateChildren(
        skillsRef.current, tweens,
        {
            x:'-100px',
            opacity: 0,
            scrollTrigger: {
                start: "top 90%",
                end: "bottom 98%",
            },
            duration: 0.2,
            ease: Power3.easeInOut,
        },
        true
    )
    
    //Icon card animation
    animateChildren(
        iconsRef.current, tweens,
        {
            x:'100px',
            opacity: 0,
            scrollTrigger: {
                start: "top 90%",
                end: "bottom 98%",
            },
            duration: 0.2,
            ease: Power3.easeInOut,
        },
        true
    )
}