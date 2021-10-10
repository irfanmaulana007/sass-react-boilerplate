import { START_LOADING, STOP_LOADING, FORM_ERROR } from "./types"

export const startLoading = (message) => {
    return {
        type: START_LOADING,
        payload: message
    }
}
export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const formErrorHandler = (field) => {
    return {
        type: FORM_ERROR,
        payload: field
    }
}