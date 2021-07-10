import React, { Fragment, useEffect } from 'react';
import { Button, Text, useDisclosure } from '@chakra-ui/react';
import MultiModal from './MultiModal';
import OfferBullhorn from '../assets/OfferBullhorn';

const OfferAlertModal = props => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { offerModalDisplayed, setOfferModalDisplayed } = props;

  useEffect(() => {
    if (offerModalDisplayed === false) {
      setTimeout(() => {
        onOpen();
        setOfferModalDisplayed(true);
      }, 60000);
    }
  }, [onOpen, offerModalDisplayed, setOfferModalDisplayed]);

  return (
    <Fragment>
      {isOpen && (
        <MultiModal
          footer={
            <Button colorScheme="blue" my={2} onClick={onClose}>
              That's awesome, thanks!
            </Button>
          }
          header={
            <OfferBullhorn
              height={{ base: 32, md: 48 }}
              width={{ base: 32, md: 48 }}
            />
          }
          id="bullhornModal"
          isCentered={true}
          isOpen={true}
          motionPreset="slideInBottom"
          onClose={onClose}
          onOpen={onOpen}
          preserveScrollBarGap={true}
        >
          <Text
            align="center"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight={700}
          >
            Get a 5% discount!
          </Text>
          <Text
            align="center"
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight={500}
            my={2}
          >
            Just mention this ad at signing
          </Text>
          <Text align="center">(limit 1 per customer)</Text>
        </MultiModal>
      )}
    </Fragment>
  );
};

export default OfferAlertModal;
