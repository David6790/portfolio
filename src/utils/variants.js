export const variantPersonnal = {
  initial: {
    opacity: 0,

    x: -200,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
    x: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
    },
    x: -200,
  },
};
