import React from 'react';
import { Alert, AlertDescription } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeScaleYWrapper from './FadeScaleYWrapper';

const OkAlert = props => {
  return (
    <FadeScaleYWrapper duration={1} key={props.errorKey}>
      <Alert
        alignSelf={{ base: 'center', sm: 'flex-start' }}
        borderRadius="lg"
        minW="22rem"
        my={2}
        // maxW={{ base: '20rem', sm: '29.5rem' }}
      >
        <FontAwesomeIcon
          color={props.iconColor}
          icon={props.icon}
          size={props.size}
        />
        <AlertDescription ml={3}>{props.desc || 'OK!'}</AlertDescription>
      </Alert>
    </FadeScaleYWrapper>
  );
};

export default OkAlert;
