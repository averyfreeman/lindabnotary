import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

const Paragraph = ({ children, font, ...rest }) => {
  return (
    <Box>
      <HStack
        align={{ base: 'flex-start', lg: 'center' }}
        direction="row"
        justify={{ base: 'flex-start', lg: 'center' }}
        ml={{ base: 5, md: 8, lg: 0 }}
        my={5}
        p={0}
      >
        <Box
          className={font}
          maxW="80vw"
          textAlign="justify"
          overflowWrap="normal"
          wordBreak="keep-all"
          {...rest}
        >
          {children}
        </Box>
      </HStack>
    </Box>
  );
};

export default Paragraph;
