// example:
// https://github.com/Darth-Knoppix/react-router-page-transitions/blob/master/src/App.js

// faster
// export const fade = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
//     opacity: 1,
//   },
// };

// orig:
export const fade = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
  },
};

export const scale = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
  },
};

export const flip = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
  },
};

export const spin = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
    rotate: 0,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: -720,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
    rotate: 720,
  },
};

// export const pageStyle2 = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

export const pageStyle = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// export const pageTransition = {
//   type: 'tween',
//   ease: 'anticipate',
//   duration: 1,
// };

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.2,
};

// orig pageStyle
// export const pageStyle = {
//   position: 'relative',
// };
