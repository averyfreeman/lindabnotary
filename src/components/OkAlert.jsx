import React, { Fragment } from 'react';
import { Alert, AlertDescription, CloseButton } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeScaleYWrapper from './FadeScaleYWrapper';

const OkAlert = props => {
  return (
    <Fragment>
      <AnimatePresence key={props.errorKey}>
        <FadeScaleYWrapper>
          <Alert
            // alignSelf={{ base: 'flex-start', sm: 'center' }}
            borderRadius="lg"
            fontSize={{ base: 'lg', md: 'xl' }}
            // my={2}
            // w={{ base: '18rem', md: '24rem' }}
            {...props}
          >
            <FontAwesomeIcon
              color={props.iconColor}
              icon={props.icon}
              size={props.size}
            />
            <AlertDescription ml={3}>{props.desc || 'OK!'}</AlertDescription>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={props.handleIsVisible}
            />
          </Alert>
        </FadeScaleYWrapper>
      </AnimatePresence>
    </Fragment>
  );
};

export default OkAlert;
