import { SET_ALL_HEBERGEMENTS } from "../types/hebergementsTypes";


export const setAllHebergements = (hebergementsArray) => ({
    type: SET_ALL_HEBERGEMENTS,
    payload: hebergementsArray
})