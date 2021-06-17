import React from 'react';
import { Divider, useColorModeValue } from '@chakra-ui/react';

const LightDivider = (props) => {
  const lightBgColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <Divider borderColor={lightBgColor} borderWidth="3px" w="92vw" {...props} />
  );
};

export default LightDivider;
