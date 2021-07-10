/* eslint-disable no-unused-vars */
import React, { cloneElement, Fragment } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const MultiModal = ({
  animKey,
  children,
  footer,
  header,
  isCentered,
  isOpen,
  motionPreset,
  onClose,
  onOpen,
  preserveScrollBarGap,
  ref,
  ...rest
}) => {
  return (
    <Fragment>
      <Modal
        isOpen={isOpen}
        isCentered={isCentered}
        motionPreset={motionPreset}
        onClose={onClose}
        preserveScrollBarGap={preserveScrollBarGap}
        ref={ref}
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
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default MultiModal;
