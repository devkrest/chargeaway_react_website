import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { cn } from "@/lib/utils";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 185px 39px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={cn("fixed top-0 right-0 w-56 bottom-0  z-50 md:hidden",
      !isOpen && "z-10")}
    
      
    >
      <motion.div
        className={cn("absolute top-0 right-0  w-56  bottom-0  bg-primary")}
        variants={sidebar}
      />
      {isOpen && <Navigation toggle={() => toggleOpen()} />}

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
