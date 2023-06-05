/* eslint-disable no-unused-vars */
import validation from "./validation";
import style from './Form.module.css';
import { useState } from "react";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
       
        setUserData({...userData, [property] : value});
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }   
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (

        <div className={style.container}>       
        <form onSubmit={handleSubmit} className={style.form}>           
            <div className={style.user}>
                <img className={style.image} src={process.env.PUBLIC_URL + '/foto-card.png'} alt="Imagen Rick Form" />
                {/* <label htmlFor="email">Email:</label> */}
                <input 
                    name="email"
                    type="email"
                    placeholder="Enter email" 
                    value={userData.email} 
                    onChange={handleChange}
                    className={style.input}
                    autoComplete="off"
                />
                {errors.email && <p className={style.error}>{errors.email}</p>}     
                
                
                {/* <label htmlFor="password">Password:</label> */}
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Enter password" 
                    value={userData.password}
                    onChange={handleChange}
                    className={style.input}
                    autoComplete="off"
                 />
                {errors.password && <p className={style.error}>{errors.password}</p>}

            
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}>Sign in</button>
            </div>
        </form>
    </div>
    )
};

export default Form;