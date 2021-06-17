import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const TagLine = ({
  bgOpacity,
  br,
  className,
  darkBg,
  fontSize,
  lightBg,
  children,
  ...rest
}) => {
  const bgColor = useColorModeValue(lightBg, darkBg);
  return (
    <Box as="span" bg={bgColor} borderRadius={br} opacity={bgOpacity} {...rest}>
      <Text className={className} fontSize={fontSize}>
        {children}
      </Text>
    </Box>
  );
};

export default TagLine;
