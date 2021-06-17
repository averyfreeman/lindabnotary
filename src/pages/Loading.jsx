import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Bars } from 'react-loading-icons';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import PageChangeAnimator from '../components/PageChangeAnimator';
import Footer from '../pageElements/Footer';

const Loading = () => {
  return (
    <ChakraProvider theme={theme}>
      <PageChangeAnimator>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              {/* <LoadingAnim h="40vmin" pointerEvents="none" /> */}
              <Heading className="cursive">
                <Code fontSize="xl" padding="10" zIndex="-5" marginBottom="-50">
                  Loading . . .
                  <br /> <br />. . . should be done shortly
                </Code>
              </Heading>
              <Bars
                stroke="#662200"
                fill="#BB3300"
                width="50%"
                height="50%"
                opacity="0.5"
              />
              <Link to="/home" fontSize="2xl">
                Click here to go back to home page if wait persists
              </Link>
            </VStack>
          </Grid>
        </Box>
        <Footer />
      </PageChangeAnimator>
    </ChakraProvider>
  );
};

export default Loading;
