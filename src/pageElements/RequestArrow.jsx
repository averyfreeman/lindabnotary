import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const RequestArrow = ({ bgColor, children, iconRotate, ...rest }) => {
  return (
    <Stack
      align="center"
      bg={bgColor}
      direction="row"
      display="flex"
      justify="flex-end"
      fontSize={{ base: '0.9rem', md: '1.1rem' }}
      maxW={{ base: '60vw', sm: '70vw', md: '80vw', lg: '80vw' }}
      {...rest}
    >
      <Text>{children}</Text>
      <Box align="right">
        <FontAwesomeIcon
          color="#1d6eb9"
          icon={faArrowAltCircleRight}
          size="2x"
        />
      </Box>
    </Stack>
  );
};

export default RequestArrow;
