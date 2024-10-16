import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: any }) => (
  <motion.ul
    className=" m-0 absolute top-[60px] right-0 w-56 p-[25px]"
    variants={variants}
  >
    {menu.map((v, i) => (
      <MenuItem toggle={() => toggle()} i={i} key={i} item={v} />
    ))}
  </motion.ul>
);

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "about-us",
  },
  // {
  //   title: "Team",
  //   href: "team",
  // },
  {
    title: "Contact us",
    href: "contact-us",
  },
];
