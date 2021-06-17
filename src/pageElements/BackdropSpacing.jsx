import React from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';

const BackdropSpacing = ({ children, ...rest }) => {
  const rgbaBgColor = useColorModeValue(
    'rgba(113,128,150,0.5)',
    'rgba(26,32,44,0.7)',
  );
  return (
    <Box bg={rgbaBgColor}>
      <VStack spacing={8} minH="100vh" {...rest}>
        {children}
      </VStack>
    </Box>
  );
};

export default BackdropSpacing;
