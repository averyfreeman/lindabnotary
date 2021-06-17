import React from 'react';
import { Divider, useColorModeValue } from '@chakra-ui/react';

const LightDivider = (props) => {
  const altLightBgColor = useColorModeValue('gray.500', 'gray.700');
  return (
    <Divider
      borderColor={altLightBgColor}
      borderWidth="3px"
      w="92vw"
      {...props}
    />
  );
};

export default LightDivider;
