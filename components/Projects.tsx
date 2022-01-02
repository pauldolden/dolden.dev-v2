import { motion } from "framer-motion";
import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import projects from "@/data/projects.json";
import { ProjectCard } from "./ProjectCard";

interface Props {}

export const Projects = forwardRef(
  (props: Props, ref: MutableRefObject<HTMLDivElement>) => {
    const [inViewRef, inView] = useInView();
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (inView) {
        setShow(true);
      }
    }, [inView]);

    return (
      <>
        <img src="/svg/slope.svg" alt="slope" />
        <div ref={ref} />
        <div
          className="bg-pinkop opacity min-h-[90vh] flex flex-col justify-center"
          ref={inViewRef}
        >
          <div className="flex flex-col justify-center flex-1" ref={inViewRef}>
            {show && (
              <motion.div
                animate={{ opacity: [0, 1] }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <div className="sm:flex sm:flex-col sm:align-center">
                  <h1 className="text-4xl md:text-6xl text-center font-extrabold text-white sm:text-center">
                    Stuff I've Built
                  </h1>
                  <p className="mt-5 text-xl text-center text-white sm:text-center">
                    Here's some of the things I've been working on recently, or
                    just stuff that I'm proud of.
                  </p>
                </div>

                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                  {projects.map((project) => (
                    <ProjectCard key={project.name} data={project} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <img src="/svg/slope2.svg" alt="slope" />
      </>
    );
  }
);
