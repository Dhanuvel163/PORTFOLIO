import { gsap } from "gsap";
import { RefObject } from "react"

export const animateChildren = (
    target:RefObject<HTMLDivElement>, tweens:gsap.core.Tween[], 
    options:gsap.TweenVars, isScrollTrigger:boolean
) => {
    const children:number = target.current?.children.length || 0;
    for (let i = 0; i < children; i++) {
        const child = target.current?.children[i];
        if(isScrollTrigger){
            options = {
                ...options,
                scrollTrigger:{
                    ...(options.scrollTrigger || {}),
                    trigger: child,
                }
            }
        }
        tweens.push(
            gsap.from([child], options)
        )
    }
}