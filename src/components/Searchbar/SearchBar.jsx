import style from "./SearchBar.module.css"
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")

   const handleChange = (event) => {
     setId(event.target.value);      
   };
   
   return (
      <div className={style.searchbar}>
          <input type='search' onChange = {handleChange}  value={id} className={style.input} />
         <button onClick={() => {onSearch(id); setId('')}} className={style.addbutton}>Agregar</button> 
      </div>
   );
}
