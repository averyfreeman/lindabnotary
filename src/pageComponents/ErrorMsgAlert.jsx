import React, { Fragment, useEffect, useState } from 'react';
import ErrorAlert from '../components/ErrorAlert';
import OkAlert from '../components/OkAlert';

let errKey = '';
let okKey = '';
let unfinishedKey = '';

const ErrorMsgAlert = props => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const errKey = `${props.name.slice(0, 5)}-field-errKey`;
    /* eslint-disable no-unused-vars */
    const okKey = `${props.name.slice(0, 5)}-field-okKey`;
    /* eslint-disable no-unused-vars */
    const unfinishedKey = `${props.name.slice(0, 5)}-field-unfinishedKey`;
    if (!isVisible && props.touched && props.errorText) {
      setTimeout(() => {
        setIsVisible(true);
      }, 20000);
    }
  }, [props.name, props.touched, props.errorText, isVisible, setIsVisible]);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  if (isVisible && props.touched) {
    if (props.errorText && props.errorText.includes('required')) {
      return (
        <Fragment>
          <ErrorAlert
            errorText={props.errorText}
            errorKey={errKey}
            icon={props.iconDead}
            iconColor={props.iconDeadColor}
            handleIsVisible={handleIsVisible}
            size={props.iconDeadSize}
            {...props}
          />
        </Fragment>
      );
    } else if (isVisible && props.errorText) {
      return (
        <Fragment>
          <ErrorAlert
            errorText={props.errorText}
            errorKey={unfinishedKey}
            icon={props.iconUnfinished}
            iconColor={props.iconUnfinishedColor}
            handleIsVisible={handleIsVisible}
            size={props.iconUnfinishedSize}
            {...props}
          />
        </Fragment>
      );
    } else if (!props.errorText) {
      return (
        <Fragment>
          <OkAlert
            errorKey={okKey}
            icon={props.iconOk}
            iconColor={props.iconOkColor}
            handleIsVisible={handleIsVisible}
            size={props.iconOkSize}
            {...props}
          />
        </Fragment>
      );
    }
    // component has to return something...
  } else if (!props.touched || !isVisible) {
    return <Fragment></Fragment>;
  }
};

export default ErrorMsgAlert;

// in return functionL:
// return (
//   <Fragment>
//     {errorIsVisible &&
//       props.touched &&
//       props.errorText.toString().contains('required') && (
//         <ErrorAlert
//           errorText={props.errorText}
//           errorKey={errKey}
//           icon={props.iconDead}
//           iconColor={props.iconDeadColor}
//           size={props.iconDeadSize}
//           {...props}
//         />
//       )}
//     {errorIsVisible &&
//       props.touched &&
//       props.errorText.contains('Please') && (
//         <ErrorAlert
//           errorText={props.errorText}
//           errorKey={unfinishedKey}
//           icon={props.iconUnfinished}
//           iconColor={props.iconUnfinishedColor}
//           size={props.iconUnfinishedSize}
//           {...props}
//         />
//       )}
//     {okIsVisible && props.touched && !props.errorText && (
//       <OkAlert
//         errorKey={okKey}
//         icon={props.iconOk}
//         iconColor={props.iconOkColor}
//         size={props.iconOkSize}
//         {...props}
//       />
//     )}
//   </Fragment>
// );
