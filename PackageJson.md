# Project BP
React/Redux/Rails setup checklist

* Update `.gitignore`
    * `node_modules/`
    * `bundle.js`
    * `bundle.js.map`

## React BP
* [ ] `npm init --yes` to create a package.json file with the default setup.
* [ ] Create a frontend folder at the root of your project with an entry file inside of it.
* [ ] `npm install --save`
  * `webpack`
  * `react`
  * `react-dom`
  * `react-router-dom`
  * `redux`
  * `react-redux`
  * `babel-core`
  * `babel-loader`
  * `babel-preset-react`
  * `babel-preset-env`
  * `lodash` (optional)
* [ ] Create a `webpack.config.js` file.
  * The entry point should be in frontend.
  * The output path should be `'app/assets/javascripts'`.
  * Configure your `module.loaders` to use Babel transpilation for:
    * JSX
    * ES6
  * Include `devtool: 'source-map'`.

* React/Redux Folders: Action // Component // Reducers // Store // Util // entryfile.jsx
* Example Entry File
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { fetchGame } from "./util/score_util";
import { fetchGameData } from "./actions/score_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  Modal.setAppElement(root);

  window.store = store;
  window.fetchGame = fetchGame;
  ReactDOM.render(<Root store={store}/>, root);
});
```

<!-- npm install:

react
react-dom
react-redux
react-router-dom
redux
redux-logger (if you need it)
redux-thunk
webpack
babel-core
babel-loader
babel-preset-es2015
babel-preset-react -->

## Rails
* [ ] `rails new`
  * Add `--database=postgresql` if using Postgres.
  * Add `--skip-turbolinks` to skip the turbolinks gem.
* [ ] Update your `Gemfile`.
  * `better_errors`
  * `binding_of_caller`
  * `pry-rails`
  * `annotate`
  * `bcrypt`
  * `jquery-rails` (When using rails 5.1+)
* [ ] `bundle install`
* [ ] When using Rails 5.1+, update your `application.js` manifest to include: 
  * `//= require jquery`
  * `//= require jquery_ujs`