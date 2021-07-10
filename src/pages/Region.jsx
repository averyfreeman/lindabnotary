import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import PageChangeAnimator from '../components/PageChangeAnimator';
import OfferAlertModal from '../pageComponents/OfferAlertModal';
import MapCanvas from '../pageComponents/MapCanvas';
import BackdropSpacing from '../pageElements/BackdropSpacing';
import DarkDivider from '../pageElements/DarkDivider';
import Footer from '../pageElements/Footer';
import Header from '../pageElements/Header';
import LightDivider from '../pageElements/LightDivider';
import Paper from '../pageElements/Paper';
import Paragraph from '../pageElements/Paragraph';
import RequestArrow from '../pageElements/RequestArrow';

const Region = props => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /* eslint-disable no-unused-vars */
  let location = useLocation();

  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <OfferAlertModal
          offerModalDisplayed={offerModalDisplayed}
          setOfferModalDisplayed={setOfferModalDisplayed}
        />

        <Paper>
          <Header>General Region</Header>
          <Box
            label="spacer"
            height={{ base: '1rem', md: '3rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            These are the typical boundaries of my work area. If you need me to
            travel outside these areas, I can evaluate the distance on a
            case-by-case basis.
          </Paragraph>
          <LightDivider />
          <MapCanvas />
          <LightDivider flex="1" direction="row" align="flex-end" />
          <Text my={3} fontSize={{ base: 'lg', md: 'xl' }}>
            Based in Tacoma
          </Text>
          <Box label="spacer" height="4rem" minW="100%" opacity="0" />
          <RequestArrow className="carter-one" m={5} p={3}>
            If you have any questions, please visit{' '}
            <Box as="span" color="#1d6eb9">
              <Link to="/contact">my contact page</Link>
            </Box>{' '}
            or use the Quote Request Button
          </RequestArrow>
          <DarkDivider />
        </Paper>
        <Footer />
      </BackdropSpacing>
    </PageChangeAnimator>
  );
};

export default Region;
