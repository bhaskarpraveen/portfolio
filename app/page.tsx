// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
