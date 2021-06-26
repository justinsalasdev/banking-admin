export const blockVars = {
  hidden: {
    opacity: 0,
    x: -20
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  }
};

export const sectionVars = {
  hidden: {
    opacity: 0,
    y: 10
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren"
    }
  }
};

const colors = ["#000", "#e82456", "#f5b606", "#000"];

export const techVars = {
  loop: i => ({
    y: [0, -10, 0],
    "border-radius": [".2rem", "1rem", ".2rem"],
    color: ["rgba(0,0,0,.5)", colors[i], "rgba(0,0,0,.5)"],
    background: [
      "rgba(254, 254, 254, 0.4)",
      "rgba(254, 254, 254, 0.9)",
      "rgba(254, 254, 254, 0.4)"
    ],
    transition: {
      delay: i * 1,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeInOut"
    }
  })
};
