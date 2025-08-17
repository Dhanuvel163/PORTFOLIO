import About from "./_sections/about/about";
import Intro from "./_sections/intro/intro";
import Projects from "./_sections/projects/projects";
import Products from "./_sections/products/products";

export default function Home() {
  return (
    <div className="relative">
      <Intro/>
      <About/>
      <Projects showAll={false}/>
      <Products/>
    </div>
  )
}