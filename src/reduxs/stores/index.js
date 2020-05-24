import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index.js'

const thunkMiddle = applyMiddleware(thunk)
export default createStore(rootReducer, thunkMiddle)