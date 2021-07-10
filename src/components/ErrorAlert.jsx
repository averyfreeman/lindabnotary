import React, { Fragment } from 'react';
import { Alert, AlertDescription, CloseButton } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeScaleYWrapper from './FadeScaleYWrapper';

const ErrorAlert = props => {
  return (
    <Fragment>
      <AnimatePresence key={props.errorKey}>
        <FadeScaleYWrapper duration={0.3}>
          <Alert
            borderRadius="lg"
            fontSize={{ base: 'lg', md: 'xl' }}
            my={2}
            {...props}
          >
            <FontAwesomeIcon
              color={props.iconColor}
              icon={props.icon}
              size={props.size}
            />
            <AlertDescription ml={3}>{props.errorText}</AlertDescription>
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

export default ErrorAlert;
