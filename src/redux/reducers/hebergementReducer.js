import { Filter_ALL_HEBERGEMENTS, SET_ALL_HEBERGEMENTS } from "../types/hebergementsTypes";

const initialState = {
    all: [],
    filteredList:[],
    selected: null
}

function hebergementReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_HEBERGEMENTS:
            return {
                ...state,
                all: action.payload,
                filteredList:action.payload
            }
        case Filter_ALL_HEBERGEMENTS:
            return {
                ...state,
               filteredList: action.payload
            }
        default:
            return state;
    }
}
export default hebergementReducer