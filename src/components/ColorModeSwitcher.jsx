import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { cloudMoonIcon, cloudSunIcon } from '../assets/ColorSwitchIcons';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(cloudMoonIcon, cloudSunIcon);

  return (
    <IconButton
      size={{ base: 'sm', md: 'md' }}
      fontSize={{ base: '2xl', md: '4xl' }}
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
