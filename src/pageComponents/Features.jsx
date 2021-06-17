import * as React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
// import { CalendarIcon, BellIcon, MoonIcon, LockIcon } from '@chakra-ui/icons';
import Feature from '../components/Feature';
// import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
// import { Feature } from './Feature'
// lifted from pro site

// lifted from chakra-ui.com/docs/layout/stack - may contain some hints:
// function Feature({ title, desc, ...rest }) {
//   return (
//     <Box p={5} shadow="md" borderWidth="1px" {...rest}>
//       <Heading fontSize="xl">{title}</Heading>
//       <Text mt={4}>{desc}</Text>
//     </Box>
//   )
// }

const Features = () => {
  return (
    <Box as="section" maxW="7xl" mx="auto" py="12" px={{ base: '6', md: '10' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX={{ base: '3', md: '6' }}
        spacingY={{ base: '3', md: '4' }}
      >
        <Feature
          title="Secure by default"
          // icon={<CalendarIcon boxSize={32} />}
          desc="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus."
        />
        <Feature
          title="Always up to date"
          // icon={<BellIcon boxSize={32} />}
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        />
        <Feature
          title="Incredible statistics"
          // icon={<MoonIcon boxSize={32} />}
          desc="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus."
        />
        <Feature
          title="Support for multiple devices"
          // icon={<LockIcon boxSize={32} />}
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        />
      </SimpleGrid>
    </Box>
  );
};

export default Features;
