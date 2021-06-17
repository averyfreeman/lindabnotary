import React from 'react';
import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneVolume,
  faMapMarkedAlt,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import PageButton from '../components/PageButton';

const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" />;
const medalIcon = <FontAwesomeIcon icon={faMedal} size="lg" />;
const phoneIcon = <FontAwesomeIcon icon={faPhoneVolume} size="lg" />;

const AboutBottomButtons = ({ colorProfile, ...rest }) => {
  return (
    <Stack
      mx={3}
      my={5}
      spacing={4}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
    >
      <VStack>
        <Box>
          <Text>Read about my qualifications</Text>
        </Box>

        <PageButton
          to="/qualifications"
          colorScheme={colorProfile}
          icon={medalIcon}
          label="Qualifications"
        />
      </VStack>
      <VStack display={{ base: 'flex', md: 'flex' }}>
        <Box>
          <Text>View the region I serve</Text>
        </Box>

        <PageButton
          to="/region"
          colorScheme={colorProfile}
          icon={mapIcon}
          label="Region"
        />
      </VStack>

      <VStack display={{ base: 'flex', md: 'flex' }}>
        <Box>
          <Text>Call me for an appointment</Text>
        </Box>

        <PageButton
          to="/contact"
          colorScheme={colorProfile}
          icon={phoneIcon}
          label="Contact"
        />
      </VStack>
    </Stack>
  );
};

export default AboutBottomButtons;
