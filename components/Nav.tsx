import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Nav = ({ isOpen }) => (
  <motion.ul variants={variants} className="menu-ul">
    {navigation.map((item, i) => (
      <MenuItem isOpen={isOpen} i={i} key={i} data={item} />
    ))}
  </motion.ul>
);

const navigation = [
  {
    name: "blog",
    link: "https://blog.dolden.dev",
  },
  {
    name: "cv",
    link: "https://drive.google.com/file/d/1HVJuZaHFwvMxOht5iS50hmRIjDvsIpEc/view?usp=sharing",
  },
  {
    name: "twitter",
    icon: <FiTwitter size={25} />,
    link: "https://twitter.com/pauldolden",
  },
  {
    name: "github",
    icon: <FiGithub size={25} />,
    link: "https://github.com/pauldolden",
  },
  {
    name: "linkedin",
    icon: <FiLinkedin size={25} />,
    link: "https://linkedin.com/in/pauldolden",
  },
  {
    name: "email",
    icon: <FiMail size={35} />,
    link: "mailto:paul@dolden.dev",
  },
];
