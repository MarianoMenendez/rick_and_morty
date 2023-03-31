const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(userData){
    const errors = {}
    if(!userData.user) errors.user = "El correo elecrónico no debe estar vacío"
    else if(userData.user.length < 35) {
        console.log()
        if(!regexEmail.test(userData.user)) errors.user = "Debe ser un correo electrónico valido"
    } 
    else errors.user = "Se requiere un mensaje menor a 35 caracteres"
    if(userData.password.length > 5 && userData.password.length <=10 ) {
        const regexPass = /(\d+)/g
        const pass = userData.password.match(regexPass)
        console.log(pass)
        if(!pass) errors.password = "Debe contener al menos un número"    
    }
        else errors.password = "Debe contener entre 6 y 10 caracteres"
    return errors
  }