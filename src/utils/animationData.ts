export const declare_animation = {
  initial: "initial",
  animate: "animate",
  // exit: "exit",
};

export const container_stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
// used to show text
export const content_variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    ease: [0.5, 0.71, 1, 1.5],
  },
};

export const cardVariants = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const stagger_properties = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, amount: 0.4 },
  variants: { container_stagger },
};

export const navAnimation = {
  initial: { opacity: 0, y: -180 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: "easeInOut", duration: 0.6 },
};
