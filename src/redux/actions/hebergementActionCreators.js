import axios from "axios";
import { SET_ALL_HEBERGEMENTS } from "../types/hebergementsTypes";


export const setAllHebergements = (hebergementsArray) => ({
    type: SET_ALL_HEBERGEMENTS,
    payload: hebergementsArray
})


export const fetchAllHebergements = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/hebergements`)
             const hebergements = res.data
            dispatch(setAllHebergements(hebergements))
        } catch (error) {
            console.log({ error });
        }
    }
}