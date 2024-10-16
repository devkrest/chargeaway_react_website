import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  i,
  item,
  toggle,
}: {
  i: any;
  item: any;
  toggle: any;
}) => {
  return (
    <motion.li
      key={i}
      className="m-0 p-5 pb-1"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link onClick={toggle} to={item.href} className="text-white">
        {item.title}
      </Link>
    </motion.li>
  );
};
