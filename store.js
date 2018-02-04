import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import history from 'utils/history';
import { composeWithDevTools } from 'redux-devtools-extension';

// middleware
import reduxThunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers';

const middlewares = [reduxThunk, routerMiddleware(history)];

// if (process.env.NODE_ENV === 'development') {
//     const { logger } = require('redux-logger');
//     middlewares.push(logger);
// }

// use middleware
const middleware = applyMiddleware(...middlewares);

// creating store
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
