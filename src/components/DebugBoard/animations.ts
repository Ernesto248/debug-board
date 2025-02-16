export const containerVariants = {
  maximized: {
    y: 0,
    height: "auto",
    width: "500px",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 250 },
  },
  minimized: {
    y: "calc(100% - 48px)",
    height: "48px",
    width: "200px",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      delay: 0.2, // Agregado delay para una mejor experiencia inicial
    },
  },
};

export const contentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.3 },
      y: { type: "spring", damping: 15, stiffness: 200 },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: {
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  },
};

export const stackVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.2 } },
};

export const logItemVariants = {
  initial: { opacity: 0, y: -20, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 20 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    x: -100,
    transition: { duration: 0.2 },
  },
};

export const emptyContainerVariants = {
  initial: { opacity: 1, height: "auto" },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { delay: 0.2, duration: 0.3 },
      opacity: { duration: 0.2 },
    },
  },
};
