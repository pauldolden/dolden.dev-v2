import React, { Dispatch, SetStateAction } from "react";
import { Logo } from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "./Menu";
import { useInView } from "react-intersection-observer";
import { BiArrowToTop } from "react-icons/bi";

interface Props {
  setToggleMenu?: Dispatch<SetStateAction<boolean>>;
}

export const Header = () => {
  const [inViewRef, inView] = useInView();
  return (
    <>
      <AnimatePresence>
        {!inView && (
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            className="fixed text-whie top-7 right-7"
          >
            <BiArrowToTop
              size={50}
              className="text-tertiary-400 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <header ref={inViewRef} className="mx-auto py-5 px-10 min-h-[10vh]">
        <Logo />
        <Menu />
      </header>
    </>
  );
};
