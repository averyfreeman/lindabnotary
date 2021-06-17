// import '../styles/FormMailer.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSkullCrossbones,
  faHeadSideCough,
  faQuestionCircle,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import FadeScaleYWrapper from '../components/FadeScaleYWrapper';
import ErrorAlert from '../components/ErrorAlert';
import OkAlert from '../components/OkAlert';

const FormMailer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      priority: 0,
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(18, 'Must be 18 letters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(24, 'Must be 24 letters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email(`That's not an email address!`)
        .required(`Must be a valid email`),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    resetForm: () => formik.resetForm(),
  });

  console.log(formik.resetForm);

  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return (
    <Box h="100vh">
      <Box as="div" mt={40} boxSizing="border-box" bg="#333">
        <form onSubmit={formik.handleSubmit} color="black">
          <FadeScaleYWrapper duration={5} key={location.pathname}>
            <VStack
              align={{ base: 'flex-start', md: 'center' }}
              bg="#333"
              direction="column"
              flex={1}
              // w="80%"
              justify="space-evenly"
              p={{ base: 0, sm: 4, md: 8 }}
              spacing={{ base: 1, sm: 3, md: 6 }}
            >
              <InputGroup size="lg" htmlFor="firstName">
                <Wrap
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'flex-start', md: 'column' }}
                  flex={{ base: 0, md: 1 }}
                  justify="space-evenly"
                >
                  <FormLabel
                    flex="1"
                    justifySelf="flex-start"
                    htmlFor="firstName"
                    fontSize="lg"
                    mx={2}
                  >
                    First name
                  </FormLabel>
                  <Input
                    id="firstName"
                    // maxW={{ base: false, md: '22rem' }}
                    w="22rem"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="Please enter your first name here"
                    type="text"
                    value={formik.values.firstName}
                  />
                </Wrap>
              </InputGroup>

              <AnimatePresence>
                {formik.errors.firstName && formik.touched.firstName ? (
                  <ErrorAlert
                    desc={formik.errors.firstName}
                    errorKey={formik.errors.firstName}
                    iconColor="#F56565"
                    icon={faQuestionCircle}
                    size="lg"
                  />
                ) : (
                  <OkAlert
                    errorKey={formik.errors.firstName}
                    iconColor="#48BB78"
                    icon={faCheckCircle}
                    size="lg"
                  />
                )}
              </AnimatePresence>

              <InputGroup size="lg" htmlFor="lastName">
                <Wrap
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'flex-start', md: 'column' }}
                  flex={{ base: 0, md: 1 }}
                  justify="space-evenly"
                >
                  <FormLabel
                    flex="1"
                    justifySelf="flex-start"
                    htmlFor="lastName"
                    fontSize="lg"
                    mx={2}
                  >
                    Last name
                  </FormLabel>
                  <Input
                    id="lastName"
                    w="22rem"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="Please enter your last name here"
                    type="text"
                    value={formik.values.lastName}
                  />
                </Wrap>
              </InputGroup>

              <AnimatePresence>
                {formik.errors.lastName ? (
                  <ErrorAlert
                    desc={formik.errors.lastName}
                    errorKey={formik.errors.lastName}
                    iconColor="#F56565"
                    icon={faExclamationTriangle}
                    size="lg"
                  />
                ) : (
                  formik.touched.lastName && (
                    <OkAlert
                      errorKey={formik.errors.lastname}
                      iconColor="#48BB78"
                      icon={faCheckCircle}
                      size="lg"
                    />
                  )
                )}
              </AnimatePresence>

              <InputGroup size="lg" htmlFor="email">
                <Wrap
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'flex-start', md: 'column' }}
                  flex={{ base: 0, md: 1 }}
                  justify="space-evenly"
                >
                  <FormLabel
                    flex="1"
                    justifySelf="flex-start"
                    fontSize="lg"
                    mx={2}
                  >
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    w="22rem"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="Please enter your email here"
                    type="email"
                    value={formik.values.email}
                  />
                </Wrap>
              </InputGroup>

              <AnimatePresence>
                {formik.errors.email ? (
                  <ErrorAlert
                    desc={formik.errors.email}
                    errorKey={formik.errors.email}
                    iconColor="#F56565"
                    icon={faSkullCrossbones}
                    size="lg"
                  />
                ) : (
                  formik.touched.email && (
                    <OkAlert
                      errorKey={formik.errors.email}
                      iconColor="#48BB78"
                      icon={faCheckCircle}
                      size="lg"
                    />
                  )
                )}
              </AnimatePresence>

              <InputGroup size="lg" htmlFor="message">
                <Wrap
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'flex-start', md: 'column' }}
                  flex={{ base: 0, md: 1 }}
                  justify="space-evenly"
                >
                  <FormLabel
                    flex="1"
                    justifySelf="flex-start"
                    flex="1"
                    justifySelf="flex-start"
                    htmlFor="message"
                    mx={2}
                  >
                    Description
                  </FormLabel>
                  <Textarea
                    cols="40"
                    id="message"
                    w="22rem"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="Please explain what you need help with"
                    rows="8"
                    type="text"
                    value={formik.values.message}
                  />
                </Wrap>
              </InputGroup>

              <AnimatePresence>
                {formik.errors.message ? (
                  <ErrorAlert
                    desc={formik.errors.message}
                    errorKey={formik.errors.message}
                    iconColor="#F56565"
                    icon={faHeadSideCough}
                    size="lg"
                  />
                ) : (
                  formik.touched.message && (
                    <OkAlert
                      errorKey={formik.errors.message}
                      iconColor="#48BB78"
                      icon={faCheckCircle}
                      size="lg"
                    />
                  )
                )}
              </AnimatePresence>

              <Box alignSelf="center">
                <Button
                  colorScheme="blue"
                  disabled={!(formik.isValid && formik.dirty)}
                  name="submit"
                  type="submit"
                  m={6}
                  minW="5rem"
                >
                  Submit
                </Button>
                <Button
                  secondary
                  colorScheme="blue"
                  disabled={!formik.dirty}
                  name="reset"
                  onClick={formik.resetForm}
                  type="reset"
                  m={6}
                  minW="5rem"
                >
                  Reset
                </Button>
              </Box>
            </VStack>
          </FadeScaleYWrapper>
        </form>
      </Box>
    </Box>
  );
};

export default FormMailer;
