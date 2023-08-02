"use client"
import { ReactLenis } from '@studio-freight/react-lenis'

function Lenis({children}:{children:React.ReactNode}){
    return(
        <ReactLenis root options={{ duration : 0.65 }}>
            {children}
        </ReactLenis>
    )
}

export default Lenis;