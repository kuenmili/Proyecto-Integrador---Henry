import detailStyle from './Detail.module.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9ff44ddbb4e2.cbcb4bf50385afbcd471';

const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={detailStyle.container}>
            <h2>STATUS | {character?.status}</h2>
			<h2>SPECIES | {character?.species}</h2>
			<h2>GENDER | {character?.gender}</h2>
			<h2>ORIGIN | {character?.origin?.name}</h2>
        </div>
    )
}

export default Detail;