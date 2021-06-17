import React from 'react';
import { DrawerBody, VStack } from '@chakra-ui/react';
import DrawerItem from '../components/DrawerItem';

const DrawerButtons = ({
  aboutIcon,
  contactIcon,
  homeIcon,
  onClick,
  qualificationsIcon,
  regionIcon,
  ...rest
}) => (
  <DrawerBody overflow="hidden">
    <VStack
      // spacing={{ base: 6, sm: 10 }}
      direction="column"
      align="flex-start"
      minH={{ base: '100%', sm: '80%' }}
      justify="space-evenly"
      className="josefin-sans"
      textShadow="1px 2px 5px black"
      {...rest}
    >
      <DrawerItem
        className="carter-one"
        to="/home"
        label="Home"
        icon={homeIcon}
        iconSize="2x"
        // iconColor="#975a16"
        onClick={onClick}
      />
      <DrawerItem
        className="carter-one"
        to="/about"
        label="About"
        icon={aboutIcon}
        iconSize="2x"
        // iconColor="teal"
        onClick={onClick}
      />
      <DrawerItem
        className="carter-one"
        to="/region"
        label="Region"
        icon={regionIcon}
        iconSize="2x"
        // iconColor="green"
        onClick={onClick}
      />
      <DrawerItem
        className="carter-one"
        to="/qualifications"
        label="Qualifications"
        icon={qualificationsIcon}
        iconSize="2x"
        // iconColor="purple"
        onClick={onClick}
      />
      <DrawerItem
        className="carter-one"
        to="/contact"
        label="Contact"
        icon={contactIcon}
        iconSize="2x"
        // iconColor="red"
        onClick={onClick}
      />
    </VStack>
  </DrawerBody>
);

export default DrawerButtons;
