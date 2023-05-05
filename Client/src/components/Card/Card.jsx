import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import cardStyle from './Card.module.css'
import { connect } from 'react-redux';

 function Card ({myFavorites, showCloseButton = true, onClose, id, name, status, species, gender, origin, image, removeFav, addFav}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false); 
         removeFav(id)
      }
      else  {
         setIsFav(true)
         addFav({id, name, species, gender, image})
      }
   }
   

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (      
      <div className= {cardStyle.container}>
         <div className={cardStyle.card}>

            <div className={cardStyle.btns}>               
               
               {showCloseButton && (
                  <button 
                    className={cardStyle.button}
                     onClick={() => {onClose(id)}}
                  >
                     X
                  </button>
               )}
            </div>
         <img src={image} alt={name} className={cardStyle.image}/> 
         
         
         <Link to={`/detail/${id}`} className={cardStyle.link}  >
            <h2 className={cardStyle.link}>{name}</h2>
         </Link>  

         <div className={cardStyle.nombre}>
            <h2 >{status}</h2>
            <h2 >{gender}</h2>
         </div>

         <button className= { cardStyle.fav } onClick={handleFavorite}>{
         isFav
         ? '❤️' 
         : '🤍' }</button>
         
      </div>

         
         
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
     
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)
