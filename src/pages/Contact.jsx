import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import PageChangeAnimator from '../components/PageChangeAnimator';
import BackdropSpacing from '../pageElements/BackdropSpacing';
import ContactTable from '../pageComponents/ContactTable';
import DarkDivider from '../pageElements/DarkDivider';
import Footer from '../pageElements/Footer';
import Header from '../pageElements/Header';
import LightDivider from '../pageElements/LightDivider';
import Paper from '../pageElements/Paper';
import RequestArrow from '../pageElements/RequestArrow';
import SecondaryHeader from '../pageElements/SecondaryHeader';

const colorProfile = 'blue';

const About = () => {
  /* eslint-disable no-unused-vars */
  const location = useLocation();
  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <Paper>
          <Header>Contact Linda</Header>
          <Box
            label="spacer"
            height={{ base: '1rem', md: '3rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />

          <FontAwesomeIcon
            color="yellow"
            icon={faSun}
            size="6x"
            transform={{ rotate: 20 }}
            // don't collapse
          />

          <SecondaryHeader>Contact Info</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Stack direction={{ base: 'row', sm: 'column' }} align="center">
            <ContactTable colorProfile={colorProfile} />
          </Stack>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <RequestArrow
            align="center"
            // bg={bgColor}
            borderRadius="lg"
            className="carter-one"
            iconRotate={90}
            justify="flex-end"
            m={5}
            p={3}
          >
            Or use the Quote Request Button
          </RequestArrow>
        </Paper>
        <Footer />
      </BackdropSpacing>
    </PageChangeAnimator>
  );
};

export default About;
