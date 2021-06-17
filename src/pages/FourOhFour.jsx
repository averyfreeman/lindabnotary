import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Circle,
  Code,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PageChangeAnimator from '../components/PageChangeAnimator';
import ChakraUILogo from '../assets/ChakraUILogo';
import Footer from '../pageElements/Footer';

const FourOhFour = () => {
  const rgbaBgColor = useColorModeValue(
    'rgba(113,128,150,0.5)',
    'rgba(26,32,44,0.7)'
  );
  const bgColor = useColorModeValue('gray.600', 'gray.800');
  return (
    <Fragment>
      <Box>
        <VStack
          height="100vh"
          justify="center"
          fontSize="xl"
          bgColor={rgbaBgColor}
        >
          <PageChangeAnimator>
            <Box
              bgColor={bgColor}
              minH="60vh"
              minW="60vw"
              borderRadius="xl"
              boxShadow="4px 4px 6px #333"
            >
              <VStack
                flex="1"
                direction="column"
                align="center"
                spacing={8}
                zIndex="1"
              >
                <ChakraUILogo h="30vmin" pointerEvents="none" />
                <Text className="courier" opacity="1">
                  <Code>Error 404:</Code>
                  &nbsp;Page not found
                </Text>
                <NavLink to="/home">
                  <Circle
                    as="button"
                    border="3px solid grey"
                    opacity="0.8"
                    p="5"
                    _hover={{
                      transform: 'scale(1.1)',
                    }}
                    transition="all 0.3s ease "
                  >
                    <HStack spacing={3}>
                      <Text m="3" fontSize="2xl">
                        Return Home
                      </Text>
                      <Box
                        boxShadow="inset 3px 3px 6px black"
                        p={4}
                        borderRadius="full"
                        borderRight="3px solid #666"
                        borderBottom="3px solid #888"
                      >
                        <FontAwesomeIcon mt="3" icon={faHome} size="2x" />
                      </Box>
                    </HStack>
                  </Circle>
                </NavLink>
              </VStack>
            </Box>
          </PageChangeAnimator>
        </VStack>
        <Footer position="fixed" bottom="0" bgColor={bgColor} />
      </Box>
    </Fragment>
  );
};

export default FourOhFour;
