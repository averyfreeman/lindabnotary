const recaptchaLoaded = () => {
  // do something to signify Google reCaptcha lib has been loaded, e.g.:
  console.log('Google reCaptcha spambot protection ready');
};

window.recaptchaLoaded = recaptchaLoaded;

exports = recaptchaLoaded;
