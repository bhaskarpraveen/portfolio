// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-16">
    <Hero />
    <About />
    <Experience />
    <Skills />
  </main>
  );
}
