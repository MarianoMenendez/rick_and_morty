import React, { useState } from "react";
import { validate } from "./validations";

export default function Login({login}) {
    const [userData, setUserData] = useState({user:"", password:""})
    const [errors, setErrors] = useState({user:"", password:""})
    function handleInputChange(event){
        setUserData({...userData,
            [event.target.name]: event.target.value})
        setErrors(validate({...userData,
            [event.target.name]: event.target.value}), console.log(errors))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        login(userData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Usuario:</label><input type="text" name="user" value={userData.user} onChange={handleInputChange}/>
            <p>{errors.user && errors.user}</p>
            <label>Contraseña:</label><input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
            <p>{errors.password && errors.password}</p>
            <button>Submit</button>
        </form>
    )
}