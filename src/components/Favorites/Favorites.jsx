import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'
import { filterCards, orderedCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({onClose, myFavorites}) => {
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderedCards(event.target.value));
        setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    return (
        <div className={style.container}> 

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">unknown</option>
                <option value="All">All</option>
                </select>        
           {myFavorites?.map(fav => {
                return (            
                 <Card
                    key={fav.id}
                    id = {fav.id}                    
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}                 
                    image={fav.image} 
                    onClose={onClose}                                     
                 />           
           );
           })}
        </div>
     );
};

const mapStateToProps   = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, null
)(Favorites)