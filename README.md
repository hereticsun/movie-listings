# Movie listing coding test
Submitted by Azlan Cuttilan

## How to use:

### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn build` - build the production artifacts
* `yarn test` - running the tests

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

####`yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Application structure:

Within the `src` folder, `actions`, `components` and `reducers` are grouped within their respective folders. Each component is within it's own folder that groups the tests, JS and CSS for the respective component.

```
.
+-- public
+-- src
    +-- actions
    |   +-- __tests__
    +-- assets
    +-- components
    |   +-- App
    |   |   + -- __tests__
    |   +-- GenreFilter
    |   |   +-- __tests__
    |   +-- Movie
    |   |   +-- __tests__
    |   +-- Movies
    |   |   +-- __tests__
    |   +-- RatingFilter
    |   |   +-- __tests__
    +-- constants
    +-- reducers
        +-- __tests__

```

## Missing functional requirements:

All functional requirements were completed

## Possile improvements / functionality:

### Debounce onChange event of range input
The handler to set the required minimum rating fires when the value of the range input changes. clickinng a point on the range input causes this to only happen once, but dragging the slider causes it to fire multiple times in quick succession. Debouncing will reduce the number of times the handler fires and reduce impact on performance.
