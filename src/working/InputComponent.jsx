// import React, { Fragment } from 'react';
// import {
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Input,
//   InputGroup,
//   Text,
//   Textarea,
//   VStack,
//   Wrap,
// } from '@chakra-ui/react';
// import { withFormik } from 'formik';
// import ErrOrOkAlert from './ErrOrOkAlert';

// // in parent:

// const Parent = () => {
//   <Fragment>
//     <InputComponent
//       htmlFor="firstName"
//       formLabel="First Name:"
//       isInvalid={props.errors.firstName}
//       errorText={props.errors.firstName}
//       errorIcon={faExclamationCircle}
//       errorIconColor="#F56565"
//       errorIconSize="lg"
//       helperText="e.g. Jane"
//       isRequired={true}
//       name="firstName"
//       onBlur={props.handleBlur}
//       onChange={props.handleChange}
//       okIcon={faCheckSquare}
//       okIconColor="#48BB78"
//       okIconSize="lg"
//       placeholder="enter first name here"
//       touched={props.touched.firstName}
//       type="text"
//     />
//   </Fragment>;
// };

// const InputComponent = props => {
//   // {React.Children.map => {
//   //   React.cloneElement(child, {propsToPass: 'toChildren'}
//   // }
//   console.log(props.handleBlur);
//   const errKey = `${props.htmlFor}-err`;
//   const okKey = `${props.htmlFor}-ok`;
//   return (
//     <Fragment>
//       <VStack h="8rem">
//         <InputGroup
//           borderRadius="lg"
//           size={{ base: 'sm', md: 'lg' }}
//           htmlFor={props.htmlFor}
//         >
//           <Wrap
//             align={{ base: 'flex-start', md: 'flex-end' }}
//             flex={{ base: 0, md: 1 }}
//             justify="space-evenly"
//           >
//             <FormLabel
//               align="center"
//               flex={1}
//               justifySelf="flex-start"
//               htmlFor={props.htmlFor}
//               fontSize={{ base: 'lg', md: 'xl' }}
//             >
//               First name
//             </FormLabel>
//             <FormControl
//               isInvalid={props.isInvalid}
//               errortext={props.errorText}
//               isRequired={props.isRequired}
//             >
//               <Input
//                 fontSize={{ base: 'lg', md: 'xl' }}
//                 id="firstName"
//                 w={{ base: '18rem', md: '22rem' }}
//                 name={props.name}
//                 onBlur={props.handleBlur}
//                 onChange={props.handleChange}
//                 placeholder={props.placeholder}
//                 type={props.type}
//                 value={props.value}
//               />
//             </FormControl>
//           </Wrap>
//         </InputGroup>

//         <ErrOrOkAlert
//           error={props.errorText}
//           errKey={props.errKey}
//           iconError={props.errorIcon}
//           iconErrorColor={props.errorIconColor}
//           iconErrorSize={props.errorIconSize}
//           iconOk={props.okIcon}
//           iconOkColor={props.okIconColor}
//           iconOkSize={props.okIconSize}
//           name={props.htmlFor}
//           okKey={props.okKey}
//           touched={props.touched}
//         />
//       </VStack>
//     </Fragment>
//   );
// };

// export default InputComponent;
