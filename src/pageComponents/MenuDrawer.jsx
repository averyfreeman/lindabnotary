import React, { Fragment, useRef } from 'react';
import {
  Box,
  HStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Square,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {
  faHouseUser,
  faMapMarkedAlt,
  faPhoneVolume,
  faMedal,
  faSignInAlt,
  faSignOutAlt,
  faSplotch,
} from '@fortawesome/free-solid-svg-icons';
import DrawerColorSwitchButton from '../components/DrawerColorSwitchButton,';
import DrawerButtons from '../pageComponents/DrawerButtons';

const MenuDrawer = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* eslint-disable no-unused-vars */
  const btnRef = useRef();
  const menuButtonColor = '#696969';
  const menuButtonOutline = '#161616';
  const bgColor = useColorModeValue('gray.200', 'gray.800');

  const menuOpenIcon = (
    <Square
      bgColor={menuButtonColor}
      border={`3px solid ${menuButtonOutline}`}
      borderLeftRadius="lg"
      borderRadius="lg"
      m="0"
      opacity={0.7}
      p="0"
      height="42px"
      width="42px"
      _hover={{
        opacity: 1,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-in-out',
      }}
      sx={{
        transition: 'opacity 0.3s ease-in,  transform 0.3s ease-in-out',
        transform: 'rotate(90deg)',
      }}
    >
      <FontAwesomeIcon
        icon={faSignInAlt}
        size="2x"
        color={menuButtonOutline}
        transform={{ rotate: -90 }}
      />
    </Square>
  );

  const menuCloseIcon = (
    <Square
      bgColor={menuButtonColor}
      border={`3px solid ${menuButtonOutline}`}
      borderRadius="lg"
      m="0"
      opacity={0.7}
      p="0"
      height="42px"
      width="42px"
      _hover={{
        opacity: 1,
      }}
      sx={{
        transition: 'transform 0.3s ease-out',
        transform: 'rotate(-180deg)',
        opacity: 1,
      }}
    >
      <FontAwesomeIcon
        icon={faSignOutAlt}
        size="2x"
        color={menuButtonOutline}
      />
    </Square>
  );

  return (
    <Fragment>
      <Button
        position="fixed"
        right="-6"
        top="12"
        theme="default"
        ref={btnRef}
        onClick={onOpen}
        p="6"
        m="0"
        zIndex="2"
      >
        {isOpen ? menuCloseIcon : menuOpenIcon}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        width={{ base: '18rem !important', sm: '22rem !important' }}
      >
        <DrawerOverlay height="100vh" width="100vw" />
        <DrawerContent
          height="100vh"
          width={{ base: '18rem !important', sm: '22rem !important' }}
          bgColor={bgColor}
        >
          <DrawerHeader textShadow="1px 2px 5px black">
            <HStack flex="1" align="center" justify="center">
              <FontAwesomeIcon
                color="gold"
                icon={faSplotch}
                size="lg"
                transform={{ rotate: -48 }}
              />
              <Text
                className="cursive"
                fontSize={{ base: '1.4rem', sm: '1.7rem' }}
              >
                Linda B the Notary
              </Text>

              <FontAwesomeIcon
                color="gold"
                icon={faSplotch}
                size="lg"
                transform={{ rotate: 16 }}
              />
              <DrawerCloseButton mt="3" />
            </HStack>
          </DrawerHeader>
          <DrawerButtons
            aboutIcon={faAddressCard}
            contactIcon={faPhoneVolume}
            homeIcon={faHouseUser}
            onClick={onClose}
            qualificationsIcon={faMedal}
            regionIcon={faMapMarkedAlt}
          />

          <DrawerColorSwitchButton />
          <Box
            sx={{
              display: 'none',
            }}
          >
            <DrawerFooter
              borderTopWidth="3px"
              boxShadow="inset 2px 2px 2px #222"
            >
              <VStack flex="1" alignItems="center">
                <Text
                  className="cursive"
                  fontSize="lg"
                  textShadow="1px 2px 5px black"
                >
                  Here to help your signing go smoothly!
                </Text>
              </VStack>
            </DrawerFooter>
          </Box>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default MenuDrawer;
