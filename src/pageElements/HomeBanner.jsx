import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomeBanner = ({
  bgColor,
  className,
  color,
  subColor,
  title,
  subTitle,
  ...rest
}) => {
  return (
    <Box
      mb="0"
      px="3"
      py="7"
      maxW="95vw"
      minW="85vw"
      bgColor={bgColor}
      borderWidth="3px"
      borderRadius="lg"
      textShadow="5px 5px 8px black"
      overflow="hidden"
    >
      <Box m="0">
        <Heading
          m="0"
          mb="0"
          as="h1"
          size="xl"
          fontSize={{ base: '5xl', sm: '7xl', md: '8xl', xl: '9xl' }}
          color={color}
          fontWeight={700}
          className={className}
          {...rest}
        >
          {title}
          <Box>
            <Text color={subColor} as="i">
              {subTitle}
            </Text>
          </Box>
        </Heading>
      </Box>
    </Box>
  );
};

export default HomeBanner;
