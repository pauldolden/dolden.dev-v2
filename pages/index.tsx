import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-20 bg-transparent">
      <Hero triggerScroll={() => projectsRef?.current?.scrollIntoView(true)} />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
    </div>
  );
}
