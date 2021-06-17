import './styles/global.css';
import React, {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import DesignSystem from 'design-system-utils';
import { AnimatePresence } from 'framer-motion';

// import { gaInit } from './lib/gaInit';
import useScrollPosition from './hooks/useScrollPosition';
import QuoteButton from './components/QuoteButton';
import MenuDrawer from './pageComponents/MenuDrawer';
import MenuHeader from './pageComponents/MenuHeader';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Qualifications from './pages/Qualifications';
import Region from './pages/Region';
import FormMailer from './pages/FormMailer';
import FormScreen from './pages/FormScreen';
// import FourOhFour from './pages/FourOhFour';

// gaInit();

const systemD = new DesignSystem(theme);

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0);
  const elementPosition = useRef({ x: 10, y: 150 });
  const viewportPosition = useRef({ x: 0, y: 0 });
  let throttleTimeout = null;

  const getPos = (el, axis) => Math.round(el.current[axis]);

  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
  };

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: pos => setPos(elementPosition, pos),
    setViewportPosition: pos => setPos(viewportPosition, pos),
    renderCount,
  };
};

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

export default () => {
  const positionStore = PositionStore();
  const viewportRef = useRef();
  const quoteButtonRef = useRef();

  useScrollPosition(
    ({ currPos }) => {
      positionStore.setViewportPosition(currPos);
      console.log(currPos.x, currPos.y);
      // const { style } = viewportRef.current
      // style.top = `${150 + currPos.y}px`
      // style.left = `${10 + currPos.x}px`
    },
    [positionStore],
    null,
    true
  );

  /* eslint-disable no-unused-vars */
  let location = useLocation();
  return useMemo(() => (
    <Fragment>
      {console.log(systemD)}
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <Box
          // minH="100vh"
          p={0}
          as="main"
          textAlign="center"
          backgroundImage="url('/Real-estate-contract-signing.jpg')"
          backgroundAttachment="fixed"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box display={{ base: 'flex', sm: 'none' }}>
            <MenuDrawer justifySelf="flex-start" />
          </Box>

          <Box
            width="100vw"
            boxShadow="4px 4px 8px black"
            position="fixed"
            top="0"
            left="0"
            display={{ base: 'none', sm: 'block' }}
            textAlign="center"
            zIndex="2"
          >
            <MenuHeader />
          </Box>

          <QuoteButton height={10} ref={quoteButtonRef} width={10} />

          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <ScrollToTop>
                <Route path="/home" children={<Home />} />
                <Route path="/about" children={<About />} />
                <Route path="/region" children={<Region />} />
                <Route path="/qualifications" children={<Qualifications />} />
                <Route path="/contact" children={<Contact />} />
                <Route path="/loading" children={<Loading />} />
                <Route
                  path="/formmailer"
                  children={<FormMailer variable="email" />}
                />
                <Route
                  path="/formscreen"
                  children={<FormScreen variable="email" />}
                />
                <Route path="/" children={<Redirect to="/home" />} />
              </ScrollToTop>
            </Switch>
          </AnimatePresence>
        </Box>
      </ChakraProvider>
    </Fragment>
  ));
};

// export default App;
