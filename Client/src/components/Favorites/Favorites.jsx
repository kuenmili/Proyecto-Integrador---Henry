import { filterCards, orderedCards } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import style from './Favorites.module.css'
import { useState } from "react";
import Card from "../Card/Card";


const Favorites = ({ myFavorites}) => {
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
            <>
            <div className={style.container}>
                <div >
                    <select className={style.select} onChange={handleOrder}>
                        <option className={style.option} value="A">Ascendente</option>
                        <option className={style.option} value="D">Descendente</option>
                    </select>

                    <select className={style.select} onChange={handleFilter}>
                        <option className={style.option} value="Male">Male</option>
                        <option className={style.option} value="Female">Female</option>
                        <option className={style.option} value="Genderless">Genderless</option>
                        <option className={style.option} value="unknown">unknown</option>
                        <option className={style.option} value="All">All</option>
                    </select>
                </div>
            </div>
            <div className={style.container}>

                
                    {myFavorites?.map((fav) => {
                        return (
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.gender}
                                image={fav.image}
                                status={fav.status}
                                showCloseButton={false} />
                        );
                    })}
                

            </div>
        </>
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