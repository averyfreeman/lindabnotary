import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { randomFont } from '../lib/randomFont';
import PageChangeAnimator from '../components/PageChangeAnimator';
import AboutBottomButtons from '../pageComponents/AboutBottomButtons';
import BackdropSpacing from '../pageElements/BackdropSpacing';
import DarkDivider from '../pageElements/DarkDivider';
import Footer from '../pageElements/Footer';
import Paper from '../pageElements/Paper';
import HeaderWHeadshot from '../pageElements/HeaderWHeadshot';
import LightDivider from '../pageElements/LightDivider';
import Paragraph from '../pageElements/Paragraph';
import RequestArrow from '../pageElements/RequestArrow';
import SecondaryHeader from '../pageElements/SecondaryHeader';

const About = props => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <Paper>
          <HeaderWHeadshot />
          <Box
            label="spacer"
            height={{ base: '1rem', md: '3rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Meet Linda</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            My name is Linda Blanchfield, and I am a Washington native. I have
            resided in the Tacoma area for many years, and love the Pacific
            Northwest. I became a notary since 2008, after a long and rewarding
            career as a federal employee, where I was responsible for
            statistical analysis and quality control.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Broad Expertise</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            <Image
              alignSelf="right"
              alt="Business meeting"
              borderRadius="lg"
              float="right"
              h={{ base: '7rem', sm: '9rem', md: '11rem', lg: '13rem' }}
              fit="contain"
              ml={5}
              src="/signing-dark.jpg"
            />
            Having done my fair share of general notary work, I primarily help
            with loan applications, seller/buyer signings, time shares,
            commercial properties, and reverse mortgages. I am also adept with
            wills, excutor requirements, probate, power of attorney, and thrift
            savings plans.
          </Paragraph>
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            I have completed over 4000 signings, so I have a broad understanding
            of many types of forms, and enjoy helping people find the correct
            documents they need for their most pressing legal requirements.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Available Any Time</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            <Image
              alignSelf="flex-start"
              alt="On the move"
              borderRadius="lg"
              float="left"
              h={{ base: '7rem', sm: '9rem', md: '11rem', lg: '13rem' }}
              fit="contain"
              mr={5}
              src="/aerial-car-forest-cropped.jpg"
            />
            I am available full-time for attestation clients as a mobile
            Certified Signing Agent. You are welcome to contact me whenever you
            need someone.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Other Interests</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }}>
            When I'm not helping people attest to their signature, I enjoy
            entertaining, travel, and music.
          </Paragraph>
          <Flex direction="column" align="center" justify="center">
            <Image
              alt="Qualified homebuyers"
              borderRadius="lg"
              height="50%"
              objectFit="cover"
              src="/qualified-homebuyers.png"
              width="60%"
            />
            <Text
              // className="carter-one"
              // className={fontCycler(fontsArr, i)}
              className={randomFont}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              p={5}
            >
              Ready to give me a call?
            </Text>
          </Flex>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>More Info</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <AboutBottomButtons colorProfile="blue" />
          <Box
            label="spacer"
            height={{ base: '2rem', md: '4rem' }}
            minW="100%"
            opacity="0"
          />
          <RequestArrow className="carter-one" m={5} p={3}>
            If you have any questions, please visit{' '}
            <Box as="span" color="#1d6eb9">
              <Link to="/contact">my contact page</Link>
            </Box>{' '}
            or use the Quote Request Button
          </RequestArrow>
        </Paper>
        <Footer />
      </BackdropSpacing>
    </PageChangeAnimator>
  );
};

export default About;
