# Unsplash Search API Front-End

Simple light-weight front-end for the Unsplash image search API.

# Setup

To run this project:

1. Rename `.env.example` to `.env`
2. Set the value of the `REACT_APP_UNSPLASH_ACCESS_KEY` environment variable to your [Unsplash API Access Key](https://unsplash.com/developers)
3. Run `yarn install`
4. Run `yarn start`

# Design

- Using React because of the great ecosystem and tooling (fan of StencilJS and Web Componentns, as well)
- Using Zustand as a light-weight store to encapsulate fetching and response data
- Using CSS variables (kind of) to establish design tokens for a consistent theme
- Simple flexible grid layout using CSS grid (images restricted to squares for appearance)
- Input field searches as user types rather than on submit (easier and more intuitive, in my opinion)
- Responsive layout (for the most part)

# Future Considerations

Just a few things I would do with more time.

## Structural

- Rewrite in TypeScript
- Add tests
- Add browser polyfills
- Add prop types
- Improve accessibility
- Expand theme (add dark theme)

## Functional

- Accommodate various image sizes while maintaining consistent grid spacing
- Debounce/throttle API calls (maybe prevent searching while typing)
- Improve loading, error, and empty images states
- Add a button to clear the input field
