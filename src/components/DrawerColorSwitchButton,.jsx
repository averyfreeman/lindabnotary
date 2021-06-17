import React from 'react';
import { Box, DrawerFooter } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const DrawerColorSwitchButton = () => {
  return (
    <DrawerFooter
      flex={1}
      direction="column"
      justify="center"
      m={0}
      maxH="3rem"
      w={{
        base: '16.5rem',
        sm: '18rem',
      }}
      textShadow="1px 1px 4px black"
    >
      <Box bg="" as="span" p={2} borderRadius="lg">
        Color &rarr;
        <ColorModeSwitcher /> &larr; Switch
      </Box>
    </DrawerFooter>
  );
};

export default DrawerColorSwitchButton;
