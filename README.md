### Linda B the Notary

- lindabnotary.com

This is a business profile site I created for a client who is a (wait for it) notary

Obligatory "about me" type site w/ with navigation, a form mailer, responsive layout, service region map rendered through google maps, google analytics streams (of course).

Due to requirement scope, was able to implement almost entirely stateless functional design pattern, with a smattering of stateful methods (useState(), useFormik({})), memoization (useMemo()), and lifecycle methods (useEffect() and useLayoutEffect()); Emphasis on DRY / component reusability.

Intentionally obscured code in content-focused components (pages) by creating self-contained layout elements (pageElements), and larger component-sections of pages requiring considerable syntactical granularity (pageComponents), and single, reusable items (components), in an effort to maintain a codebase that's easy to understand and extend.

Was able to integrate some fun new libraries, such as Chakra-UI + Styled-System (which additionally requres @emotion), Framer-Motion + react-router-dom (for implementing animated page transitions) Formik + Yup, creating POST to PHP sendmail script, Storybook (storybook repo coming soon) . . .

Will soon add code-splitting, tracking scroll to experiment with position-dependent child render props, and (possibly) some facebook integration (pixel, comment section).

Will likely create another repo w/ Snowpack version soon, have been developing in parallel...
