export const tableVars = {
  hidden: {
    opacity: 0,
    y: -20
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren"
    }
  }
};

export const listVars = {
  hidden: {
    opacity: 0,
    x: -20
  },
  shown: {
    opacity: 1,
    x: 0
  }
};

export const itemVars = {
  tap: {
    x: 10
  }
};
