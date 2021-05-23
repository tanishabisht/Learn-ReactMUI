# React - Material UI
This repository is a mini project on [`Material UI`](https://material-ui.com/getting-started/installation/), for any beginner to get statrted with material UI. It contains step wise topics covered. The contents inside this project is taken from :
- [NetNinja Material UI](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58)
- [Material UI documentation](https://material-ui.com/)

## Development server
- To run the project : `npm start`
- To run json-server : `json-server --watch data/notes.json --port 8080`

## Packages used
- `@material-ui/core` : to import material UI components
- `@material-ui/icons` : to import material UI icons
- `react-router-dom` : for routing of pages
- [`json-server`](https://www.npmjs.com/package/json-server) : to perform basic CRUD operations using json DB !!
- `axios` : to fetch APIs
- [`date-fns`](https://www.npmjs.com/package/date-fns) : to format date and time
- [`react-masonry-css`](https://www.npmjs.com/package/react-masonry-css) : simple interface to order items into the desired columns at specified breakpoints
- [`classnames`](https://www.npmjs.com/package/classnames) : to add multiple classes to a material UI component

## Concepts Covered
- Installing Material UI components : `npm install @material-ui/core`
- Created boilerplate : Added routing and pages
- [Adding our own custum colors](https://material-ui.com/customization/theming/)
  - Create new theme
  - Provide theme to the components
- Create Notes Page : Create form, handle form Validation
- Handling CRUD operations using axios 
  - GET json-server API and display its contents
  - POST contents from the form to the json-server database, (i.e. json file in data folder)
- advanced makeStyles
  - learn how to use js in makeStyles
  - learn how to use themes values in makeStyles
- Add Layout for the website : with side drawer and app bar
- [Table manipulation](https://material-ui.com/components/tables/)
- [Transfer list](https://material-ui.com/components/transfer-list/) content COMPONENT
- FORM VALIDATION: using [FORMIK](https://formik.org/docs/overview)
- Adding themes : light mode, dark mode