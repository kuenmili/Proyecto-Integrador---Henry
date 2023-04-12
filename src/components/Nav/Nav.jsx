import SearchBar from "../Searchbar/SearchBar"
import { NavLink } from "react-router-dom"
import navStyle from "./Nav.module.css"




const Nav = ({onSearch, logOut}) => {
    
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    return(
        <nav className= {navStyle.nav}>
        
        <button className={navStyle.button}>
            <NavLink to="/about" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>About</NavLink>
        </button>       
        
        <button className={navStyle.button}>
            <NavLink to="/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>Home</NavLink>
        </button>        

        <button className={navStyle.button}>
            <NavLink to="/favorites" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>Favoritos</NavLink>
        </button>        
        
        <SearchBar onSearch={onSearch} /> 
        <button className={navStyle.button} onClick={() => onSearch(getRandom(1, 826))}>Random</button>                    
        <button className={navStyle.button} onClick={() => logOut()}>Cerrar sesión</button>
        </nav>        
    )
}

export default Nav;








