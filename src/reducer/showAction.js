import { FETCH_SUCCESS, FETCH_FAILED } from './showType';

export const initialState = {
    show: null,
    isLoading: true,
    error: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                show: action.show,
                error: null
            }
        case FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                show: null,
                error: action.error
            }
        default:
            return state;
    }
}