import detailStyle from './Detail.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const URL_BASE = "http://localhost:3001/rickandmorty/character";


const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios(`${URL_BASE}/${id}`)
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
            <div>
                <img src={character?.image} alt={character?.name} />
            </div>
            <>
                <div className={detailStyle.info}> 
                    <h2>NAME | {character?.name}</h2>
			        <h2>GENDER | {character?.gender}</h2>
                    <h2>STATUS | {character?.status}</h2>
			        <h2>ORIGIN | {character?.origin?.name}</h2>
			        <h2>SPECIES | {character?.species}</h2>
                </div>
            </>
        </div>
    )
}

export default Detail;