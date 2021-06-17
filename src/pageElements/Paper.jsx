import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Paper = ({ children, ...rest }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.800');
  return (
    <Box w="95vw" mt="4rem" bgColor={bgColor} {...rest}>
      {children}
    </Box>
  );
};

export default Paper;
