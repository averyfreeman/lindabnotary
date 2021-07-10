import React from 'react';
import { Icon } from '@chakra-ui/react';

// Thanks to Kanin Abhiromsawat for icon
// https://www.flaticon.com/authors/eucalyp
// https://www.facebook.com/kanin.abhiromsawat

const CostChatBubbles = ({ color, ...rest }) => (
  <Icon
    x="0"
    y="0"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    width="512"
    height="512"
    {...rest}
  >
    <path
      fill="#E6E9ED"
      d="M48,10h12c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2h-4l-6,4v-4h-2c-1.1,0-2-0.9-2-2v-8    C46,10.9,46.9,10,48,10z"
    />

    <path
      fill="#E6E9ED"
      d="M8,22H4c-1.1,0-2-0.9-2-2v-8c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2h-2v4L8,22z"
    />

    <path
      fill="#FCD770"
      d="M52,42c5.52,0,10,4.48,10,10s-4.48,10-10,10c-4.1,0-7.62-2.47-9.16-6C42.3,54.78,42,53.42,42,52    c0-2.14,0.67-4.13,1.82-5.75C45.63,43.68,48.62,42,52,42z"
    />

    <path
      fill="#B4DD7F"
      d="M21,56h-6v-3.74c0-2.67,1.77-5.02,4.34-5.76l4.72-1.36L27,52l5-4l5,4l2.94-6.87l3.88,1.12    C42.67,47.87,42,49.86,42,52c0,1.42,0.3,2.78,0.84,4h-0.01H21z"
    />

    <polygon fill="#E6E9ED" points="39.94,45.13 37,52 32,48 36,44" />

    <polygon fill="#E6E9ED" points="32,48 27,52 24.06,45.14 28,44" />

    <path
      fill="#F0D0B4"
      d="M42.12,31.88C41.58,31.34,40.83,31,40,31h-1h-2c-3.25,0-6.4-1.05-9-3    c-1.42,0.48-2.48,1.63-2.85,3.04L25,31h-1c-1.66,0-3,1.34-3,3c0,0.83,0.34,1.58,0.88,2.12C22.42,36.66,23.17,37,24,37h1.29    c0.45,1.53,1.42,2.85,2.71,3.74V44l4,4l4-4v-3.16c1.33-0.9,2.33-2.25,2.75-3.84H40c1.66,0,3-1.34,3-3    C43,33.17,42.66,32.42,42.12,31.88z"
    />

    <path
      fill="#B27946"
      d="M43,27v7c0-0.83-0.34-1.58-0.88-2.12C41.58,31.34,40.83,31,40,31h-1h-2c-3.25,0-6.4-1.05-9-3    c-1.42,0.48-2.48,1.63-2.85,3.04L25,31h-1c-1.66,0-3,1.34-3,3v-7c0-6.08,4.92-11,11-11c3.04,0,5.79,1.23,7.78,3.22    C41.77,21.21,43,23.96,43,27z"
    />
    <path d="M52,49c0.551,0,1,0.448,1,1h2c0-1.302-0.839-2.402-2-2.816V45h-2v2.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3    c0.551,0,1,0.448,1,1s-0.449,1-1,1s-1-0.448-1-1h-2c0,1.302,0.839,2.402,2,2.816V59h2v-2.184c1.161-0.414,2-1.514,2-2.816    c0-1.654-1.346-3-3-3c-0.551,0-1-0.448-1-1S51.449,49,52,49z" />

    <path d="M52,41c-3.456,0-6.541,1.605-8.559,4.106L37,43.248V41.34c1.102-0.863,1.963-2.014,2.474-3.34H40c2.206,0,4-1.794,4-4v-7    c0-6.617-5.383-12-12-12s-12,5.383-12,12v7c0,2.206,1.794,4,4,4h0.591c0.518,1.27,1.353,2.377,2.409,3.226v2.022l-7.94,2.29    c-2.979,0.86-5.06,3.625-5.06,6.726V57h28.214c1.825,3.556,5.521,6,9.786,6c6.065,0,11-4.935,11-11S58.065,41,52,41z     M38.576,45.784l-1.978,4.615l-3.102-2.481l2.793-2.793L38.576,45.784z M40,36h-0.04c0.026-0.26,0.04-0.524,0.04-0.791V32    c1.103,0,2,0.897,2,2C42,35.103,41.103,36,40,36z M24,36c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2h0.013    C24.011,32.055,24,32.107,24,32.162V35c0,0.339,0.028,0.672,0.07,1H24z M24.468,30H24c-0.732,0-1.409,0.212-2,0.556V27    c0-5.514,4.486-10,10-10s10,4.486,10,10v3.556C41.409,30.212,40.732,30,40,30h-1h-2c-3.009,0-5.992-0.995-8.4-2.8l-0.419-0.314    l-0.497,0.166C26.206,27.544,25.066,28.637,24.468,30z M26,35v-2.838c0-1.295,0.732-2.458,1.865-3.026    C30.531,30.986,33.752,32,37,32h1v3.209C38,38.402,35.403,41,32.21,41h-0.176C28.707,41,26,38.309,26,35z M32.034,43h0.176    c0.984,0,1.922-0.191,2.79-0.525v1.111l-3,3l-3-3v-1.183C29.937,42.785,30.96,43,32.034,43z M27.71,45.124l2.793,2.793    l-3.102,2.481l-1.978-4.615L27.71,45.124z M22,55v-4h-2v4h-4v-2.736c0-2.214,1.486-4.189,3.614-4.804l3.873-1.118l3.111,7.259    L32,49.281l5.401,4.321l3.111-7.259l1.773,0.511C41.467,48.391,41,50.141,41,52c0,1.041,0.155,2.045,0.426,3H22z M52,61    c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9S56.962,61,52,61z" />

    <path d="M60,9H48c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3h1v4.869L56.303,23H60c1.654,0,3-1.346,3-3v-8    C63,10.346,61.654,9,60,9z M61,20c0,0.551-0.449,1-1,1h-4.303L51,24.131V21h-3c-0.551,0-1-0.449-1-1v-8c0-0.551,0.449-1,1-1h12    c0.551,0,1,0.449,1,1V20z" />

    <polygon points="54,14.586 51.707,12.293 50.293,13.707 53,16.414 53,19 55,19 55,16.414 57.707,13.707 56.293,12.293" />

    <path d="M15,23h1c1.654,0,3-1.346,3-3v-8c0-1.654-1.346-3-3-3H4c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3h3.697L15,27.869V23z     M13,24.131L8.303,21H4c-0.551,0-1-0.449-1-1v-8c0-0.551,0.449-1,1-1h12c0.551,0,1,0.449,1,1v8c0,0.551-0.449,1-1,1h-3V24.131z" />

    <polygon points="11,15.764 9.618,13 7,13 7,19 9,19 9,16.236 10.382,19 13,19 13,13 11,13" />

    <path d="M31,4c0-0.551,0.449-1,1-1s1,0.449,1,1v0.171c0,0.267-0.104,0.519-0.293,0.708L31,6.586V9h2V7.414l1.121-1.121    C34.688,5.727,35,4.973,35,4.171V4c0-1.654-1.346-3-3-3s-3,1.346-3,3v1h2V4z" />

    <rect x="31" y="11" width="2" height="2" />
  </Icon>
);

export default CostChatBubbles;