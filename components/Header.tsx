import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GradientIcon } from "@/components/GradientIcon";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

interface Props {}

const navigation = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "cv",
    link: "/cv",
  },
];

const social = [
  {
    name: "twitter",
    icon: <FiTwitter size={35} />,
    link: "https://twitter.com/pauldolden",
  },
  {
    name: "github",
    icon: <FiGithub size={35} />,
    link: "https://github.com/pauldolden",
  },
  {
    name: "linkedin",
    icon: <FiLinkedin size={35} />,
    link: "https://linkedin.com/in/pauldolden",
  },
  {
    name: "email",
    icon: <FiMail size={35} />,
    link: "mailto:paul@dolden.dev",
  },
];

export const Header = (props: Props) => {
  return (
    <header className="lg:container mx-auto py-5">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-14">
          <div className="flex gap-6 items-center">
            {navigation.map((item) => (
              <Link href={item.link} key={item.name}>
                <motion.p
                  whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
                  className="font-extrabold font-logo text-transparent text-2xl bg-clip-text bg-gradient-to-r from-tertiary-400 to-primary-400 hover:bg-gradient-to-r hover:from-tertiary-100 hover:to-primary-100 cursor-pointer"
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            {social.map((item) => (
              <a href={item.link} key={item.link}>
                <GradientIcon
                  name={item.name}
                  icon={item.icon}
                  from="#D70277"
                  to="#55FFFF"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
