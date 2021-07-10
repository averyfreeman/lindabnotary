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
// import { Bars, ThreeDots } from 'react-loading-icons';
import LoadingAnim from '../components/LoadingAnim';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import PageChangeAnimator from '../components/PageChangeAnimator';
import OfferAlertModal from '../pageComponents/OfferAlertModal';
import Footer from '../pageElements/Footer';

const Loading = props => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  return (
    <ChakraProvider theme={theme}>
      <OfferAlertModal
        offerModalDisplayed={offerModalDisplayed}
        setOfferModalDisplayed={setOfferModalDisplayed}
      />

      <PageChangeAnimator>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Heading className="cursive">
                <Code fontSize="xl" padding="10" zIndex="-5" marginBottom="-50">
                  Loading . . .
                  <br /> <br />. . . should be done shortly
                </Code>
              </Heading>
              <LoadingAnim
                stroke="green"
                strokeWidth="0.5px"
                fill="darkgreen"
                height="50%"
                left="50%"
                position="fixed"
                top="0m"
                width="50%"
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
