import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GradientIcon } from "@/components/GradientIcon";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

const BASE_DELAY = 0.2;

interface Props {}

const navigation = [
  {
    name: "blog",
    link: "https://blog.dolden.dev",
    delay: BASE_DELAY + 2.5,
  },
  {
    name: "cv",
    link: "https://docs.google.com/document/d/1KfwUoLRyA_zPCazuq7SEW12BLk6KsulDYFi0qClGZSQ/edit",
    delay: BASE_DELAY + 2,
  },
];

const social = [
  {
    name: "twitter",
    icon: <FiTwitter size={30} />,
    link: "https://twitter.com/pauldolden",
    delay: BASE_DELAY + 1.5,
  },
  {
    name: "github",
    icon: <FiGithub size={30} />,
    link: "https://github.com/pauldolden",
    delay: BASE_DELAY + 1,
  },
  {
    name: "linkedin",
    icon: <FiLinkedin size={30} />,
    link: "https://linkedin.com/in/pauldolden",
    delay: BASE_DELAY + 0.5,
  },
  // {
  //   name: "email",
  //   icon: <FiMail size={35} />,
  //   link: "mailto:paul@dolden.dev",
  //   delay: BASE_DELAY,
  // },
];

export const Header = (props: Props) => {
  return (
    <header className="lg:container mx-auto py-5 min-h-[10vh]">
      <div className="flex flex-col md:flex-row gap-4 items-center md:gap-10">
        <div className="flex flex-1 justify-between self-stretch">
          <motion.div
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{
              delay: BASE_DELAY + 3,
              default: { duration: 0.2 },
            }}
          >
            <Logo />
          </motion.div>
          <div className="flex gap-14">
            <div className="flex gap-6 items-center">
              {navigation.map((item) => (
                <a href={item.link} key={item.name} target="_blank">
                  <motion.p
                    animate={{ x: [-200, 0], opacity: [0, 1] }}
                    transition={{
                      delay: item.delay,
                      default: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
                    className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-tertiary-400 to-primary-400 cursor-pointer"
                  >
                    {item.name}
                  </motion.p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          {social.map((item) => (
            <a href={item.link} key={item.link} target="_blank">
              <motion.div
                animate={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{
                  delay: item.delay,
                  default: { duration: 0.2 },
                }}
              >
                <GradientIcon
                  name={item.name}
                  icon={item.icon}
                  from="#D70277"
                  to="#55FFFF"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
