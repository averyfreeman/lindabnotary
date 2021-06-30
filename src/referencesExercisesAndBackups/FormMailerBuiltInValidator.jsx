import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Alert,
  AlertDescription,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSkullCrossbones,
  faHeadSideCough,
  faBug,
  faExclamationTriangle,
  faQuran,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
// import '../styles/FormMailer.css';
import FadeScaleYWrapper from '../components/FadeScaleYWrapper';
import ErrorAlert from '../components/ErrorAlert';
import OkAlert from '../components/OkAlert';

// formik note: errors object must be named 'errors'
export const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 20) {
    errors.firstName = 'too long - 20 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 25) {
    errors.lastName = 'too long - 25 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email invalid';
  }
  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 40) {
    errors.message = 'keep typing...';
  }

  return errors;
};

// const sliderValues = {
//   min: {
//     message: 'Just checking',
//     value: 0,
//   },
//   low: {
//     message: 'Not sure when',
//     value: 1,
//   },
//   high: {
//     message: 'Somepoint soon',
//     value: 2,
//   },
//   max: {
//     message: 'As soon as possible',
//     value: 3,
//   },
// };

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
    validate,
    // onBlur:
    // handleReset: () => {void},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const handleSliderChange = (event, value) => {
  //   setFieldValue('slider', value);
  // };

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
                    Enter first name
                  </FormLabel>
                  <Input
                    id="firstName"
                    // maxW={{ base: false, md: '22rem' }}
                    w="22rem"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="firstName here"
                    type="text"
                    value={formik.values.firstName}
                  />
                </Wrap>
              </InputGroup>

              <AnimatePresence>
                {formik.errors.firstName ? (
                  <ErrorAlert
                    desc={formik.errors.firstName}
                    errorKey={formik.errors.firstName}
                    iconColor="#F56565"
                    icon={faExclamationTriangle}
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
                    Enter last name
                  </FormLabel>
                  <Input
                    id="lastName"
                    w="22rem"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="lastName here"
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
                    icon={faBug}
                    size="lg"
                  />
                ) : (
                  <OkAlert
                    errorKey={formik.errors.lastname}
                    iconColor="#48BB78"
                    icon={faCheckCircle}
                    size="lg"
                  />
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
                    Enter email
                  </FormLabel>
                  <Input
                    id="email"
                    w="22rem"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder="email here"
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
                  <OkAlert
                    errorKey={formik.errors.email}
                    iconColor="#48BB78"
                    icon={faCheckCircle}
                    size="lg"
                  />
                )}
              </AnimatePresence>

              {/* priority slider - implement later */}

              {/* <InputGroup size="lg" htmlFor="priority">
            <Wrap
         align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'flex-start', md: 'column' }}
                  flex={{ base: 0, md: 1 }}
                  justify="space-evenly"
            >
            <FormLabel
            flex="1"
                    justifySelf="flex-start"
            fontSize="lg" mx={2}>
              Choose priority level:
            </FormLabel>
            <Input
              id="priority"
               minW="22rem"
              name="priority"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="priority here"
              type="priority"
              value={formik.values.priority}
            />
            <FormControl
              as="fieldset"
              id="importance-level"
              name="priority"
              isRequired
            >
              <Text my={3}>Urgency / importance-level of request?</Text>
              <Stack spacing={3}>
                <Slider
                  defaultValue={0}
                  min={sliderValues.min.value}
                  minH={32}
                  max={sliderValues.max.value}
                  orientation="vertical"
                  step={1}
                >
                  {console.log(sliderValues)}
                  <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </Stack>
            </FormControl>
            </Wrap>
          </InputGroup>

          <AnimatePresence>
            {formik.errors.priority ? (
              <ErrorAlert
                desc={formik.errors.priority}
                errorKey={formik.errors.priority}
                iconColor="#F56565"
                icon={faQuran}
                size="lg"
              />
            ) : (
              <OkAlert
                errorKey={formik.errors.priority}
                iconColor="#48BB78"
                icon={faCheckCircle}
                size="lg"
              />
            )}
          </AnimatePresence> */}

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
                    Enter message
                  </FormLabel>
                  <Textarea
                    cols="40"
                    id="message"
                    w="22rem"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder=""
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
                  <OkAlert
                    errorKey={formik.errors.message}
                    iconColor="#48BB78"
                    icon={faCheckCircle}
                    size="lg"
                  />
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
                  onClick={formik.handleReset}
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
