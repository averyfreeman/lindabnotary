import React from 'react';
import { motion } from 'framer-motion';

const PageChangeAnimator = ({ children, duration, ...rest }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // scaleX: 0.5,
        // scaleX: 2,
        x: '-30vw',
      }}
      animate={{
        opacity: 1,
        scaleX: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        // scaleX: 0.5,
        // scaleX: 2,
        x: '30vw',
      }}
      transition={{
        delayChildren: 1,
        duration: duration,
        // duration: 0.5,
        ease: 'linear',
        staggerChildren: 0.2,
        type: 'tween',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default PageChangeAnimator;
