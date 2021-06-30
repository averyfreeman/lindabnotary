// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export const formikValues = useFormik({
//   initialValues: {
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     priority: 0,
//     message: '',
//   },
//   validationSchema: Yup.object({
//     firstName: Yup.string()
//       .matches(nameRegEx, `Can't contain numbers/letters/spaces`)
//       .max(18, 'Must be 18 letters or less')
//       .required('First name is required')
//       .strict(),
//     lastName: Yup.string()
//       .matches(nameRegEx, `Can't contain numbers/letters/spaces`)
//       .max(24, `Must be 24 letters or less`)
//       .required(`Last name is required`)
//       .strict(),
//     phone: Yup.string()
//       .matches(phoneRegEx, `That doesn't go in phone number...`)
//       .min(12, `13 characters, please`)
//       .max(13, `13 characters, please`)
//       .required(`Phone number is required`),
//     email: Yup.string()
//       .email(`That's not an email address!`)
//       .required(`Email address is required`),
//     message: Yup.string()
//       .min(50, `keep typing, please...`)
//       .required(`Short message is required`),
//   }),
//   onSubmit: values => {
//     alert(JSON.stringify(values, null, 2));
//   },
//   resetForm: () => formik.resetForm(),
// });
