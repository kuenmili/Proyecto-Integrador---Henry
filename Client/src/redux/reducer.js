import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'

const initialState = {
    myFavorites: [],
    filteredFav: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch( type ) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                filteredFav: payload 
            };
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                filteredFav: payload
            };
       
            case FILTER:
                const allFiltered = state.filteredFav.filter(character => character.gender === payload)
                return {
                    ...state,
                    myFavorites: 
                        payload === "All" 
                        ? [...state.filteredFav] 
                        : allFiltered
                }
            case ORDER:
                const filteredFavCopy = [...state.filteredFav];
                return {
                    ...state,
                    myFavorites: 
                        payload === 'A'
                        ? filteredFavCopy.sort((a,b) => a.id - b.id)
                        : filteredFavCopy.sort((a,b) => b.id - a.id)
                }
        
        default:
            return {...state};
    }
}

export default reducer;