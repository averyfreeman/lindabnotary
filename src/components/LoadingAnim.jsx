import React, { Fragment } from 'react';
import { ThreeDots } from 'react-loading-icons';

const LoadingAnim = props => {
  return (
    <Fragment>
      <ThreeDots {...props} />
    </Fragment>
  );
};

export default LoadingAnim;
