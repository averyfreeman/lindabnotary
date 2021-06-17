import React from 'react';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const RequestArrow = ({ bgColor, children, iconRotate, ...rest }) => {
  return (
    <Stack bg={bgColor} isInline {...rest}>
      <Text>{children}</Text>
      <FontAwesomeIcon
        color="rgba(29, 110, 186, 1)"
        icon={faArrowAltCircleRight}
        size="2x"
        transform={{ rotate: iconRotate }}
      />
    </Stack>
  );
};

export default RequestArrow;
