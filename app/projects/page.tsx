'use client'
import Projects from "../_sections/projects/projects";
import ParticleBackground from "@/components/particles/ParticleBackground";
import GeometricShapes from "@/components/geometric/GeometricShapes";
import AnimatedGrid from "@/components/grid/AnimatedGrid";

export default function ProjectsPage() {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-primary/5 dark:from-darkprimary dark:via-darkprimary dark:to-primary/10"></div>
      <AnimatedGrid />
      <ParticleBackground 
        particleCount={30} colors={['#9004ef', '#ffffff40', '#f0f0f040']} scrollMultiplier={0.3}/>
      <GeometricShapes />
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex justify-center items-center px-[5%] overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="text-2xl 300:text-3xl 350:text-4xl 750:text-5xl 1000:text-6xl font-bold text-[black] dark:text-[white] mb-4">
            All Projects
          </h1>
          <p className="text-lg 300:text-xl text-gray-600 dark:text-secondary max-w-2xl mx-auto">
            Explore my complete portfolio of web applications, from enterprise solutions to creative landing pages.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <Projects showAll={true} />
    </div>
  );
}