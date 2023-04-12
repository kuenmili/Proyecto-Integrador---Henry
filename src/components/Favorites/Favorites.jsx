import { connect } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'


const Favorites = ({onClose, myFavorites}) => {
    return (
        <div className={style.container}>         
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