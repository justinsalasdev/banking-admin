export const formVars = {
  hidden: {
    opacity: 0,
    scale: 0.1
  },
  shown: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};
