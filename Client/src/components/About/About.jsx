import style from './About.module.css'

const About = () => {
return (
             <>            
        
            <div className={style.container}>
                <h2 className={style.title}> Welcome al espacio, Rickmorteros...</h2>
                </div>
            
            
            <div className={style.content}>
              <div>
                    <img classname= {style.img }src={process.env.PUBLIC_URL + '/about.jpg'} alt="Imagen Rick Form" />   
              </div>  
            
                <div className={style.info}> 
                    <h2>NAME | Milagros</h2>
			        <h2>STATUS | Viva</h2>
			        <h2>ORIGIN | Tierra</h2>
			        <h2>SPECIES | Humana</h2>
                </div>
            </div>
          
       
             
        </> 
     
)
}

export default About;