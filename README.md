# Learn - React Material UI
This is the forth installment of a seven-part series designed to improve your React development skills. This project focuses on integrating [material UI](https://material-ui.com/getting-started/installation/) in React application.


## Getting Started with the Application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm start`
   - To run json-server : `json-server --watch data/notes.json --port 8080`


## Roadmap
- **Install Material UI Components**: Run `npm install @material-ui/core`.
- **Create Boilerplate**: Set up routing and basic pages.
- **Custom Colors**: [Create and apply a new theme](https://material-ui.com/customization/theming/).
- **Create Notes Page**: Develop the form and implement form validation.
- **CRUD Operations with Axios**:
  - Use `GET` to fetch data from a json-server API and display it.
  - Use `POST` to submit form data to the json-server database (stored in a json file in the data folder).
- **Advanced makeStyles**:
  - Learn to integrate JavaScript with makeStyles.
  - Learn to incorporate theme values into makeStyles.
- **Add Website Layout**: Include a side drawer and app bar.
- **Table Manipulation**: Learn to manage tables with [Material-UI Tables](https://material-ui.com/components/tables/).
- **Transfer List Content**: Implement content management with a [Transfer List component](https://material-ui.com/components/transfer-list/).
- **Form Validation**: Implement form validation using [Formik](https://formik.org/docs/overview).
- **Theme Options**: Toggle between light and dark modes.


## Dependencies
- **`@material-ui/core`**: For Material-UI components.
- **`@material-ui/icons`**: For Material-UI icons.
- **`react-router-dom`**: For page routing.
- **[`json-server`](https://www.npmjs.com/package/json-server)**: To perform basic CRUD operations using a JSON database.
- **`axios`**: For API requests.
- **[`date-fns`](https://www.npmjs.com/package/date-fns)**: For formatting dates and times.
- **[`react-masonry-css`](https://www.npmjs.com/package/react-masonry-css)**: For a simple interface to organize items into columns at specified breakpoints.
- **[`classnames`](https://www.npmjs.com/package/classnames)**: To apply multiple classes to Material-UI components.


## Resources
1. [NetNinja Material UI](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58)
2. [Material UI documentation](https://material-ui.com/)


## React Learning Series
This project is part of a comprehensive React learning series:
1. [React Application for User Listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement) 
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI) (this repository)
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux)
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization)
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder)