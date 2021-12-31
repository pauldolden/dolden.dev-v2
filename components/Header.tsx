import React, { Dispatch, SetStateAction } from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GradientIcon } from "@/components/GradientIcon";
import { Logo } from "@/components/Logo";
import { motion, useCycle } from "framer-motion";

const BASE_DELAY = 0.2;

interface Props {
  setToggleMenu?: Dispatch<SetStateAction<boolean>>;
}

const navigation = [
  {
    name: "blog",
    link: "https://blog.dolden.dev",
    delay: BASE_DELAY + 1.5,
  },
  {
    name: "cv",
    link: "https://drive.google.com/file/d/1HVJuZaHFwvMxOht5iS50hmRIjDvsIpEc/view?usp=sharing",
    delay: BASE_DELAY + 1.2,
  },
];

const social = [
  {
    name: "twitter",
    icon: <FiTwitter size={25} />,
    link: "https://twitter.com/pauldolden",
    delay: BASE_DELAY + 0.9,
  },
  {
    name: "github",
    icon: <FiGithub size={25} />,
    link: "https://github.com/pauldolden",
    delay: BASE_DELAY + 0.6,
  },
  {
    name: "linkedin",
    icon: <FiLinkedin size={25} />,
    link: "https://linkedin.com/in/pauldolden",
    delay: BASE_DELAY + 0.3,
  },
  // {
  //   name: "email",
  //   icon: <FiMail size={35} />,
  //   link: "mailto:paul@dolden.dev",
  //   delay: BASE_DELAY,
  // },
];

export const Header = ({ setToggleMenu }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <header className="lg:container mx-auto py-5 px-10 min-h-[10vh]">
      <div className="flex gap-4 items-center md:gap-10">
        <div className="flex flex-1 justify-between self-stretch gap-10">
          <motion.div
            className="flex flex-1 items-center justify-between"
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{
              delay: BASE_DELAY + 1.8,
              default: { duration: 0.1 },
            }}
          >
            <Logo />
            <button
              className="space-y-2 cursor-pointer md:hidden"
              onClick={() => setToggleMenu((state) => !state)}
            >
              <span className="block w-10 h-1 bg-gradient-to-r from-tertiary-400 to-primary-400"></span>
              <span className="block w-10 h-1 bg-gradient-to-r from-tertiary-400 to-primary-400"></span>
              <span className="block w-7 h-1 bg-gradient-to-r from-tertiary-400 to-primary-400"></span>
            </button>
          </motion.div>
          <div className="hidden md:flex gap-14">
            <div className="flex gap-6 items-center">
              {navigation.map((item) => (
                <a href={item.link} key={item.name} target="_blank">
                  <motion.p
                    animate={{ x: [-200, 0], opacity: [0, 1] }}
                    transition={{
                      delay: item.delay,
                      default: { duration: 0.1 },
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
        <div className="hidden md:flex gap-6 items-center">
          {social.map((item) => (
            <a href={item.link} key={item.link} target="_blank">
              <motion.div
                animate={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{
                  delay: item.delay,
                  default: { duration: 0.1 },
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
