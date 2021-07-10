import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Container, Image, Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import ImageExpanderModal from 'components/ImageExpanderModal';
import PageButton from '../components/PageButton';
import PageChangeAnimator from '../components/PageChangeAnimator';
import OfferAlertModal from '../pageComponents/OfferAlertModal';
import ExternalLinkButtons from '../pageComponents/ExternalLinkButtons';
import InfoTable from '../pageComponents/InfoTable';
import BackdropSpacing from '../pageElements/BackdropSpacing';
import DarkDivider from '../pageElements/DarkDivider';
import Footer from '../pageElements/Footer';
import Header from '../pageElements/Header';
import LightDivider from '../pageElements/LightDivider';
import Paper from '../pageElements/Paper';
import Paragraph from '../pageElements/Paragraph';
import RequestArrow from '../pageElements/RequestArrow';
import SecondaryHeader from '../pageElements/SecondaryHeader';

import CheckMark from '../assets/CheckMark';
const colorProfile = 'blue';

const Qualifications = props => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /* eslint-disable no-unused-vars */
  const location = useLocation();
  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <OfferAlertModal
          offerModalDisplayed={offerModalDisplayed}
          setOfferModalDisplayed={setOfferModalDisplayed}
        />

        <Paper className="spectral">
          <Header>Linda's Qualifications:</Header>
          <Box
            label="spacer"
            height={{ base: '1rem', md: '3rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Licensed:</SecondaryHeader>
          <LightDivider />{' '}
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }} ml={3}>
            <Image
              alignSelf="flex-end"
              alt="nna certified logo"
              fallbackSrc="/nna-certified.png"
              float="right"
              ml={5}
              objectFit="contained"
              src="/nna-cert-logo.webp"
            />
            I am a Certified Signing Agent, licensed in the State of Washington,
            and also certified by the National Notary Association.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Insured:</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }} ml={3}>
            <CheckMark mr={5} color="gold" h="130px" w="130px" float="left" />I
            am Fidelity approved, carry $100,000 in errors and omissions
            insurance, and can provide evidence of having undergone a background
            check.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>Professional Ethics:</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Container maxW={{ base: '80%', sm: '60%', md: '50%' }}>
            <ImageExpanderModal>
              <Image
                alignSelf="flex-end"
                alt="nna pledge banner"
                borderRadius="lg"
                objectFit="contain"
                m={2}
                src="/notary-pledge-frompdf.webp"
                fallbackSrc="/nna-pledge.png"
              />
            </ImageExpanderModal>
          </Container>
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }} ml={3}>
            All notaries take this pledge of ethical practice to become
            notaries, and I am no exception! I must always stay within the scope
            of my profession.
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <SecondaryHeader>Associations:</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Paragraph fontSize={{ base: 'lg', md: 'xl' }} ml={3}>
            I am a member of the National Notary Association, and am a
            contractor through Snapdocs.com and NotaryCafe.com
          </Paragraph>
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader maxW={{ base: '14rem', sm: '26rem' }}>
            Profiles on Member Sites:
          </SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <ExternalLinkButtons colorScheme={colorProfile} />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <DarkDivider />
          <SecondaryHeader>More Info:</SecondaryHeader>
          <LightDivider />
          <Box
            label="spacer"
            height={{ base: '0.4rem', md: '1.2rem' }}
            minW="100%"
            opacity="0"
          />
          <Stack direction={{ base: 'row', sm: 'column' }} align="center">
            <InfoTable colorScheme={colorProfile} />
          </Stack>
          <DarkDivider />
          <Container my={5}>
            <PageButton
              colorScheme={colorProfile}
              icon={<FontAwesomeIcon icon={faPhoneVolume} size="lg" />}
              label="Contact Linda"
              to="/contact"
            />
          </Container>
          <LightDivider />
          <Box label="spacer" height="2rem" minW="100%" opacity="0" />
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

export default Qualifications;
