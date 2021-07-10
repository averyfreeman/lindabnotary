import React from 'react';
import { motion } from 'framer-motion';

const PageChangeAnimator = ({ children, ...rest }) => {
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
        delayChildren: 0.2,
        duration: 0.2,
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
