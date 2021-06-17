import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const Feature = ({ title, desc, icon, ...rest }) => {
  return (
    <Box
      p={3}
      m={1}
      shadow="md"
      border="3px solid #333"
      borderRadius="xl"
      bgColor="inherit"
      spacing="3"
      minW="xs"
      {...rest}
    >
      <HStack spacing="xs">
        <Wrap>
          <Box
            border="3px solid #333"
            borderRadius="xl"
            p={10}
            minH="xs"
            bgColor="none"
            d="flex"
            alignItems="center"
          >
            <WrapItem borderRadius="full">{icon}</WrapItem>
          </Box>
        </Wrap>
        <Box border="3px solid #333" borderRadius="xl" justifySelf="flex-end">
          <VStack
            minH="xs"
            spacing="md"
            justifyContent="center"
            alignItems="center"
            p="10"
          >
            {/* <Wrap>
              <WrapItem> */}
            <Heading fontSize="xl">{title}</Heading>
            {/* </WrapItem>
              <WrapItem> */}
            <Text mt={4}>{desc}</Text>
            {/* </WrapItem>
            </Wrap> */}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Feature;
