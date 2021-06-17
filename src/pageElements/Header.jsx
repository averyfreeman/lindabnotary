import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = ({ children, font, ...rest }) => {
  return (
    <Box>
      <Heading
        as="h1"
        id="title"
        fontSize={{ base: '3xl', md: '5xl' }}
        my={5}
        className={font}
        {...rest}
      >
        {children}
      </Heading>
    </Box>
  );
};

export default Header;
