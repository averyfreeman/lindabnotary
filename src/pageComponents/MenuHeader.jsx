import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Circle,
  Container,
  HStack,
  Square,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {
  faHouseUser,
  faMapMarkedAlt,
  faPhoneVolume,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import NavButton from '../components/NavButton';
import NavColorSwitchButton from '../components/NavColorSwitchButton';

const MenuHeader = () => {
  const bgColor = useColorModeValue('gray.700', 'gray.600');
  const homeBgColor = useColorModeValue('gray.400', 'gray.800');
  const circleBgColor = useColorModeValue('gray.500', 'black');
  return (
    <Container
      bgColor={bgColor}
      m={0}
      minW="100vw"
      // keep vertical
    >
      <HStack
        align="center"
        direction="row"
        height="4rem"
        justify="space-between"
        maxW="95%"
      >
        <NavLink to="/home">
          <Square
            bg={homeBgColor}
            ml={0}
            p={3}
            borderTop="3px solid #666"
            borderRight="3px solid #333"
            borderBottom="3px solid #333"
            borderLeft="3px solid #666"
            boxShadow="2px 2px 4px #333"
            height="4rem"
            opacity="0.9"
            _hover={{
              opacity: 1,
              transform: 'scale(1.001)',
            }}
            sx={{
              transition: 'all 0.2s ease',
            }}
          >
            <Circle bg={circleBgColor} height="4rem" width="4rem">
              <FontAwesomeIcon icon={faHouseUser} size="3x" />
            </Circle>
          </Square>
        </NavLink>
        <NavButton
          className="carter-one"
          fontSize="lg"
          icon={<FontAwesomeIcon icon={faAddressCard} size="2x" />}
          label="About"
          ml={{ base: 0, md: 2 }}
          to="/about"
          width={{ base: '5rem', lg: '10rem' }}
        />
        <NavButton
          className="carter-one"
          fontSize="lg"
          icon={<FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />}
          label="Region"
          ml={{ base: 0, md: 2 }}
          to="/region"
          width={{ base: '5rem', lg: '10rem' }}
        />
        <NavButton
          className="carter-one"
          fontSize="lg"
          icon={<FontAwesomeIcon icon={faMedal} size="2x" />}
          label="Qualifications"
          ml={0}
          to="/qualifications"
          width={{ base: '5rem', lg: '12rem' }}
        />
        <NavButton
          className="carter-one"
          fontSize="lg"
          icon={<FontAwesomeIcon icon={faPhoneVolume} size="2x" />}
          label="Contact"
          ml={{ base: 0, md: 2 }}
          to="/contact"
          width={{ base: '5rem', lg: '10rem' }}
        />
        <NavColorSwitchButton
          className="carter-one"
          fontSize="lg"
          label="Mode"
          ml={{ base: 0, md: 4 }}
        />
      </HStack>
    </Container>
  );
};

export default MenuHeader;
