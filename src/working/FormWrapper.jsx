import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const nameRegEx = '^[aA-zZs-]+$';
const phoneRegEx = `^[0-9s \-]+$`;

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(nameRegEx, `Must be only letters or hyphen`)
    .max(18, `Must be 18 letters or less`)
    .required(`First name is required`),
  // .strict(),
  lastName: Yup.string()
    .matches(nameRegEx, `Must be only letters or hyphen`)
    .max(24, `Must be 24 letters or less`)
    .required(`Last name is required`),
  // .strict(),
  phone: Yup.string()
    .matches(phoneRegEx, `That doesn't go in phone number...`)
    .min(12, `13 characters, please`)
    .max(12, `13 characters, please`)
    .required(`Phone number is required`),
  email: Yup.string()
    .email(`That's not an email address!`)
    .required(`Email address is required`),
  message: Yup.string()
    .min(50, `Please include more details...`)
    .required(`Short message is required`),
});

export default function FormWrapper(props) {
  const { children } = props;
  const withFormik = {
    initialValues: initialValues,
    validationSchema: validationSchema,
    handleSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
  }(children);
}

// export default function FormWrapper(props) {
//   const { children } = props;
//   const withFormik = {
//     initialValues: initialValues,
//     validationSchema: validationSchema,
//     handleSubmit: (values, actions) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         actions.setSubmitting(false);
//       }, 1000);
//     },
//   }(children);
// }
