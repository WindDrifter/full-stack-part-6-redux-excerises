import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {anecdotesReducer} from './reducers/anecdoteReducer'
import {notificationReducer} from './reducers/notificationReducer'


const reducer = combineReducers({
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store