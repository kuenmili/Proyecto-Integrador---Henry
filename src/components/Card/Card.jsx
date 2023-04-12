import { NavLink } from 'react-router-dom';
import cardStyle from './Card.module.css'
import { connect } from 'react-redux';
import { addFav, removeFav, onCloseButton } from '../../redux/actions';
import { useState, useEffect} from 'react';


 function Card ({myFavorites, onClose, id, name, status,species, gender, origin, image, removeFav, addFav, onCloseButton}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false); 
         removeFav(id)
      }
      else  {
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose})
      }
   }
   const handleClose = () => {

   };

   useEffect(() => {
      const favIds = myFavorites.map((fav) => fav.id);
      setIsFav(favIds.includes(id));
   }, [myFavorites, id]);

   return (      
      <div className= {cardStyle.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
          ) : (
               <button onClick={handleFavorite}>🤍</button>
          )
         }
          <button 
          className= {cardStyle.button}
          onClick={() => {onClose(id)}}>X</button>
           <img src={image} alt='' className={cardStyle.image}/> 
           <NavLink to={`/detail/${id}`} >
            <h3 className={cardStyle.link}>{name}</h3>
         </NavLink>
         <h2 className={cardStyle.status}>{status}</h2>
         <h2 className={cardStyle.nombre}>{species}</h2>
         <h2 className={cardStyle.nombre}>{gender}</h2>
         <h2 className={cardStyle.nombre}>{origin}</h2>        
         
      </div>
      
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) },
      onCloseButton: (id) => { dispatch(onCloseButton(id))}
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)
