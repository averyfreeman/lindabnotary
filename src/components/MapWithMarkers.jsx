import React from 'react';
import { Box } from '@chakra-ui/react';
import { useGoogleMaps } from 'react-hook-google-maps';
const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;

const mapParams = {
  center: {
    lat: 47.57,
    lng: -122.84,
  },
  zoom: 8,
  scrollwheel: true,
  zoomControl: true,
  title: 'Service Area',
};

const points = {
  tacoma: {
    lat: 47.2491,
    lng: -122.45,
  },
  montesano: {
    lat: 47.0033996,
    lng: -123.6609886,
  },
  northBend: {
    lat: 47.4958911,
    lng: -121.8048445,
  },
  eatonville: {
    lat: 46.869834,
    lng: -122.5459953,
  },
  everett: {
    lat: 47.9575704,
    lng: -122.1840626,
  },
  centralia: {
    lat: 46.7245934,
    lng: -123.0009093,
  },
};

const MapWithMarkers = React.memo(Map => {
  const { ref, map, google } = useGoogleMaps(API_KEY, {
    center: mapParams.center,
    zoom: mapParams.zoom,
    scrollwheel: mapParams.scrollwheel,
    zoomControl: mapParams.zoomControl,
    title: mapParams.title,
  });

  if (map) {
    const cityNames = Object.keys(points);
    const cityCoords = Object.values(points);
    cityNames.map((city, i) => {
      new google.maps.Marker({
        position: cityCoords[i],
        title: cityNames[i],
        map,
      });
      return map;
    });
  }
  return <Box as="div" ref={ref} style={{ height: '80vh', width: '90vw' }} />;
});

export default MapWithMarkers;
