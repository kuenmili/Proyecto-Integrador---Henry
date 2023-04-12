/* eslint-disable no-unused-vars */
import validation from "./validation";
import style from './Form.module.css';
import { useState } from "react";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",   
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
       
        setUserData({...userData, [property] : value});
        
        setErrors({...userData, [property] : value});
        validation({...userData, [property] : value}, errors, setErrors)
    };    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>           
            <div className={style.user}>
            <img className={style.image} src={process.env.PUBLIC_URL + '/foto-card.png'} alt="Imagen Rick Form" />
                {/* <label htmlFor="email">Email:</label> */}
                <input 
                    name="email"
                    type="email"
                    placeholder="Ingrese su correo electrónico" 
                    value={userData.email} 
                    onChange={handleChange}
                    className={style.input}
                />
                {errors.email && <p className={style.error}>{errors.email}</p>}     

                
                {/* <label htmlFor="password">Password:</label> */}
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={userData.password}
                    onChange={handleChange}
                    className={style.input}
                 />
                {errors.password && <p className={style.error}>{errors.password}</p>}

            
            <button className={style.button}>Iniciar sesión</button>
            </div>
        </form>
    )
};

export default Form;