import React from 'react';
import {
  Button,
  Container,
  Square,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
const ExternalLinkButton = ({ colorScheme, icon, label, to, ...rest }) => {
  const lightBgColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Button
      as="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      textDecoration="none"
      colorScheme={colorScheme}
      h="4rem"
      w="14rem"
      fontSize="lg"
      {...rest}
    >
      <Square w={10} h={10} bg={lightBgColor} mr={0} borderRadius="lg">
        {icon}
      </Square>
      <Container>
        <Text>{label}</Text>
      </Container>
    </Button>
  );
};

export default ExternalLinkButton;
