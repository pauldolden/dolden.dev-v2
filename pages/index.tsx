import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const blogPreviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-20 bg-transparent">
      <Hero
        triggerScrollProjects={() => projectsRef?.current?.scrollIntoView()}
        triggerScrollAbout={() => aboutRef?.current?.scrollIntoView()}
      />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
      <BlogPreview ref={blogPreviewRef} />
    </div>
  );
}
