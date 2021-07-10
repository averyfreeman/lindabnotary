import React from 'react';
import { Box, Grid, GridItem, Image, Text, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

const homepageIcon = <FontAwesomeIcon icon={faSatelliteDish} />;

const copyString = `\u00A9 ${new Date().getFullYear()} `;

const Footer = ({ bgColor, ...rest }) => (
  <Tooltip
    hasArrow
    // bg="rgba(231, 132, 33, 1)"
    bg="red.400"
    border="1px solid rgba(55, 30, 5, 1)"
    borderRadius="lg"
    // boxShadow="2px 2px 4px rgba(55, 30, 5, .70)"
    className="carter-one"
    color="white"
    fontWeight="bold"
    fontSize="1.2rem"
    label="Visit developer site"
    overflow="hidden"
    opacity="0"
    _hover={{
      opacity: 1,
    }}
    sx={{
      WebkitTextStrokeWidth: '0.4px',
      WebkitTextStrokeColor: 'black',
      transition: 'all 1s ease',
    }}
    textShadow="1px 1px 3px black"
  >
    <Box
      as="a"
      href="https://www.averyfreeman.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Grid
        bottom="0"
        bgGradient="linear(180deg, rgba(0,0,0,0) 0%, rgba(0,108,229,0.75) 100%)"
        gap={1}
        height="10"
        templateColumns="repeat(19, 1fr)"
        width="100vw"
      >
        <GridItem colSpan={4} />
        <GridItem colSpan={5} textAlign="right" verticalAlign="middle">
          <Text
            className="righteous"
            fontSize={{
              base: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
              lg: '1.1rem',
              xl: '1.2rem',
            }}
            mt={2}
            opacity="0.3"
            _hover={{
              color: 'white',
              opacity: 1,
              transform: 'scale(1.05)',
              zIndex: 3,
            }}
            sx={{
              transition: 'all 0.5s ease',
            }}
          >
            {homepageIcon} Site {copyString}
          </Text>
        </GridItem>
        <GridItem align="center" h="10" mt="2px" w="100%">
          <Image
            alt="star icon"
            height="32px"
            minH="32px"
            opacity="0.3"
            src="/favicon-32x32.png"
            width="32px"
            minW="32px"
            _hover={{
              opacity: '1',
              transform: 'scale(1.2)',
            }}
            sx={{
              transition: 'all 0.5s ease',
            }}
          />
        </GridItem>
        <GridItem colSpan={5} textAlign="left" verticalAlign="middle">
          <Text
            className="righteous"
            fontSize={{
              base: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
              lg: '1.1rem',
              xl: '1.2rem',
            }}
            mt={2}
            opacity="0.3"
            _hover={{
              color: 'white',
              opacity: '1',
              transform: 'scale(1.05)',
            }}
            sx={{
              transition: 'all 0.5s ease',
            }}
          >
            Avery Freeman
          </Text>
        </GridItem>
        <GridItem colSpan={4} />
      </Grid>
    </Box>
  </Tooltip>
);

export default Footer;
