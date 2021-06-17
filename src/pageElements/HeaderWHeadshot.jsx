import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

const HeaderWHeadshot = ({ children, font, ...rest }) => {
  return (
    <Box>
      <Image
        src="/linda-b-cropped.jpg"
        borderRadius="full"
        position="relative"
        left={{ base: '36vw', sm: '40vw', md: '3.2%', lg: '4%' }}
        top={{ base: '1.4rem', sm: '1.2rem', md: '6rem' }}
        height={{
          base: '5rem',
          sm: '6rem',
          md: '9rem',
          lg: '9.375rem',
          xl: '12.5rem',
        }}
        width={{
          base: '5rem',
          sm: '6rem',
          md: '9rem',
          lg: '9.375rem',
          xl: '12.5rem',
        }}
        zIndex={1}
        border="3px solid grey"
        boxShadow="2px 2px 4px black"
      />
      <Heading
        as="h1"
        id="title"
        fontSize={{ base: '3xl', md: '5xl' }}
        my={4}
        className={font}
        {...rest}
      >
        Your Next Notary
      </Heading>
    </Box>
  );
};

export default HeaderWHeadshot;
