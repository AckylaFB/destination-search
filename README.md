# Destination Search Application

## Overview

This project is a React and TypeScript application for searching travel destinations. It provides a user-friendly interface for users to search and explore various travel destinations.

## Technology Stack

- **React**: Chosen for its component-based architecture, which allows for reusable UI elements and efficient rendering.
- **TypeScript**: Used to add static typing to the project, enhancing code quality and developer productivity.
- **Vite**: Selected as the build tool for its fast development server and optimized production builds.
- **React Router**: Implemented for client-side routing, enabling a smooth, single-page application experience.
- **Redux Toolkit**: Utilized for state management, providing a predictable state container for the application.
- **Styled Components**: Employed for component-level styling, allowing for dynamic and scoped CSS.
- **Tailwind CSS**: Used alongside Styled Components for rapid UI development and consistent design.
- **Radix UI**: Integrated for accessible, unstyled UI components that can be easily customized.
- **Vitest**: Chosen as the testing framework for its speed and compatibility with Vite.
- **Playwright**: Used for end-to-end testing, ensuring the application works correctly across different browsers.

## Design Decisions

1. **Component Structure**: The application is divided into reusable components (Layout, Home, DestinationPage) to promote code reusability and maintainability.

2. **Routing**: Implemented using React Router with a basename of '/destination-search/' to support GitHub Pages deployment.

3. **State Management**: Redux Toolkit is used for global state management, allowing for centralized data flow and easier debugging.

4. **Styling**: A combination of Styled Components and Tailwind CSS is used to balance the benefits of CSS-in-JS and utility-first CSS.

5. **Accessibility**: Radix UI components are used to ensure the application is accessible out of the box.

6. **Code Quality**: ESLint and TypeScript are used to enforce code quality and catch potential errors early in the development process.

7. **Performance**: Vite is used as the build tool to ensure fast development and optimized production builds.

## Project Structure

The project follows a standard React application structure with additional organization for Redux store, routing, and component separation. Key directories include:

- `src/`: Contains the main application code
  - `components/`: Reusable UI components
  - `pages/`: Top-level components for each route
  - `store/`: Redux store configuration and slices
  - `styles/`: Global styles and theme configuration
  - `utils/`: Utility functions and helpers

## Getting Started

The project is available online at https://ackylafb.github.io/destination-search/

To run the project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

For production builds, use `npm run build`.

## Deployment

The application is configured for deployment on GitHub Pages. The deployment process is automated using the `gh-pages` package and can be triggered with `npm run deploy`.


## Future Improvements

- Implement unit tests with Vitest
- Implement end-to-end tests with Playwright
- Improve the UI in smaller screen sizes
