import axios from "axios";
import { Filter_ALL_ACTIVITIES, SELECT_ACTIVITIES, SET_ALL_ACTIVITIES } from "../types/activitiesTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreators";


export const setAllActivities = (activities) => ({
    type: SET_ALL_ACTIVITIES,
    payload: activities
})

export const FilterActivities = (payload) => ({
    type: Filter_ALL_ACTIVITIES,
    payload: payload
})

export const selectActivities = (activities) => ({
     type: SELECT_ACTIVITIES,
      payload: activities
     });




export const fetchAllActivities = () => {
    return async (dispatch) => {
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/activities`)
            dispatch(requestSucceeded())
            const activities = res.data
            dispatch(setAllActivities(activities))
        } catch (error) {
            dispatch(requestFailed(error.message))
        }
    }
}

export const fetchActivitiesById = (id) => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/activities/${id}`)
            dispatch(requestSucceeded())
            const activities= res.data
            dispatch(selectActivities(activities))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

