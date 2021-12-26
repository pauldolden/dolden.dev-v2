import { motion } from "framer-motion";
import React, { ForwardedRef, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import projects from "@/data/projects.json";
import { ProjectCard } from "./ProjectCard";

interface Props {}

export const Projects = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  const [inViewRef, inView] = useInView();

  return (
    <>
      <div
        className="w-screen h-2 bg-gradient-to-r from-secondary-400 to-tertiary-400 "
        ref={ref}
      />

      <div
        className="bg-gradient-to-r from-primary-400 to-secondary-400 min-h-[90vh] shadow-inner flex flex-col justify-center"
        ref={inViewRef}
      >
        {inView && (
          <motion.div
            animate={{ opacity: [0, 1] }}
            className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
          >
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-7xl font-extrabold text-white sm:text-center">
                Projects
              </h1>
              <p className="mt-5 text-xl text-white sm:text-center">
                Here's some of the things I've been working on recently, or just
                stuff that I'm proud of.
              </p>
            </div>

            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.name} data={project} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <div className="w-screen h-2 bg-gradient-to-r from-tertiary-400 to-secondary-400" />
    </>
  );
});
