import { motion } from "framer-motion";
import React, {
  cloneElement,
  forwardRef,
  MutableRefObject,
  useEffect,
  useState,
} from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiGatsby,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiSass,
  SiGithub,
  SiRedux,
  SiExpo,
  SiFigma,
  SiNetlify,
  SiContentful,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { GradientIcon } from "./GradientIcon";

interface Props {}

const toolkit = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "React-Native", icon: <SiReact /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "Gatsby", icon: <SiGatsby /> },
  { name: "NodeJS", icon: <SiNodedotjs /> },
  { name: "Tailwind-CSS", icon: <SiTailwindcss /> },
  { name: "Sass/Scss", icon: <SiSass /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Contentful", icon: <SiContentful /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git/Github", icon: <SiGithub /> },
];

export const About = forwardRef(
  (props: Props, ref: MutableRefObject<HTMLDivElement>) => {
    const [inViewRef, inView] = useInView();
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (inView) {
        setShow(true);
      }
    }, [inView]);

    return (
      <div ref={ref} className="min-h-screen flex flex-col justify-center">
        <div ref={inViewRef}>
          {show && (
            <motion.div
              animate={{ opacity: [0, 1] }}
              className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col"
            >
              <div className=" text-center sm:flex sm:flex-col sm:align-center">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white sm:text-center">
                  More About Me
                  <motion.div
                    animate={{ opacity: [0, 1], x: [-200, 0] }}
                    transition={{ delay: 1, duration: 0.2 }}
                    className="hidden text-5xl lg:flex relative justify-center font-extrabold text-white sm:text-center"
                  >
                    <span className="text-4xl lg:text-5xl">
                      (This Guy, Right Here)
                    </span>
                    <img
                      src="/svg/arrow.svg"
                      className="absolute h-[250px] right-[20%] top-[20px]"
                    />
                  </motion.div>
                </h2>
              </div>

              <div className="mt-4 lg:mt-16 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 text-white text-l md:text-xl font-medium order-2 lg:order-1 lg:mr-10">
                  <h3 className="font-extrabold text-center md:text-left text-3xl ">
                    The Personal Stuff
                  </h3>
                  <p className="mt-4 ">
                    Hello, I'm Paul. A developer from Essex, UK. I enjoy lots of
                    things, but do very few of them. Mostly I just code and hang
                    out with my wife, kid and dog. I learned to code by
                    accident, it was pretty cool. Before that I was writing
                    regular old prose. I still need to finish that novel...
                  </p>
                  <p className="mt-4">
                    I'm currently employed as a React Native developer at 2D
                    Media, in Witham, Essex, working on bespoke mobile
                    applications. My passion, however, remains the web.
                  </p>
                  <div className="mt-4 flex flex-col items-center md:items-start">
                    <h3 className="font-extrabold text-3xl text-left md:self-start">
                      Toolkit
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-4 mt-4">
                      {toolkit.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-start"
                        >
                          {cloneElement(item.icon, {
                            className:
                              "text-primary-400 w-[20px] h-[20px] md:w-[35px] md:h-[35px]",
                          })}
                          <p className="ml-4 text-l md:text-xl">
                            {item.name.replace("-", " ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <img
                  src="/svg/PD.svg"
                  alt="Paul Dolden"
                  className="h-[300px] md:h-[500px] lg:h-auto my-4 order-1 lg:order-2 mx-auto"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }
);
