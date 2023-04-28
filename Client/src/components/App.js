/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate, Route, Routes} from 'react-router-dom';
import Favorites from './Favorites/Favorites.jsx';
import { useState, useEffect} from 'react';
import Detail from './Detail/Detail.jsx';
import Cards from './Cards/Cards.jsx';
import About from './About/About.jsx';
import Error from './Error/Error.jsx';
import Form from './Form/Form.jsx';
import Nav from './Nav/Nav.jsx';
import axios from 'axios';
import './App.css';


function App() {

   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const {pathname} = useLocation();
   const navigate = useNavigate();

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);     

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            if (!characters.some(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
             } else {
               window.alert('¡Este personaje ya ha sido agregado!');
             }
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
         
         <div className='stars'></div>
         <div className='twinkling'></div>
         <div className='clouds'></div>
              

            {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} logOut={logOut}/>}
            <Routes>  
               <Route path="/" element = {<Form login={login} />}/>               
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>                
               <Route path='/:error' element={<Error/>}/>
               <Route path='/favorites' element={<Favorites/>}/>               
            </Routes>    
              
      </div>
   );
}

export default App;