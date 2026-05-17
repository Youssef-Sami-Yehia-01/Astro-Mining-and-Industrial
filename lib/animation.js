export function getRevealVariants(direction = "up", distance = 40) {
  const hidden = { opacity: 0 };

  if (direction === "left") {
    hidden.x = -distance;
  } else if (direction === "right") {
    hidden.x = distance;
  } else if (direction === "down") {
    hidden.y = -distance;
  } else {
    hidden.y = distance;
  }

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
}

export const fadeUp = getRevealVariants("up", 40);

export const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16
    }
  }
};

export function getStaggerClass(index) {
  return `stagger-${Math.min(index, 7)}`;
}
