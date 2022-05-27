import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import feedbackReducer from './feedbackReducer'
import hebergementReducer from './hebergementReducer'
import searchHebergementReducer from './searchHebergementReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    hebergements: hebergementReducer,
    feedback: feedbackReducer,
    searchHebergement:searchHebergementReducer,
    activities:activitiesReducer
})

export default rootReducer