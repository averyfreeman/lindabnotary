/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Box,
  Button,
  Container,
  // Flex,
  FormControl,

  /* eslint-disable no-unused-vars */
  FormLabel,

  /* eslint-disable no-unused-vars */
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  InputLeftAddon,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  // Wrap,
  // WrapItem,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const nameRegEx = '^[aA-zZs]+$';
const phoneRegEx = `^[0-9s \-]+$`;

const QuoteMailerSchema = Yup.object({
  firstName: Yup.string()
    .matches(nameRegEx, `Can't contain numbers/letters/spaces`)
    .max(18, `Must be 18 letters or less`)
    .required(`First name is required`)
    .strict(),
  lastName: Yup.string()
    .matches(nameRegEx, `Can't contain numbers/letters/spaces`)
    .max(24, `Must be 24 letters or less`)
    .required(`Last name is required`)
    .strict(),
  phone: Yup.string()
    .matches(phoneRegEx, `That doesn't go in phone number...`)
    .min(12, `13 characters, please`)
    .max(13, `13 characters, please`)
    .required(`Phone number is required`),
  email: Yup.string()
    .email(`That's not an email address!`)
    .required(`Email address is required`),
  message: Yup.string()
    .min(50, `Please keep typing...`)
    .required(`Short message is required`),
});

const QuoteModal = ({ isOpen, onOpen, onClose, ...rest }) => {
  const bgColor = useColorModeValue('grey.600', 'black');

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: '100vw', sm: '85vw', md: '80vw', lg: '70vw' }}
        >
          <ModalHeader>
            <Text
              bg={bgColor}
              borderRadius="lg"
              className="carter-one"
              fontSize={{ base: '2xl', md: '4xl' }}
              w={{ base: '16rem', md: '22rem' }}
              p={4}
            >
              Request a Quote:
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              message: '',
            }}
            validationSchema={QuoteMailerSchema}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <ModalBody>
                  <Text mb={5}>
                    Enter your name, email, and a brief description
                  </Text>
                  <VStack direction="column" spacing={6} w="100%">
                    <InputGroup minW={{ base: '100%', md: '50%' }} mx={3}>
                      <InputLeftAddon
                        pointerEvents="none"
                        children="First"
                        fontSize="1.2rem"
                        w="4rem"
                      />
                      <FormControl
                        id="firstName"
                        name="firstName"
                        isInvalid={props.errors.firstName}
                      >
                        <Input
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.firstName}
                          name="firstName"
                          placeholder="Start here..."
                        />
                        {/* {props.touched.firstname &&
                          props.errors.firstName( */}
                        <FormErrorMessage>
                          {props.errors.firstName}
                        </FormErrorMessage>
                        {/* )} */}
                      </FormControl>
                    </InputGroup>
                    <InputGroup minW={{ base: '100%', md: '50%' }} mx={3}>
                      <InputLeftAddon
                        pointerEvents="none"
                        fontSize="1.2rem"
                        children="Last"
                        w="4rem"
                      />
                      <FormControl id="last-name" name="lname" isRequired>
                        <Input />
                      </FormControl>
                    </InputGroup>
                    <Container>
                      <InputGroup>
                        <InputLeftAddon
                          pointerEvents="none"
                          fontSize="1.2rem"
                          children={
                            <FontAwesomeIcon
                              icon={faPhone}
                              transform={{ rotate: 140 }}
                            />
                          }
                          w="4rem"
                        />
                        <FormControl id="phone" name="phone" isRequired>
                          <Input
                            placeholder="Don't forget area code"
                            type="tel"
                          />
                        </FormControl>
                      </InputGroup>

                      <InputGroup minW={{ base: '100%', md: '50%' }} m={3}>
                        <InputLeftAddon
                          pointerEvents="none"
                          fontSize="1.2rem"
                          children={<FontAwesomeIcon icon={faEnvelopeOpen} />}
                          w="4rem"
                        />
                        <FormControl id="email" name="email" isRequired>
                          <Input placeholder="Please use valid email" />
                        </FormControl>
                      </InputGroup>
                    </Container>

                    <HStack>
                      <InputGroup minW={{ base: '100%', md: '50%' }}>
                        <FormControl
                          as="fieldset"
                          id="importance-level"
                          name="priority"
                          isRequired
                        >
                          <Text my={3}>
                            Urgency / importance-level of request?
                          </Text>
                          <RadioGroup label="urgency/importance-level">
                            <Stack spacing={3}>
                              <Box as="span">
                                <Radio value="3">As soon as possible</Radio>
                              </Box>
                              <Box as="span">
                                <Radio value="2">Somepoint soon</Radio>
                              </Box>
                              <Box as="span">
                                <Radio value="1">Not sure when</Radio>
                              </Box>
                              <Box as="span">
                                <Radio value="0">Just checking</Radio>
                              </Box>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </InputGroup>
                    </HStack>
                    <InputGroup minW={{ base: '100%', md: '50%' }}>
                      <FormControl
                        // as="textarea"
                        id="message-body"
                        name="message"
                        isRequired
                      >
                        <Textarea
                          placeholder="Please briefly explain your needs"
                          rows="8"
                        />
                      </FormControl>
                    </InputGroup>
                  </VStack>
                </ModalBody>

                {/* <Text textAlign="center">
            Thanks for messaging - will get back ASAP!
          </Text> */}
                <ModalFooter>
                  <HStack
                    flex="1"
                    direction="row"
                    align="right"
                    justify="flex-end"
                  >
                    <Button colorScheme="blue" type="submit">
                      Submit
                    </Button>
                    <Button
                      // colorScheme="blue"
                      color="secondary"
                      mr={3}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                  </HStack>
                </ModalFooter>
              </form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default QuoteModal;
