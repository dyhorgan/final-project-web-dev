import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import profileReducer from "./reducers/profile-reducer.js"
import movieReducer from "./reducers/movie-reducer.js"
import reviewReducer from "./reducers/review-reducer.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
let reducer =  combineReducers({profileReducer, movieReducer, reviewReducer})
const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

