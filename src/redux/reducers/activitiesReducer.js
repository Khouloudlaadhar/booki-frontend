import { Filter_ALL_ACTIVITIES, SELECT_ACTIVITIES, SET_ALL_ACTIVITIES } from "../types/activitiesTypes";

const initialState = {
    allActivities: [],
    filteredListActivities:[],
    selectedActivities: null
}

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
                filteredListActivities:action.payload
            }
        case Filter_ALL_ACTIVITIES:
            return {
                ...state,
                filteredListActivities: action.payload
            }
            case SELECT_ACTIVITIES:
            return { ...state, 
                selectedActivities: action.payload };
        default:
            return state;
    }
}
export default activitiesReducer