# Unsplash Search API Front-End

Simple lightweight front-end for the Unsplash image search API.

# Setup

To run this project:

1. Rename `.env.example` to `.env`
2. Set the value of the `REACT_APP_UNSPLASH_ACCESS_KEY` environment variable to your [Unsplash API Access Key](https://unsplash.com/developers)
3. Run `yarn install`
4. Run `yarn start`

# Design

- Input field searches as user types
- Using Zustand as a lightweight store to encapsulate fetching and response data
- Simple flexible grid layout using CSS grid (images restricted to squares for appearance)
- Using CSS variables (kind of) to establish design tokens for a consistent theme

# Future Considerations

- Rewrite in TypeScript
- Accommodate various image sizes while maintaining consistent grid spacing
- Add additional tests
- Expand theme
