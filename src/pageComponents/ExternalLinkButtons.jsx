import React from 'react';
import { Image, Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ExternalLinkButton from '../components/ExternalLinkButton';
const ExternalLinkButtons = ({ colorScheme }) => {
  return (
    <Stack
      my={5}
      spacing={8}
      direction={{ base: 'column', sm: 'row' }}
      align="center"
      justify="center"
    >
      <ExternalLinkButton
        colorScheme={colorScheme}
        icon={<Image src="/snapdocs-logo.png" width={10} height={5} />}
        label="Snapdocs"
        to="https://notary.snapdocs.com/notary-public/washington/university-place/linda-blanchfield"
      />

      <ExternalLinkButton
        colorScheme={colorScheme}
        icon={<FontAwesomeIcon icon={faCoffee} size="1x" />}
        label="Notary Cafe"
        to="https://notarycafe.com/linda.blanchfield"
      />
    </Stack>
  );
};

export default ExternalLinkButtons;
