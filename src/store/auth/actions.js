import {types} from "./types"

export const getComments = () => {
    return {
        type: types.GET_COMMENTS
    }
}

export const setComments = (comments) => {
    return {
        type: types.SET_COMMENTS,
        payload: {comments}
    }
}

export const reset = () => {
    return {
        type: types.RESET
    }
}