export const validateData = (nombreRegistro, emailRegistro, contraseñaRegistro) => {
   if(!nombreRegistro || !emailRegistro || !contraseñaRegistro){
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(nombreRegistro.lenght < 2 || !emailRegex.test(emailRegistro ) ){
        return false;
    }

     
    return true
  
}