import './styles/global.css';
import React, { Fragment, lazy, Suspense, useMemo } from 'react';
import { Box, ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingAnim from './components/LoadingAnim';
import QuoteButton from './components/QuoteButton';
import MenuDrawer from './pageComponents/MenuDrawer';
import MenuHeader from './pageComponents/MenuHeader';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Loading = lazy(() => import('./pages/Loading'));
const Qualifications = lazy(() => import('./pages/Qualifications'));
const Region = lazy(() => import('./pages/Region'));

const DevelopmentPortion = () => {
  <Fragment>
    <Route
      path="/formiktest"
      children={
        <Suspense
          fallback={
            <LoadingAnim
              stroke="blue"
              strokeWidth="1px"
              fill="cornflowerblue"
            />
          }
        >
          <FormikTest />
        </Suspense>
      }
    />
    <Route
      path="/formmailer"
      children={
        <Suspense
          fallback={
            <LoadingAnim
              stroke="blue"
              strokeWidth="1px"
              fill="cornflowerblue"
            />
          }
        >
          <FormMailer />
        </Suspense>
      }
    />
    <Route
      path="/formscreen"
      children={
        <Suspense
          fallback={
            <LoadingAnim
              stroke="blue"
              strokeWidth="1px"
              fill="cornflowerblue"
            />
          }
        >
          <FormScreen />
        </Suspense>
      }
    />
  </Fragment>;
};

const FormMailer = lazy(() => import('./pages/FormMailer'));
const FormScreen = lazy(() => import('./pages/FormScreen'));
const FormikTest = lazy(() => import('./pages/FormikTest'));
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Loading from './pages/Loading';
// import Qualifications from './pages/Qualifications';
// import Region from './pages/Region';
// import FormMailer from './pages/FormMailer';
// import FormScreen from './pages/FormScreen';
// import FormikTest from './pages/FormikTest';

const App = () => {
  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return useMemo(
    () => (
      <Fragment>
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <Box
            // minH="100vh"
            p={0}
            as="main"
            backgroundAttachment="fixed"
            backgroundImage="url('/Real-estate-contract-signing.jpg')"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            textAlign="center"
          >
            <Box display={{ base: 'flex', sm: 'none' }}>
              <MenuDrawer justifySelf="flex-start" />
            </Box>

            <Box
              boxShadow="4px 4px 8px black"
              display={{ base: 'none', sm: 'block' }}
              left="0"
              position="fixed"
              textAlign="center"
              top="0"
              width="100vw"
              zIndex="2"
            >
              <MenuHeader />
            </Box>

            <QuoteButton height={10} width={10} />

            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/home" children={<Home />} />
                <Route
                  path="/about"
                  children={
                    <Suspense
                      fallback={
                        <LoadingAnim
                          stroke="blue"
                          strokeWidth="1px"
                          fill="cornflowerblue"
                        />
                      }
                    >
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/region"
                  children={
                    <Suspense
                      fallback={
                        <LoadingAnim
                          stroke="green"
                          strokeWidth="1px"
                          fill="darkgreen"
                        />
                      }
                    >
                      <Region />
                    </Suspense>
                  }
                />
                <Route
                  path="/qualifications"
                  children={
                    <Suspense
                      fallback={
                        <LoadingAnim
                          stroke="lightorange"
                          strokeWidth="1px"
                          fill="orange"
                        />
                      }
                    >
                      <Qualifications />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  children={
                    <Suspense
                      fallback={
                        <LoadingAnim
                          stroke="mediumpurple"
                          strokeWidth="1px"
                          fill="blueviolet"
                        />
                      }
                    >
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  path="/loading"
                  children={
                    <Suspense
                      fallback={
                        <LoadingAnim
                          stroke="lightcoral"
                          strokeWidth="1px"
                          fill="indianred"
                        />
                      }
                    >
                      <Loading />
                    </Suspense>
                  }
                />
                <Route path="/" children={<Redirect to="/home" />} />
                {process.env.NODE_ENV === 'development' && (
                  <DevelopmentPortion />
                )}
              </Switch>
            </AnimatePresence>
          </Box>
        </ChakraProvider>
      </Fragment>
    ),
    [location]
  );
};

export default App;
