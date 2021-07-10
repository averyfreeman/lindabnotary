import React from 'react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import LoadingAnim from '../components/LoadingAnim';
import PageChangeAnimator from '../components/PageChangeAnimator';
import StarRatings from '../components/StarRatings';
import TagLine from '../components/TagLine';
import OfferAlertModal from '../pageComponents/OfferAlertModal';
import HomeCards from '../pageComponents/HomeCards';
import HomeBanner from '../pageElements/HomeBanner';
import Footer from '../pageElements/Footer';
import RequestArrow from '../pageElements/RequestArrow';

const questionIcon = <FontAwesomeIcon icon={faQuestionCircle} size="2x" />;

function ExternalLinkToast() {
  const bgColor = useColorModeValue('gray.300', 'gray.600');
  const url =
    'https://www.legalzoom.com/articles/getting-it-notarized-your-questions-answered';
  const target = '_blank';
  const rel = 'noopener noreferrer';
  const toast = useToast();
  return (
    <VStack>
      <Button
        border="1px solid rgba(179,98,0,0.5)"
        colorScheme="blue"
        size="lg"
        variant="solid"
        onClick={() => {
          toast({
            position: 'top-right',
            render: () => (
              <Box
                align="center"
                color="black"
                p={3}
                bg="green.300"
                border="3px solid #333"
              >
                <Heading fontSize="lg" as="span">
                  Loading article from LegalZoom
                </Heading>
                <Box>
                  <LoadingAnim
                    stroke="green"
                    strokeWidth="1px"
                    fill="darkgreen"
                  />
                </Box>
                <Text>This window will remain open</Text>
              </Box>
            ),
          });
          setTimeout(() => {
            window.open(url, target, rel);
          }, 3000);
        }}
      >
        <HStack spacing={3}>
          <Box as="span">{questionIcon}</Box>
          <Text className="josefin-sans">Do I need a Notary?</Text>
        </HStack>
      </Button>
      <Text as="span" bg={bgColor} m={0} p={1} borderRadius="lg">
        (Link to LegalZoom article)
      </Text>
    </VStack>
  );
}

const Home = props => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  const bgColor = useColorModeValue('gray.400', 'gray.800');

  return (
    <Fragment>
      <PageChangeAnimator>
        <VStack
          direction="column"
          spacing="8"
          alignItems="center"
          justifyContent="center"
        >
          <Box label="spacer" height="6rem" minW="100%" opacity="0" />

          <Image
            borderRadius="full"
            name="Linda Blanchfield"
            height={{
              base: '3.43rem',
              sm: '5rem',
              md: '5.625rem',
              lg: '6rem',
              '2xl': '7.5rem',
            }}
            width={{
              base: '3.43rem',
              sm: '5rem',
              md: '5.625rem',
              lg: '6rem',
              '2xl': '7.5rem',
            }}
            src="/nna-cert-logo.webp"
            fallbackSrc="/nna-certified.png"
            position="absolute"
            top={{ base: '80px', lg: '60px' }}
            left={{
              base: '20px',
              sm: '40px',
              lg: '120px',
              '2xl': '140px',
            }}
            zIndex="1"
          />

          <HomeBanner
            bgColor={bgColor}
            className="josefin-sans"
            color="yellow.700"
            subColor="yellow.300"
            title="Linda Blanchfield"
            subTitle="Mobile Notary "
          />

          <TagLine
            border="1px solid green"
            br="lg"
            className="courier"
            darkBg="green.400"
            lightBg="green.300"
            fontSize={{ base: 'lg', sm: '2xl', md: '3xl' }}
            p={10}
            bgOpacity="0.8"
          >
            Serving the Seattle-Tacoma Area
          </TagLine>

          <ExternalLinkToast />

          <OfferAlertModal
            offerModalDisplayed={offerModalDisplayed}
            setOfferModalDisplayed={setOfferModalDisplayed}
          />

          <StarRatings bgColor={bgColor} fontSize="lg" />

          <HomeCards />

          <TagLine
            br="xl"
            className="cursive"
            darkBg="gray.600"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lightBg="gray.300"
            p={5}
          >
            Here to help your signing go smoothly!
          </TagLine>

          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <Box backgroundColor={bgColor} borderRadius="lg">
            <RequestArrow className="carter-one" m={5} p={3}>
              If you have any questions, please visit{' '}
              <Box as="span" color="#1d6eb9">
                <Link to="/contact">my contact page</Link>
              </Box>{' '}
              or use the Quote Request Button
            </RequestArrow>
          </Box>
        </VStack>
        <Footer />
      </PageChangeAnimator>
    </Fragment>
  );
};

export default Home;
