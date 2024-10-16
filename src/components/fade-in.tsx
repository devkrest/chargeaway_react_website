"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants/fade";

type Props = {
  direction?: "up" | "down" | "right" | "left";
  delay?: number;
  children?: React.ReactNode;
  className?: string;
};

function FadeInComponent({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      suppressHydrationWarning
      viewport={{ once: true, amount: 0.35 }}
      className={className}
    >
      {children}
      {/* <div className={className}> {children}</div> */}
    </motion.div>
  );
}

export default FadeInComponent;
