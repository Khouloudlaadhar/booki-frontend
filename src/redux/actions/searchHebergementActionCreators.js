import { NEW_SEARCH } from "../types/searchHebergementTypes";


export const searchHebergements = (payload) => ({
    type: NEW_SEARCH,
    payload: payload
})