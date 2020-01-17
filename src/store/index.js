import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import logger from '../middleware/logger'

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
)

// dev only!!
window.store = store

export default store
