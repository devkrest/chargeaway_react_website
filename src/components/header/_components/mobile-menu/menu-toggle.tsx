import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    style={{
      outline: "none",
      border: "none",
      cursor: "pointer",
      position: "absolute",
      top: "15px",
      right: "-2px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "transparent",
      WebkitUserSelect: "none",
      msUserSelect: "none",
      
    }}
    onClick={toggle}
  >
    <svg
      width="18"
      height="20"
      viewBox="0 0 23 23"
      className="fill-current text-white stroke-white"
    >
      <Path
        stroke="white"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        stroke="white"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke="white"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
