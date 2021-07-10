### Linda B the Notary

- lindabnotary.com

This is a business profile site I created for a client who is a (wait for it) notary

It's a simple obligatory "about me" type site, but I crammed in a decent number of features:

- Responsive layout (Chakra UI + @emotion CSS-in-JS) - most pages / components have at 5 different sizes
- Lightly animated navigation (React Router v5 + Framer Motion)
- Dark mode (user selected, but system detection can be easily implemented)
- Email form using Formik
- Yup validation (with fun, animated feedback)
- FormData POST w/ fetch (PHP mail backend)
- Service region map (Google maps)
- Modal dialogs for all the (appropriate) things...

Primarily stateless functional design pattern. Emphasis on DRY / component reusability. Attempted to be as idiomatic as possible. Created with scaling and collaboration among multiple experience levels in mind.

Site is organized as follows:

- pages: Intended to be primarily content-focused, almost all code is obscured
- pageComponents: Largest sections of pages that require some syntactical granularity
- pageElements: Smaller sections of pages that require some syntactical granularity
- components: Single, reusable items

Recently added features:

- Email form modal and backend
- Discount offer modal (delayed 1 min)

  Performance revisions:

- Code-splitting
- Memoization

On the horizon (in order of importance):

- Site analytics (Google)
- Unit tests
- Snowpack version (have been developing in parallel - reason for relative paths)
- Storybook for components I'm most proud of
