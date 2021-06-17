import React from 'react';
import { useEffect } from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faPhoneVolume,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import HomeCard from '../components/HomeCard';
import useDimensions from '../hooks/useDimensions';

const calcIconSize = (width, iconName) => {
  let iconSize = '';
  if (width > 575) {
    iconSize = '4x';
  } else iconSize = '3x';
  const icon = <FontAwesomeIcon icon={iconName} size={iconSize} />;
  return icon;
};
let stackIcon = '';
let mapIcon = '';
let medalIcon = '';
let phoneIcon = '';

const HomeCards = () => {
  const { height, width } = useDimensions();
  useEffect(() => {
    stackIcon = calcIconSize(width, faStackOverflow);
    mapIcon = calcIconSize(width, faMapMarkedAlt);
    medalIcon = calcIconSize(width, faMedal);
    phoneIcon = calcIconSize(width, faPhoneVolume);
    // console.log(height, width);
  }, [height, width]);

  return (
    <VStack>
      <SimpleGrid columns={{ base: 1, md: 2, '2xl': 4 }} spacing="5">
        <HomeCard
          title="About"
          desc="How Linda's notary services can help you"
          icon={stackIcon}
          href="/pages/about"
        />
        <HomeCard
          title="Region"
          desc="Show a map of the area Linda serves"
          icon={mapIcon}
          href="/pages/region"
        />
        <HomeCard
          title="Qualifications"
          desc="Linda's qualifications and memberships"
          icon={medalIcon}
          href="/pages/qualifications"
        />
        <HomeCard
          title="Contact"
          desc="Contact Linda for a quote or attestation"
          icon={phoneIcon}
          href="/pages/contact"
        />
      </SimpleGrid>
    </VStack>
  );
};

export default HomeCards;
