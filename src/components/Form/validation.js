
// eslint-disable-next-line no-useless-escape
let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/

const validation = (userData, errors, setErrors) => {
    
    if(!userData.email){
        setErrors({...errors, email : "Ingrese correo electrónico"});}
    else if (userData.email.length > 35) {
        setErrors({...errors, email: "Correo electrónico demasiado largo"});}
    else if (!mail.test(userData.email)) {
        setErrors({...errors, email: 'Correo electrónico no es válido'})
    }
    else{
        setErrors({...errors, email: ''});
    };

    if(!userData.password){
        setErrors({...errors, password : ""});}
    else if (userData.password.length > 10) {
        setErrors({...errors, password: "Contraseña demasiado larga"})
    }
    else if(!/\d/.test(userData.password)){
        setErrors({...errors, password: 'Debe contener al menos un número'})
    }
    else{
        setErrors({...errors, password: "" });
    };
}

export default validation;
