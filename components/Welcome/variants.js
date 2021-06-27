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
      staggerChildren: 3
    }
  }
};

export const reqsVars = {
  shown: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  }
};

export const reqVars = {
  hidden: {
    opacity: 0,
    y: 10
  },
  shown: {
    opacity: 1,
    y: 0
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
  hidden: {
    scale: 0,
    background: "rgba(254, 254, 254, 0.7)",
    color: "rgba(0,0,0,.5)"
  },
  shown: i => ({
    scale: 1,
    background: "rgba(254, 254, 254, 0.9)",
    color: colors[i],
    transition: {
      ease: "easeInOut"
    }
  })
};
