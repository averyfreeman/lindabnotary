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
import FadeScaleYWrapper from '../components/FadeScaleYWrapper';

const MultiModal = ({
  children,
  footer,
  header,
  isOpen,
  onClose,
  onOpen,
  ...rest
}) => {
  return (
    <Fragment>
      <FadeScaleYWrapper duration={1} key="modal-animKey-0">
        <Modal isOpen={isOpen} onClose={onClose}>
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
            <ModalBody>{cloneElement(children, { onClose })}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </Modal>
      </FadeScaleYWrapper>
    </Fragment>
  );
};

export default MultiModal;
