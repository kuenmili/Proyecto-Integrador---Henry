import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return (
      <div className= {style.container}>         
         {
            characters.map(({id, name, status, gender, image, origin}) => {            
               return (
                  <Card
                     id = {id}
                     key={id}
                     name={name}
                     status={status}                
                     gender={gender}                 
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                />  
               )         
            })
         }
      </div>
   );
}