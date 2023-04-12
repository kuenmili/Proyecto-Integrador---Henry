import cardStyle from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return (
      <div className= {cardStyle.card}>         
         {characters.map(({id, name, status, gender, image}) => (            
               <Card
                  id = {id}
                  key={id}
                  name={name}
                  status={status}                
                  gender={gender}                 
                  image={image}
                  onClose={onClose}
               />           
         ))}
      </div>
   );
}