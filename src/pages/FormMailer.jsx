import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Text,
  Textarea,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCheckSquare,
  faCommentsDollar,
  faExclamationCircle,
  faExclamationTriangle,
  faHeadSideCough,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';
import FadeScaleXWrapper from '../components/FadeScaleXWrapper';
import ErrorMsgAlert from '../pageComponents/ErrorMsgAlert';
import ErrOrOkAlert from '../pageComponents/ErrOrOkAlert';

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
  firstName: Yup.string()
    .matches(nameRegEx, `Must be only letters or hyphen`)
    .max(18, `Must be 18 letters or less`)
    .required(`First name is required`),
  lastName: Yup.string()
    .matches(nameRegEx, `Must be only letters or hyphen`)
    .max(24, `Must be 24 letters or less`)
    .required(`Last name is required`),
  tel: Yup.string()
    .matches(phoneRegEx, `That doesn't go in phone number...`)
    .min(12, `12 characters, please`)
    .max(12, `12 characters, please`)
    .required(`Phone number is required`),
  email: Yup.string()
    .email(`That's not an email address!`)
    .required(`Email address is required`),
  message: Yup.string()
    .min(50, `Please include more details...`)
    .required(`Short message is required`),
});

const FormMailer = props => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return (
    <Box h="100vh">
      <Box as="div" mt={40} boxSizing="border-box" bg="#333">
        <AnimatePresence>
          <FadeScaleXWrapper duration={1} key={location.pathname}>
            <VStack
              align={{ base: 'flex-start', md: 'center' }}
              bg="#333"
              borderRadius="lg"
              direction="column"
              flex={1}
              justify="space-evenly"
              p={{ base: 0, sm: 4, md: 8 }}
              spacing={{ base: 1, sm: 3, md: 6 }}
              w={{
                base: '99vw',
                md: '80vw',
                lg: '70vw',
                xl: '60vw',
                '2xl': '50vw',
              }}
            >
              <Box alignSelf={{ base: 'center', sm: 'inherit' }}>
                <FontAwesomeIcon icon={faCommentsDollar} size="5x" />
                <Text fontsize="5x">Let's get you a quote!</Text>
              </Box>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
              >
                {props => (
                  <Form onSubmit={props.handleSubmit} color="black">
                    <InputGroup
                      borderRadius="lg"
                      size={{ base: 'sm', md: 'lg' }}
                      htmlFor="firstName"
                    >
                      <Wrap
                        align={{ base: 'flex-start', md: 'flex-end' }}
                        flex={{ base: 0, md: 1 }}
                        justify="space-evenly"
                      >
                        <FormLabel
                          alignSelf="center"
                          flex={1}
                          justifySelf="flex-start"
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
                            w={{ base: '18rem', md: '22rem' }}
                            name="firstName"
                            onBlur={props.handleBlur}
                            onChange={props.handleChange}
                            placeholder="enter first name"
                            type="text"
                            value={props.values.firstName}
                          />
                          <FormHelperText align="center">
                            e.g. "Jane"
                          </FormHelperText>
                        </FormControl>
                      </Wrap>
                    </InputGroup>

                    <ErrOrOkAlert
                      errorText={props.errors.firstName}
                      iconError={faExclamationCircle}
                      iconErrorColor="#F56565"
                      iconErrorSize="lg"
                      iconOk={faCheckSquare}
                      iconOkColor="#48BB78"
                      iconOkSize="lg"
                      name="firstName"
                      touched={props.touched.firstName}
                    />

                    <InputGroup
                      borderRadius="lg"
                      size={{ base: 'sm', md: 'lg' }}
                      htmlFor="lastName"
                    >
                      <Wrap
                        align={{ base: 'flex-start', md: 'flex-end' }}
                        flex={{ base: 0, md: 1 }}
                        justify="space-evenly"
                      >
                        <FormLabel
                          alignSelf="center"
                          flex={1}
                          justifySelf="flex-start"
                          htmlFor="lastName"
                          fontSize={{ base: 'lg', md: 'xl' }}
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
                            w={{ base: '18rem', md: '22rem' }}
                            name="lastName"
                            onBlur={props.handleBlur}
                            onChange={props.handleChange}
                            placeholder="enter first name"
                            type="text"
                            value={props.values.lastName}
                          />
                          <FormHelperText align="center">
                            e.g. "Homebeyer"
                          </FormHelperText>
                        </FormControl>
                      </Wrap>
                    </InputGroup>

                    <ErrOrOkAlert
                      errorText={props.errors.lastName}
                      iconError={faExclamationTriangle}
                      iconErrorColor="#F56565"
                      iconErrorSize="lg"
                      iconOk={faCheckCircle}
                      iconOkColor="#48BB78"
                      iconOkSize="lg"
                      name="lastName"
                      touched={props.touched.lastName}
                    />

                    <InputGroup
                      borderRadius="lg"
                      size={{ base: 'sm', md: 'lg' }}
                      htmlFor="tel"
                    >
                      <Wrap
                        align={{ base: 'flex-start', md: 'flex-end' }}
                        flex={{ base: 0, md: 1 }}
                        justify="space-evenly"
                      >
                        <FormLabel
                          alignSelf="center"
                          flex={1}
                          justifySelf="flex-start"
                          htmlFor="tel"
                          fontSize={{ base: 'lg', md: 'xl' }}
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
                            w={{ base: '18rem', md: '22rem' }}
                            name="tel"
                            onBlur={props.handleBlur}
                            onChange={props.handleChange}
                            placeholder="enter telephone number"
                            type="text"
                            value={props.values.tel}
                          />
                          <FormHelperText align="center">
                            e.g. "206-555-1234"
                          </FormHelperText>
                        </FormControl>
                      </Wrap>
                    </InputGroup>

                    <ErrOrOkAlert
                      errorText={props.errors.tel}
                      iconError={faExclamationCircle}
                      iconErrorColor="#F56565"
                      iconErrorSize="lg"
                      iconOk={faCheckSquare}
                      iconOkColor="#48BB78"
                      iconOkSize="lg"
                      name="tel"
                      touched={props.touched.tel}
                    />

                    <InputGroup
                      borderRadius="lg"
                      size={{ base: 'sm', md: 'lg' }}
                      htmlFor="email"
                    >
                      <Wrap
                        align={{ base: 'flex-start', md: 'flex-end' }}
                        flex={{ base: 0, md: 1 }}
                        justify="space-evenly"
                      >
                        <FormLabel
                          alignSelf="flex-start"
                          flex={1}
                          justifySelf="flex-start"
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
                            placeholder="enter email address"
                            type="text"
                            value={props.values.email}
                            w={{ base: '18rem', md: '22rem' }}
                          />
                          <FormHelperText align="center">
                            e.g. "jane.homebeyer@yahoo.com"
                          </FormHelperText>
                        </FormControl>
                      </Wrap>
                    </InputGroup>

                    <ErrOrOkAlert
                      errorText={props.errors.email}
                      iconError={faExclamationTriangle}
                      iconErrorColor="#F56565"
                      iconErrorSize="lg"
                      iconOk={faCheckCircle}
                      iconOkColor="#48BB78"
                      iconOkSize="lg"
                      name="email"
                      touched={props.touched.email}
                    />

                    <InputGroup
                      borderRadius="lg"
                      htmlFor="message"
                      size={{ base: 'sm', md: 'lg' }}
                    >
                      <Wrap
                        align={{ base: 'flex-start', md: 'center' }}
                        direction={{ base: 'flex-start', md: 'column' }}
                        flex={{ base: 0, md: 1 }}
                        justify="space-evenly"
                      >
                        <FormLabel
                          alignSelf="flex-start"
                          flex={1}
                          justifySelf="flex-start"
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
                            placeholder="Please explain what you need help with"
                            rows="8"
                            type="text"
                            value={props.values.message}
                            w={{ base: '18rem', md: '100%' }}
                          />
                          <FormHelperText align="center">
                            e.g. "Can you travel to Eatonville? How much it
                            would cost?"
                          </FormHelperText>
                        </FormControl>
                      </Wrap>
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
      </Box>
    </Box>
  );
};

export default FormMailer;
