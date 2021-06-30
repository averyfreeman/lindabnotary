import React from 'react';
import { Flex } from '@chakra-ui/react';
import MapWithMarkers from 'components/MapWithMarkers';
// const MapWithMarkers = lazy(() => import('../components/MapWithMarkers'));

const MapCanvas = () => {
  return (
    <Flex direction="column" align="center">
      <MapWithMarkers />
    </Flex>
  );
};

export default MapCanvas;
