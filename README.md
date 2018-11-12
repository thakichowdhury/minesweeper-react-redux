# React Project Boilerplate
Boilerplate for react projects
> Inspired by react-boilerplate: [https://github.com/react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

# Directory Structure
```
.
|
__ __tests__
    |__ components
        App.test.jsx
    |__ server
__ .circleci
    config.yml
__ client
    |__ styles
    |__ components
        App.jsx
    app.js
__ database
    |__ postgres
        |__ connection.js
        |__ schema.sql
__ internals
    |__ scripts
        setup.js
        deleteStarterApp.js
            |__ helpers
                |__ setup.helper.js
__ public
   index.html
   |__ transpiled
__ server
__ .gitignore
__ README.md
__ babel.config.js
__ jest.config.js
__ package.json
__ setupTests.js
__ webpack.config.js
```

# Quick Start
1. Make sure that you have Node v8 or above installed.
2. Clone this repo using `https://github.com/chowdhurythaki/project-boilerplate.git`
3. Run `npm run setup` in order to install dependencies 
   > Will encounter a prompt asking if a new git repo/history should be initialized
   > This option is recommended for new projects
4. Run `npm run clean` to remove the example app and its associated files
5. Run `npm run start` to start the server and serve your static public files

And that's it!

# Dependencies
Development
```
"babel-cli": "^6.26.0",
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-preset-airbnb": "^2.6.0",
"babel-preset-env": "^1.7.0",
"babel-preset-react": "^6.24.1",
"css-loader": "^1.0.0",
"enzyme": "^3.6.0",
"enzyme-adapter-react-16": "^1.5.0",
"eslint": "^5.6.1",
"eslint-config-airbnb": "^17.1.0",
"eslint-plugin-import": "^2.14.0",
"eslint-plugin-jsx-a11y": "^6.1.1",
"eslint-plugin-react": "^7.11.1",
"jest": "^23.6.0",
"jest-cli": "^23.6.0",
"jest-enzyme": "^6.1.2",
"shelljs": "^0.8.2",
"style-loader": "^0.23.0",
"supertest": "^3.3.0",
"webpack": "^4.20.2",
"webpack-cli": "^3.1.2"
```

Production
```
"axios": "^0.18.0",
"express": "^4.16.3",
"prop-types": "^15.6.2",
"react": "^16.5.2",
"react-dom": "^16.5.2",
"redux": "^4.0.0"
```
