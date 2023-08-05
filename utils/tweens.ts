import { gsap } from "gsap";

export const animateChildren = (
    target:Element | undefined | HTMLDivElement | null, tweens:gsap.core.Tween[], 
    options:gsap.TweenVars, isScrollTrigger:boolean
) => {
    const children:number = target?.children.length || 0;
    for (let i = 0; i < children; i++) {
        const child = target?.children[i];
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