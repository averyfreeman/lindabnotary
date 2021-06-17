import React from 'react';
import { motion } from 'framer-motion';

const FadeWrapper = ({ children, duration, key, ...rest }) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      key={key}
      initial={{
        opacity: 0,
      }}
      transition={{
        opacity: 1,
        ease: 'easeIn',
        fade: 1,
        duration: duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeWrapper;
