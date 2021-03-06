import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import mainPage from '../src/components/MainPage/reducer'

const rootReducer = combineReducers({
  mainPage: undoable(mainPage, { limit: 1 })
})

export default rootReducer
