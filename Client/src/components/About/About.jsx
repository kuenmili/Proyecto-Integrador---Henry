import style from './About.module.css'

const About = () => {
return (
    <>
        <div className={style.container}>
            <h1 className= {style.title}> Welcome al espacio, Rickmorteros... </h1>  
            <p className= {style.p}>Este es mi humilde primer intento de Web, espero que les guste</p>    
        </div>
        <>
            <div className={style.lemonCont}>
                <img className={style.lemon} src={process.env.PUBLIC_URL + '/about2.png'} alt="Imagen Rick Form" />
                <img className={style.image} src={process.env.PUBLIC_URL + '/about.png'} alt="Imagen Rick Form" />
            </div>  
        
            
             
        </> 
   
   </>      
)
}

export default About;