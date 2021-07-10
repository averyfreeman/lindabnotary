import React from 'react';
import { motion } from 'framer-motion';

const FadeScaleYWrapper = ({ children, duration, key, ...rest }) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        scaleY: 1,
        // otherprop
      }}
      exit={{
        opacity: 0,
        scaleY: 0,
        // otherprop
      }}
      key={key}
      initial={{
        opacity: 0,
        scaleY: 0,
        // otherprop
      }}
      transition={{
        duration: duration,
        ease: 'ease',
        opacity: 1,
        scaleY: 1,
        type: 'tween',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeScaleYWrapper;
