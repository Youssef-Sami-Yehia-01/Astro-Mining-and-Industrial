"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { getRevealVariants } from "@/lib/animation";

export default function Reveal({
  amount = 0.25,
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  once = true
}) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const variants = getRevealVariants(direction, distance);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{
        ...variants.visible.transition,
        delay
      }}
      variants={variants}
      viewport={{ once, amount }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
