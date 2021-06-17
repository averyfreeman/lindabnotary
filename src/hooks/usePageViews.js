import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePageViews = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  let location = useLocation();

  useEffect(() => {
    setCurrentLocation(location);
    console.log(location);
  }, [location]);

  return currentLocation;
};

export default usePageViews;
