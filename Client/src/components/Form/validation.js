const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'Email invalid';
    }
    if(!userData.email){ // userData.email.length === ''
        errors.email = 'Must enter email';
    }
    if(userData.email.length > 35){
        errors.email = 'Email must have less than 35 characters'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Password must contain at least one number'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Password must have between 6 and 10 characters'
    }

    return errors;
}

export default validation;