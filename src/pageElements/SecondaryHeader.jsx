import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';

const SecondaryHeader = ({ children, font, ...rest }) => {
  return (
    <HStack ml={8} my={5} p={0}>
      <Box>
        <Heading
          as="h4"
          id="background"
          fontSize={{ base: '2xl', md: '3xl' }}
          className={font}
          {...rest}
        >
          {children}
        </Heading>
      </Box>
    </HStack>
  );
};

export default SecondaryHeader;
