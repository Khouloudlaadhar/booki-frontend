import axios from "axios";
import { Filter_ALL_HEBERGEMENTS, SELECT_HEBERGEMENTS, SET_ALL_HEBERGEMENTS } from "../types/hebergementsTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreators";


export const setAllHebergements = (hebergementsArray) => ({
    type: SET_ALL_HEBERGEMENTS,
    payload: hebergementsArray
})

export const FilterHebergements = (payload) => ({
    type: Filter_ALL_HEBERGEMENTS,
    payload: payload
})

export const selectHebergement = (hebergement) => ({
     type: SELECT_HEBERGEMENTS,
      payload: hebergement
     });




export const fetchAllHebergements = () => {
    return async (dispatch) => {
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/hebergements`)
            dispatch(requestSucceeded())
            const hebergements = res.data
            dispatch(setAllHebergements(hebergements))
        } catch (error) {
            dispatch(requestFailed(error.message))
        }
    }
}

export const fetchHebergementById = (id) => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/hebergements/${id}`)
            dispatch(requestSucceeded())
            const hebergement= res.data
            dispatch(selectHebergement(hebergement))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

