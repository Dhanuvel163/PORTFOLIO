import AnimatedGrid from "@/components/grid/AnimatedGrid";
import About from "./_sections/about/about";
import Intro from "./_sections/intro/intro";
import Projects from "./_sections/projects/projects";
import ParticleBackground from "@/components/particles/ParticleBackground";
import GeometricShapes from "@/components/geometric/GeometricShapes";

export default function Home() {
  return (
    <main className="relative">
      {/* Grid background */}
      {/* <AnimatedGrid /> */}
      {/* Particle system */}
      {/* <ParticleBackground 
          particleCount={25} 
          colors={['#9004ef', '#f9f9f940', '#00000020']}
          scrollMultiplier={0.6}
      /> */}
      {/* Geometric shapes */}
      {/* <GeometricShapes /> */}
      <Intro/>
      <About/>
      <Projects/>
    </main>
  )
}
