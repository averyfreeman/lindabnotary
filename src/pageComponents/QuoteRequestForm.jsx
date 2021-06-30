import React, { Fragment, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence } from 'framer-motion';
import {
  faCheckCircle,
  faCheckSquare,
  faExclamationCircle,
  faExclamationTriangle,
  faHeadSideCough,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';
import { fetchWrapper } from '../lib/fetchWrapper';
import FadeScaleXWrapper from '../components/FadeScaleXWrapper';
import ErrorMsgAlert from '../pageComponents/ErrorMsgAlert';
import ErrOrOkAlert from '../pageComponents/ErrOrOkAlert';
import {
  modal40of80ResPoints,
  modalTextareaResPoints,
} from 'styles/breakpointValues';

const nameRegEx = '^[aA-zZs-]+$';
const phoneRegEx = `^[0-9s -]+$`;

const initialValues = {
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  // firstName: Yup.string()
  //   .matches(nameRegEx, `Must be only letters or hyphen`)
  //   .max(18, `Must be 18 letters or less`)
  //   .required(`First name is required`),
  // lastName: Yup.string()
  //   .matches(nameRegEx, `Must be only letters or hyphen`)
  //   .max(24, `Must be 24 letters or less`)
  //   .required(`Last name is required`),
  // tel: Yup.string()
  //   .matches(phoneRegEx, `That doesn't go in phone number...`)
  //   .min(12, `12 characters, please`)
  //   .max(12, `12 characters, please`)
  //   .required(`Phone number is required`),
  // email: Yup.string()
  //   .email(`That's not an email address!`)
  //   .required(`Email address is required`),
  // message: Yup.string()
  //   .min(50, `Please include more details...`)
  //   .required(`Short message is required`),
});

const FormMailer = props => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();

  const handleOnMouseDown = e => {
    e.preventDefault();
  };

  // useMemo(() =>
  return (
    <Fragment>
      <AnimatePresence>
        <FadeScaleXWrapper duration={1} key={location.pathname}>
          <VStack
            align={{ base: 'flex-start', md: 'center' }}
            borderRadius="lg"
            direction="column"
            flex={1}
            justify="space-evenly"
            p={{ base: 0, sm: 4, md: 8 }}
            spacing={{ base: 1, sm: 3, md: 6 }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                fetchWrapper
                  .post('/requestmailer.php', values)
                  .then(data =>
                    alert(
                      `You sent: ${JSON.stringify(
                        data
                      )} "... We'll get back to you shortly!  Thanks!`
                    )
                  )
                  .catch(error => alert('Http error: ', error));
                actions.setSubmitting(false);
                props.onClose();
              }}
            >
              {props => (
                <Form onSubmit={props.handleSubmit} color="black">
                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 5, md: 10 }}
                  >
                    <Flex
                      direction="column"
                      align="flex-start"
                      justify="flex-start"
                      // vert
                    >
                      <InputGroup
                        borderRadius="lg"
                        htmlFor="firstName"
                        size={{ base: 'sm', md: 'lg' }}
                      >
                        <Flex direction="column" justify="center">
                          <FormLabel
                            htmlFor="firstName"
                            fontSize={{ base: 'lg', md: 'xl' }}
                          >
                            First name
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.firstName}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: 'lg', md: 'xl' }}
                              id="firstName"
                              w={modal40of80ResPoints}
                              name="firstName"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              // onMouseDown={handleOnMouseDown}
                              placeholder="enter first name here"
                              type="text"
                              value={props.values.firstName}
                            />
                            <FormHelperText align="center">
                              e.g. "Jane"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.firstName}
                        iconError={faExclamationCircle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckSquare}
                        iconOkColor="#48BB78"
                        iconOkSize="lg"
                        mt={5}
                        name="firstName"
                        touched={props.touched.firstName}
                        w={modal40of80ResPoints}
                      />
                    </Flex>

                    <Flex
                      direction="column"
                      align="flex-start"
                      justify="flex-start"
                      // vert
                    >
                      <InputGroup
                        size={{ base: 'sm', md: 'lg' }}
                        htmlFor="lastName"
                      >
                        <Flex direction="column" justify="center">
                          <FormLabel
                            fontSize={{ base: 'lg', md: 'xl' }}
                            htmlFor="lastName"
                          >
                            Last name:
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.lastName}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: 'lg', md: 'xl' }}
                              id="lastName"
                              name="lastName"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              // onMouseDown={handleOnMouseDown}
                              placeholder="enter last name here"
                              type="text"
                              value={props.values.lastName}
                              w={modal40of80ResPoints}
                            />
                            <FormHelperText align="center">
                              e.g. "Homebeyer"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.lastName}
                        iconError={faExclamationTriangle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckCircle}
                        iconOkColor="#48BB78"
                        iconOkSize="lg"
                        mt={5}
                        name="lastName"
                        touched={props.touched.lastName}
                        w={modal40of80ResPoints}
                      />
                    </Flex>
                  </Stack>

                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    py={{ base: 3, md: 5 }}
                    spacing={{ base: 5, md: 10 }}
                  >
                    <Flex
                      direction="column"
                      align="flex-start"
                      justify="flex-start"
                      // vert
                    >
                      <InputGroup htmlFor="tel" size={{ base: 'sm', md: 'lg' }}>
                        <Flex direction="column" justify="center">
                          <FormLabel
                            fontSize={{ base: 'lg', md: 'xl' }}
                            htmlFor="tel"
                          >
                            Phone Number:
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.tel}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: 'lg', md: 'xl' }}
                              id="tel"
                              name="tel"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              // onMouseDown={handleOnMouseDown}
                              placeholder="enter telephone number here"
                              type="text"
                              value={props.values.tel}
                              w={modal40of80ResPoints}
                            />
                            <FormHelperText align="center">
                              e.g. "206-555-1234"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.tel}
                        iconError={faExclamationCircle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckSquare}
                        iconOkColor="#48BB78"
                        iconOkSize="lg"
                        mt={5}
                        name="tel"
                        touched={props.touched.tel}
                        w={modal40of80ResPoints}
                      />
                    </Flex>

                    <Flex
                      direction="column"
                      align="flex-start"
                      justify="flex-start"
                      // vert
                    >
                      <InputGroup
                        borderRadius="lg"
                        htmlFor="email"
                        size={{ base: 'sm', md: 'lg' }}
                      >
                        <Flex direction="column" justify="center">
                          <FormLabel
                            htmlFor="email"
                            fontSize={{ base: 'lg', md: 'xl' }}
                          >
                            Email Address:
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.email}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: 'lg', md: 'xl' }}
                              id="email"
                              name="email"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              // onMouseDown={handleOnMouseDown}
                              placeholder="enter email address here"
                              type="text"
                              value={props.values.email}
                              w={modal40of80ResPoints}
                            />
                            <FormHelperText align="center">
                              e.g. "jane.homebeyer@yahoo.com"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.email}
                        iconError={faExclamationTriangle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckCircle}
                        iconOkColor="#48BB78"
                        iconOkSize="lg"
                        mt={5}
                        name="email"
                        touched={props.touched.email}
                        w={modal40of80ResPoints}
                      />
                    </Flex>
                  </Stack>

                  <InputGroup
                    borderRadius="lg"
                    htmlFor="message"
                    size={{ base: 'sm', md: 'lg' }}
                  >
                    <Flex direction="column" justify="center">
                      <FormLabel
                        htmlFor="message"
                        fontSize={{ base: 'lg', md: 'xl' }}
                      >
                        Message:
                      </FormLabel>
                      <FormControl
                        isInvalid={props.errors.message}
                        isRequired={true}
                      >
                        <Textarea
                          fontSize={{ base: 'lg', md: 'xl' }}
                          id="message"
                          name="message"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          // onMouseDown={handleOnMouseDown}
                          placeholder="Briefly explain what you need help with"
                          rows="8"
                          type="text"
                          value={props.values.message}
                          minW={modalTextareaResPoints}
                          // w={modalResPoints}
                          // w="50vw"
                        />
                        <FormHelperText align="center">
                          e.g. "Can you travel to Snoqualmie Pass? How much it
                          would cost?"
                        </FormHelperText>
                      </FormControl>
                    </Flex>
                  </InputGroup>

                  <ErrorMsgAlert
                    iconDead={faSkullCrossbones}
                    iconDeadColor="#F56565"
                    iconDeadSize="lg"
                    iconOk={faCheckSquare}
                    iconOkColor="#48BB78"
                    iconOkSize="lg"
                    iconUnfinished={faHeadSideCough}
                    iconUnfinishedColor="#FF9900"
                    iconUnfinishedSize="lg"
                    errorText={props.errors.message}
                    mt={5}
                    name="message"
                    touched={props.touched.message}
                  />

                  <Box
                    align="right"
                    display="block"
                    maxW={{ base: '18rem', sm: '24rem', md: '100%' }}
                  >
                    <Button
                      colorScheme="blue"
                      disabled={!(props.isValid && props.dirty)}
                      name="submit"
                      onMouseDown={handleOnMouseDown}
                      type="submit"
                      m={4}
                      minW="5rem"
                    >
                      Submit
                    </Button>
                    <Button
                      secondary
                      colorScheme="blue"
                      disabled={!props.dirty}
                      name="reset"
                      onClick={props.resetForm}
                      onMouseDown={handleOnMouseDown}
                      type="reset"
                      m={4}
                      minW="5rem"
                    >
                      Reset
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </VStack>
        </FadeScaleXWrapper>
      </AnimatePresence>
      {/* </Box>
    </Box> */}
    </Fragment>
    // )
  );
};

export default FormMailer;
