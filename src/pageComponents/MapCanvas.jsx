import React, { lazy, Suspense } from 'react';
import { Flex } from '@chakra-ui/react';
import { Grid } from 'react-loading-icons';
const MapWithMarkers = lazy(() => import('../components/MapWithMarkers'));

const MapCanvas = () => {
  return (
    <Flex direction="row" justify="center">
      <Suspense fallback={<Grid />}>
        <MapWithMarkers />
      </Suspense>
    </Flex>
  );
};

export default MapCanvas;
