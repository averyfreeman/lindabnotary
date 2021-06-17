import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const HomeCard = ({ title, desc, href, icon, ...rest }) => {
  const bgColor = useColorModeValue('white', 'gray.600');
  const topBgColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box
      border="3px solid #333"
      borderRadius="xl"
      height={{ base: '10rem', md: '12rem', '2xl': '13rem' }}
      maxW={{ base: '90vw', sm: '80vw', md: '45vw', '2xl': '24vw' }}
      bgColor={bgColor}
      opacity={{ base: 1, md: 0.8 }}
      _hover={{
        opacity: 1,
        transform: 'scale(1.1)',
      }}
      sx={{
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <NavLink to={href}>
        <Container p="0">
          <Container
            bgColor={topBgColor}
            borderTopRadius="lg"
            borderBottom="1px dashed #666"
          >
            <HStack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
              py="3"
            >
              {icon}
              <Heading
                flex="1"
                overflowWrap="break-word"
                justifySelf="flex-start"
                fontFamily="righteous"
                fontSize={{
                  base: '2xl',
                  sm: '3xl',
                  lg: '4xl',
                }}
                letterSpacing="1.2px"
              >
                {title}
              </Heading>
            </HStack>
          </Container>
          <Container>
            <VStack>
              <Box width="90%">
                <Text
                  fontSize={{
                    base: 'lg',
                    md: '2xl',
                  }}
                >
                  {desc}
                </Text>
              </Box>
            </VStack>
          </Container>
        </Container>
      </NavLink>
    </Box>
  );
};
export default HomeCard;
