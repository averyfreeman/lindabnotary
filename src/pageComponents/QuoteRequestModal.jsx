/* eslint-disable no-unused-vars */
import React, { cloneElement, Fragment, useEffect, useState } from 'react';
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import FadeScaleXWrapper from '../components/FadeScaleXWrapper';
import Recaptcha from 'react-gcaptcha';

const SITE_KEY = process.env.REACT_APP_GCAPTCHA_SITE_KEY;

const QuoteRequestModal = ({
  children,
  defaultIsOpen,
  footer,
  header,
  isOpen,
  onClose,
  onOpen,
  preserveScrollBarGap,
  ...rest
}) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (verified === false && process.env.NODE_ENV === 'development') {
      setVerified(true);
    }
  }, [verified, setVerified]);

  const gCaptchaTheme = useColorModeValue('light', 'dark');

  const handleVerification = () => {
    setVerified(!verified);
  };

  return (
    <Fragment>
      <AnimatePresence key="quote-modal-001">
        <FadeScaleXWrapper duration={3} key="modal-animKey-0">
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            preserveScrollBarGap={preserveScrollBarGap}
          >
            <ModalOverlay />

            <ModalContent
              borderRadius="lg"
              minW={{
                base: '100vw',
                sm: '80vw',
                md: '80vw',
                lg: '75vw',
                xl: '60vw',
                '2xl': '55vw',
              }}
              {...rest}
            >
              <ModalCloseButton />
              <ModalHeader align="center">{header}</ModalHeader>
              {!verified && (
                <ModalBody>
                  <Flex align="center" direction="column" justify="center">
                    <Recaptcha
                      sitekey={SITE_KEY}
                      theme={gCaptchaTheme}
                      verifyCallback={handleVerification}
                    />
                  </Flex>
                </ModalBody>
              )}
              {verified && (
                <ModalBody>{cloneElement(children, { onClose })}</ModalBody>
              )}
              <ModalFooter>{footer}</ModalFooter>
            </ModalContent>
          </Modal>
        </FadeScaleXWrapper>
      </AnimatePresence>
    </Fragment>
  );
};

export default QuoteRequestModal;
