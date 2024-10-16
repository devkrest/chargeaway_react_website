export function fadeIn  (
  direction: "up" | "down" | "right" | "left",
  delay: number
)  {
  return {
    hidden: {
      y: direction == "up" ? 80 : direction == "down" ? -80 : 0,
      x: direction == "right" ? -80 : direction == "left" ? 80 : 0,
      opacity: 0.6,
      transition: {
        type: "spring",
        duration: 1.5,
        stiffness:60,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show:{
        y: 0,
        x:  0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.4,
          stiffness:60,
          delay: delay,
          ease: [0.25, 0.65, 0.45, 0.75],
        }, 
    }
  };
};
