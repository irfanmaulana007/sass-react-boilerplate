import { START_LOADING, STOP_LOADING, FORM_ERROR } from "./types"

const initialState = {
    visibility: false,
    message: "",
    formError: ""
}

export default function utilsReducer(state = initialState, action) {
    switch(action.type) {
        case START_LOADING: 
            return {
                ...state,
                visibility: true,
                message: action.payload
            }

        case STOP_LOADING: 
            return {
                ...state,
                visibility: false,
                message: ""
            }

        case FORM_ERROR:
            return {
                ...state,
                formError: action.payload
            }
                
        default: return state;
    }
}