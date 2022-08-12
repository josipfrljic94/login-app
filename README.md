# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

### `WHAT I WILL DO`

#### `JS`	
1. Move all form state from App.js
    - generate all steps in context and manag them from context
    - coupling context in App.js and shares date to HOC form item
    - some packages should perhaps be used (magicform ,.ect)
2. Idea is make reusable all form
    -make reasable formItem HOC (contains for example dropdown or input field) and dynamicly generate fprmItem field
    -In context function validate should be dry
    -In context separate personal data (firstName, lastName) in one state, and global state  (language) in other state object

#### `STYLES`
3. Refactor styles and make responsive
    -Idea is making own css propertyes for easier handling of styles
    -use scss.module or some css-in-js
    -add theme 