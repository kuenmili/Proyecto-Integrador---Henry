import {ADD_FAV, REMOVE_FAV, ON_CLOSE_BUTTON} from './action-types'

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((favorite) => favorite.id.toString() !== payload)
            }
        case ON_CLOSE_BUTTON:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((favorite) => favorite.id.toString() !== payload)    
            }
        
        default:
            return {...state};
    }
}

export default reducer;