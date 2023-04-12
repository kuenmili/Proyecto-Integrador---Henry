import {ADD_FAV, REMOVE_FAV, ON_CLOSE_BUTTON} from './action-types'

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
};

export const onCloseButton = (id) => {
    return {
        type: ON_CLOSE_BUTTON,
        payload: id 
    }
}

