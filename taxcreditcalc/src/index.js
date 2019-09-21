import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import Wizard from './Components/WizardForm';
import Test from './Components/test';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })

const configureStore = (intitialState) => {
    return createStore(rootReducer, intitialState, composeEnhancers(applyMiddleware(reduxThunk)));
}

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
     <Wizard/>
     <Test/>
   </Provider>,
  document.querySelector('#root')
);
