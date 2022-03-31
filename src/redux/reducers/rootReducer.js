import { combineReducers } from 'redux'
import feedbackReducer from './feedbackReducer'
import hebergementReducer from './hebergementReducer'

const rootReducer = combineReducers({
    hebergements: hebergementReducer,
    feedback: feedbackReducer
})

export default rootReducer