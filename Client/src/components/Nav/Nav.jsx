import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";
import navStyle from "./Nav.module.css";

const Nav = ({onSearch, logOut}) => {
    
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    return(
        <nav className= {navStyle.nav}>

         
        <SearchBar onSearch={onSearch} />
        <button onClick={() => onSearch(getRandom(1, 826))} className={navStyle.random}>Random</button>                    
        <Link to='/home' >             
                <img className={navStyle.image} src={process.env.PUBLIC_URL + '/morty.png'} alt="Imagen Rick Form" />
        </Link>
         <>  
          <div className={navStyle.linkContainer}>
            <Link to='/about' className={navStyle.link}> About </Link>
           
            <Link to='/favorites' className={navStyle.link}> Favorites </Link>
        </div>      
          </>      
        
        <button onClick={() => logOut()} className={navStyle.btn} >Log out</button>
        </nav>        
    )
}

export default Nav;








