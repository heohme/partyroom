export const cardAnimations = {
  draw: {
    initial: { scale: 0, y: -100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    transition: { duration: 0.3 }
  },
  play: {
    initial: { scale: 1 },
    animate: { scale: 1.2 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.2 }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  }
}

export const effectAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 }
  }
}
