# Minesweeper

# Installation Guide
1. Make sure that you have Node v8 or above installed.
2. Unzip this repo using compression software like gzip
3. Run `npm install` in order to install dependencies 
4. Run `npm run start` to start the server and serve your static public files
5. Using a browser, go to url `localhost:3000` in order to start the game

# Rules of the game
1. Clicking on a square will reveal either a mine or a number indicating how many mines are in the adjacent squares
    * Squares with no number mean there are no mines in adjacent squares
2. Clicking on a square with no adjacent squares will reveal all surrounding empty squares until the clicked square is enclosed
2. Clicking on a mine means a LOSS
3. Revealing all squares without clicking on a mine means a WIN

# How to play
1. Click on a square to reveal it
2. Right clicking on a square will place a flag there for tracking purposes
    * Right clicking on it again will remove the flag
3. Clicking on the button labelled 'Reset Game' will start a new game
4. Choosing an option from the drop-down next to 'Choose Difficulty' will set the difficulty of the game
    * You must click 'Reset Game' to start a new game with chosen difficulty

And that's it!

# Technologies used
- Front-end
    - React
    - Redux
- Testing
    - Jest
    - Enzyme
    - Flow
- Tooling
    - Babel
    - Webpack
    - Eslint (presets: env, react, airbnb, flow)

# Component Structure
C = container
P = presentational
- App  C
    - Header  C
        - Message  P
    - VisibleBoard  C
        - Board  P
            - VisibleCell  C
                - Cell  P
    - Footer  C
        - House  P
            - DifficultySelect  P
            - GameReset  P

# Directory Structure
```
.
|
__ __tests__
    |__ components
    |__ logic
    |__ redux
    |__ server
__ .circleci
__ client
    |__ styles
    |__ components
        |__ containers
        |__ presentational
__ database
    |__ postgres
__ internals
    |__ scripts
__ public
   |__ transpiled
__ server
__ .eslintrc.js
__ .flowconfig
__ .gitignore
__ babel.config.js
__ jest.config.js
__ package.json
__ README.md
__ setupTests.js
__ webpack.config.babel.js
```

# Dependencies
Development
```
"@babel/cli": "^7.1.2",
"@babel/core": "^7.1.2",
"@babel/node": "^7.0.0",
"@babel/plugin-proposal-class-properties": "^7.1.0",
"@babel/plugin-transform-flow-strip-types": "^7.0.0",
"@babel/preset-env": "^7.1.0",
"@babel/preset-flow": "^7.0.0",
"@babel/preset-react": "^7.0.0",
"@babel/register": "^7.0.0",
"babel-core": "^7.0.0-bridge.0",
"babel-eslint": "^10.0.1",
"babel-jest": "^23.4.2",
"babel-loader": "^8.0.0",
"babel-preset-airbnb": "^3.0.1",
"css-loader": "^1.0.0",
"enzyme": "^3.6.0",
"enzyme-adapter-react-16": "^1.5.0",
"eslint": "^5.6.1",
"eslint-config-airbnb": "^17.1.0",
"eslint-plugin-flowtype": "^3.1.1",
"eslint-plugin-import": "^2.14.0",
"eslint-plugin-jsx-a11y": "^6.1.1",
"eslint-plugin-react": "^7.11.1",
"flow-bin": "^0.84.0",
"identity-obj-proxy": "^3.0.0",
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
"react-redux": "^5.1.1",
"redux": "^4.0.0",
"redux-logger": "^3.0.6"
```
