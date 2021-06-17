import React from 'react';
import { Alert, AlertDescription } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ErrorAlert = props => {
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
      key={props.errorKey}
      initial={{
        opacity: 0,
        scaleY: 0,
        // otherprop
      }}
      transition={{
        opacity: 1,
        scaleY: 1,
        ease: 'easeInOut',
        fade: 1,
        duration: 1,
      }}
    >
      <Alert
        alignSelf={{ base: 'center', sm: 'flex-start' }}
        borderRadius="lg"
        minW="22rem"
        my={2}
      >
        <FontAwesomeIcon
          color={props.iconColor}
          icon={props.icon}
          size={props.size}
        />
        <AlertDescription ml={3}>{props.desc}</AlertDescription>
        {/* <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={props.onClose}
        /> */}
      </Alert>
    </motion.div>
  );
};

export default ErrorAlert;
