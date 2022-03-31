import { combineReducers } from 'redux'
import hebergementReducer from './hebergementReducer'

const rootReducer = combineReducers({
    hebergements: hebergementReducer
})

export default rootReducer