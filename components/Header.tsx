import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GradientIcon } from "@/components/GradientIcon";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

interface Props {}

const navigation = [
  {
    name: "blog",
    link: "/blog",
    delay: 6,
  },
  {
    name: "cv",
    link: "/cv",
    delay: 5,
  },
];

const social = [
  {
    name: "twitter",
    icon: <FiTwitter size={35} />,
    link: "https://twitter.com/pauldolden",
    delay: 4,
  },
  {
    name: "github",
    icon: <FiGithub size={35} />,
    link: "https://github.com/pauldolden",
    delay: 3,
  },
  {
    name: "linkedin",
    icon: <FiLinkedin size={35} />,
    link: "https://linkedin.com/in/pauldolden",
    delay: 2,
  },
  {
    name: "email",
    icon: <FiMail size={35} />,
    link: "mailto:paul@dolden.dev",
    delay: 1,
  },
];

export const Header = (props: Props) => {
  return (
    <header className="lg:container mx-auto py-5 min-h-[10vh]">
      <div className="flex items-center justify-between">
        <motion.div
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{
            delay: 7 / 6,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 0.2 },
          }}
        >
          <Logo />
        </motion.div>
        <div className="flex gap-14">
          <div className="flex gap-6 items-center">
            {navigation.map((item) => (
              <Link href={item.link} key={item.name}>
                <motion.p
                  animate={{ x: [-200, 0], opacity: [0, 1] }}
                  transition={{
                    delay: item.delay / 6,
                    x: { type: "spring", stiffness: 100 },
                    default: { duration: 0.5 },
                  }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
                  className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-tertiary-400 to-primary-400 cursor-pointer"
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            {social.map((item) => (
              <a href={item.link} key={item.link}>
                <motion.div
                  animate={{ x: [-200, 0], opacity: [0, 1] }}
                  transition={{
                    delay: item.delay / 6,
                    x: { type: "spring", stiffness: 100 },
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
      </div>
    </header>
  );
};
