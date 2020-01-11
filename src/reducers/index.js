import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import articles from './articles'
export default combineReducers({
  counter: counterReducer,
  articles
})
