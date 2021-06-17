import React from 'react';
import {
  /* eslint-disable no-unused-vars */
  blockScrollOnMount,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const ImageExpanderModal = ({ children, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex align="center" justify="center" m={12} overflow="inherit">
      <Link onClick={onOpen}>{children}</Link>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay maxW="100vw" />
        <ModalContent
          minW={{
            base: '100%',
            sm: '90%',
            md: '80%',
            lg: '60%',
            '2xl': '50%',
          }}
        >
          <ModalCloseButton />
          <ModalBody
            flex="1"
            direction="column"
            align="center"
            justify={{ base: 'flex-start', sm: 'center' }}
            my={{ base: '1rem', md: '4rem' }}
          >
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ImageExpanderModal;
