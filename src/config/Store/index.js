import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducer';


export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);