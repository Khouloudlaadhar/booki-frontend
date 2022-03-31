import { SET_ALL_HEBERGEMENTS } from "../types/hebergementsTypes";

const initialState = {
    all: [],
    selected: null
}

function hebergementReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_HEBERGEMENTS:
            return {
                ...state,
                all: action.payload
            }
        default:
            return state;
}
}
export default hebergementReducer