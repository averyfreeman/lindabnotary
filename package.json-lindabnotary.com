{
  "name": "lindabnotary.com",
  "version": "0.1.1",
  "private": false,
  "dependencies": {
    "@chakra-ui/icons": "^1.0.13",
    "@chakra-ui/react": "^1.6.3",
    "@chakra-ui/styled-system": "^1.11.1",
    "@emotion/react": "^11.4.0",
    "@fortawesome/fontawesome-svg-core": "^1.2.35",
    "@fortawesome/free-brands-svg-icons": "^5.15.3",
    "@fortawesome/free-regular-svg-icons": "^5.15.3",
    "@fortawesome/free-solid-svg-icons": "^5.15.3",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "framer-motion": "^4.1.17",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hook-google-maps": "0.0.3",
    "react-loading-icons": "^1.0.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "smtp-client": "^0.4.0"
  },
  "devDependencies": {
    "@testing-library/react": "^11.2.7",
    "@web/test-runner": "^0.13.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && cp -r php build/.",
    "test": "web-test-runner \"src/**/*.test.jsx\""
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
