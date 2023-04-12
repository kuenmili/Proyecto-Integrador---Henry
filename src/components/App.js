/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate, Route, Routes} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Detail from './Detail/Detail.jsx';
import Cards from './Cards/Cards.jsx';
import About from './About/About.jsx';
import Error from './Error/Error.jsx';
import Form from './Form/Form.jsx';
import Nav from './Nav/Nav.jsx';
import axios from 'axios';
import './App.css';
import Favorites from './Favorites/Favorites.jsx';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9ff44ddbb4e2.cbcb4bf50385afbcd471';

function App() {

   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const email = 'mmk21294@gmail.com';
   const password = 'mipass123';
   
   const {pathname} = useLocation();
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true)
         navigate("/home")
      } 
   };
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);     

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         };
      });
   };

   const onClose = (id) => {
      const filter = characters.filter(character => 
      character.id !== (id));
      setCharacters(filter);
   };  

   const logOut = () => {
      setAccess(false);
      navigate('/')
   }

      return (
         
         <div className="App">
            {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
            <Routes>      
               <Route path='/favorites' element={<Favorites/>}/> 
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>                
               <Route path='/:error' element={<Error/>}/>
               <Route path="/" element = {<Form login={login} />}/>
            </Routes>             
         </div>
      )
}

export default App;