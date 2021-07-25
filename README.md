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
