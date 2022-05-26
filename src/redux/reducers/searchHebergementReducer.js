import { NEW_SEARCH, RESET_SEARCH } from "../types/searchHebergementTypes";



const initialState = {
    destination: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    },
};


function searchHebergementReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_SEARCH:
            return action.payload;
        case RESET_SEARCH:
            return initialState;
        default:
            return state;
    }
};
export default searchHebergementReducer