import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import rootReducer, { setCandiesActionCreator } from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export const buildSetCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('../server/api/candies');
      dispatch(setCandiesActionCreator(data));
    } catch (err) {
      console.log('Oh noes! Ya messed up!');
    }
  };
};

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
