import React from 'react';
import { motion } from 'framer-motion';

const PageChangeAnimator = ({ children, duration, ...rest }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        delayChildren: 1,
        duration: duration,
        // duration: 0.5,
        ease: 'easeInOut',
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
