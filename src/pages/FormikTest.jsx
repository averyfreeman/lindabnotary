// import '../styles/FormMailer.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const nameRegEx = '^[aA-zZs]+$';
const phoneRegEx = `^[0-9s -]+$`;

const TestSchema = Yup.object({
  name: Yup.string()
    .matches(nameRegEx, `Can't contain numbers/letters/spaces`)
    .max(18, `Must be 18 letters or less`)
    .required(`First name is required`)
    .strict(),
  email: Yup.string()
    .email(`That's not an email address!`)
    .required(`Email address is required`),
  phone: Yup.string()
    .matches(phoneRegEx, `That doesn't go in phone number...`)
    .min(12, `13 characters, please`)
    .max(13, `13 characters, please`),
  question: Yup.string()
    .min(25, `Keep going...`)
    .required(`Short question is required`),
});

const colorsArr = ['red', 'green', 'blue'];

const QuestionFunc = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const FormikTest = () => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return (
    <Box h="100vh">
      <Box as="div" h="100%" mt={20} boxSizing="border-box" bg="#333">
        <VStack
          bg="#333"
          align="center"
          direction="column"
          flex={1}
          // w="80%"
          justify="space-around"
          p={{ base: 0, sm: 4, md: 8 }}
          spacing={6}
        >
          <FontAwesomeIcon icon={faExclamationTriangle} size="5x" />
          <Text fontsize="5x" my={3}>
            Formik Test
          </Text>
          <Formik
            initialValues={{
              color: 'red',
              email: '',
              name: '',
              phone: '',
              question: '',
            }}
            validationSchema={TestSchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              console.log(values, actions);
            }}
          >
            {(props: FormikProps<any>) => (
              <Box bg="black">
                <Form>
                  <InputGroup name="name">
                    <FormLabel>Name:</FormLabel>
                    <Field
                      style={{ backgroundColor: 'darkBlue' }}
                      name="name"
                      placeholder="Enter name here"
                      type="text"
                      // stay vertical
                    />
                  </InputGroup>

                  <Field
                    as="select"
                    name="color"
                    style={{ backgroundColor: '#333', color: 'yellow' }}
                  >
                    <Select placeholder="Choose a color">
                      <option style={{ color: 'red' }} value="red">
                        red
                      </option>
                      <option style={{ color: 'green' }} value="green">
                        green
                      </option>
                      <option style={{ color: 'blue' }} value="blue">
                        blue
                      </option>
                    </Select>
                  </Field>

                  <Field name="phone">
                    {({
                      field, // {"phone, value, onChange, onBlur}
                      form: { touched, errors },
                      meta,
                    }) => (
                      <Box>
                        <InputGroup>
                          <Input
                            type="tel"
                            placeholder="Chakra-UI Input phone"
                            {...field}
                          />
                        </InputGroup>
                        {meta.touched && meta.error && (
                          <Box className="error">{meta.error}</Box>
                        )}
                      </Box>
                    )}
                  </Field>
                  <Field
                    component={QuestionFunc}
                    name="question"
                    placeholder="Type question here"
                    rows="8"
                    style={{ backgroundColor: '#333', color: colorsArr[1] }}
                  />
                  <HStack flex={1} justify="flex-end" direction="row" my={3}>
                    <Button type="submit">Submit Button</Button>
                  </HStack>
                </Form>
              </Box>
            )}
          </Formik>
        </VStack>
      </Box>
    </Box>
  );
};

export default FormikTest;
