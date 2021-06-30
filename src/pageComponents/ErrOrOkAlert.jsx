import React, { Fragment, useEffect, useState } from 'react';
import ErrorAlert from '../components/ErrorAlert';
import OkAlert from '../components/OkAlert';

let errKey = '';
let okKey = '';

const ErrOrOkAlert = props => {
  const [errorIsVisible, setErrorIsVisible] = useState(true);
  const [okIsVisible, setOkIsVisible] = useState(true);

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const errKey = `${props.name.slice(0, 5)}-field-errKey`;
    /* eslint-disable no-unused-vars */
    const okKey = `${props.name.slice(0, 5)}-field-okKey`;
    if (!errorIsVisible && props.touched && props.error) {
      setTimeout(() => {
        setErrorIsVisible(!errorIsVisible);
        if (okIsVisible === false) {
          setOkIsVisible(true);
        }
      }, 20000);
    }
  }, [
    props.name,
    props.touched,
    props.error,
    errorIsVisible,
    okIsVisible,
    setOkIsVisible,
  ]);

  const handleErrorIsVisible = () => {
    setErrorIsVisible(!errorIsVisible);
  };

  const handleOkIsVisible = () => {
    setOkIsVisible(!okIsVisible);
  };

  return (
    <Fragment>
      {errorIsVisible && props.touched && props.errorText && (
        <ErrorAlert
          errorKey={errKey}
          errorText={props.errorText}
          icon={props.iconError}
          iconColor={props.iconErrorColor}
          handleIsVisible={handleErrorIsVisible}
          size={props.iconErrorSize}
          {...props}
        />
      )}
      {okIsVisible && props.touched && !props.errorText && (
        <OkAlert
          errorKey={okKey}
          errorText={props.errorText}
          icon={props.iconOk}
          iconColor={props.iconOkColor}
          handleIsVisible={handleOkIsVisible}
          size={props.iconOkSize}
          {...props}
        />
      )}
    </Fragment>
  );
};

export default ErrOrOkAlert;
