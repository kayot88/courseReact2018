import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import range from './range'
import comments from './comments'
import articles from './articles'
export default combineReducers({
  counter: counterReducer,
  articles,
  range,
  comments
})
