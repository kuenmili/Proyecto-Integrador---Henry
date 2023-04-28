import {ADD_FAV, REMOVE_FAV,  ORDER, FILTER} from './action-types'
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);

            if(!data.length) throw Error('No hay favoritos')

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });

        } catch (error) {
            
        }       
    };
 };

 export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);

          //  if(!data.lenght) throw Error('No hay favoritos')

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            
        }; 
    };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER, payload: gender
    }
};

export const orderedCards = (order) => {
    return {
        type: ORDER, payload: order
    }
};
