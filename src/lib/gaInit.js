import React from 'react';
import ReactGA from 'react-ga';

const measuringID = process.env.GA_ID;

export const gaInit = measuringID => ReactGA.initialize(measuringID);
