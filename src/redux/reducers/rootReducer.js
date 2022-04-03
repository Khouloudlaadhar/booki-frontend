import { combineReducers } from 'redux'
import feedbackReducer from './feedbackReducer'
import hebergementReducer from './hebergementReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    hebergements: hebergementReducer,
    feedback: feedbackReducer
})

export default rootReducer